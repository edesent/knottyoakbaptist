import { site } from "@/lib/site";

export default function LiveBanner({ top = "top-0" }: { top?: string }) {
  if (!site.live.isLive) return null;

  return (
    <a
      href={site.live.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed ${top} inset-x-0 z-[60] h-10 bg-red-600 text-white flex items-center justify-center gap-2 text-sm font-semibold tracking-wide hover:bg-red-700 transition-colors`}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
      </span>
      {site.live.message}
    </a>
  );
}
