export type Sermon = {
  videoId: string;
  title: string;
  published: string;
  thumbnail: string;
  views?: number;
};

const CHANNEL_ID = "UCfE_WRoS-ZFDS-qDD1cdNbg";
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@KnottyOakBaptistChurch";

function unescapeXml(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

export async function fetchSermons(): Promise<Sermon[]> {
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const xml = await res.text();

    const entries: Sermon[] = [];
    for (const match of xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)) {
      const entry = match[1];
      const videoId = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1];
      const title = entry.match(/<title>([^<]+)<\/title>/)?.[1];
      const published = entry.match(/<published>([^<]+)<\/published>/)?.[1];
      const thumbnail = entry.match(/<media:thumbnail\s+url="([^"]+)"/)?.[1];
      const views = entry.match(/views="(\d+)"/)?.[1];

      if (videoId && title && published && thumbnail) {
        entries.push({
          videoId,
          title: unescapeXml(title),
          published,
          thumbnail,
          views: views ? Number(views) : undefined,
        });
      }
    }
    return entries;
  } catch {
    return [];
  }
}

export function formatSermonDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Returns the video ID of an active live broadcast, or null if idle.
// Uses the unauthenticated /channel/{id}/live endpoint — when a live
// broadcast is active YouTube serves the live watch page and the canonical
// URL points to /watch?v={videoId}; when idle it points back to the channel.
export async function fetchLiveVideoId(): Promise<string | null> {
  try {
    const url = `https://www.youtube.com/channel/${CHANNEL_ID}/live`;
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0" },
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const html = await res.text();
    const canonical =
      html.match(/<link rel="canonical"\s+href="([^"]+)"/)?.[1] ?? "";
    const videoMatch = canonical.match(/[?&]v=([A-Za-z0-9_-]{11})/);
    return videoMatch?.[1] ?? null;
  } catch {
    return null;
  }
}
