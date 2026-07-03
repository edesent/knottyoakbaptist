import { getNextGame } from "./softball";

export type ChurchEvent = {
  title: string;
  when: string;
  dayLabel: string;
  dateLabel?: string;
  description: string;
  contact?: string;
  recurring?: boolean;
  flyer?: string;
  link?: string;
  linkLabel?: string;
  bgIcon?: string;
};

// Placeholder events — wire up to Google Sheets later by replacing `getEvents()`.
// To publish: File → Share → Publish to web → CSV, then fetch + parse here.
export async function getEvents(): Promise<ChurchEvent[]> {
  const nextGame = getNextGame();
  const softballDescription = nextGame
    ? `Next game: ${nextGame.opponent} at ${nextGame.field}, ${nextGame.date} · ${nextGame.time}. Bring the family and cheer us on!`
    : "Check back soon for our next game.";

  return [
    {
      title: "Love Feast Cookout",
      when: "Sunday, July 5th · After Morning Worship",
      dayLabel: "5",
      dateLabel: "Jul",
      description:
        "Join us for our Love Feast Cookout right after morning worship on Sunday, July 5th! Bring drinks or a dish to share.",
      flyer: "/1765.png",
      bgIcon: "🍖",
    },
    {
      title: "Vacation Bible School",
      when: "First full week of August",
      dayLabel: "Aug",
      dateLabel: "Summer",
      description:
        "A week of teaching, crafts, games, and joy for children ages 5 through 12th grade. Concludes Saturday with our Funfair and Sunday Parent's Night.",
      recurring: true,
      flyer: "/2027.png",
      bgIcon: "🎨",
    },
    {
      title: "Church Softball",
      when: "Mondays · 6:45 PM",
      dayLabel: "Mon",
      description: softballDescription,
      recurring: true,
      link: "/softball",
      linkLabel: "View Game Schedule",
      bgIcon: "🥎",
    },
    {
      title: "Men's Bible Study",
      when: "Tuesdays · 6:30 PM",
      dayLabel: "Tue",
      description:
        "All men are welcome to join our weekly Bible study, a time for the Word, prayer, and fellowship.",
      contact: "Pastor Justin · (401) 212-7233",
      recurring: true,
      bgIcon: "📖",
    },
    {
      title: "Ladies Bible Study",
      when: "Tuesdays · 6:30 PM",
      dayLabel: "Tue",
      description:
        "All ladies are welcome. Warm fellowship rooted in Scripture, come just as you are.",
      contact: "Crystal Martin · (401) 226-5856",
      recurring: true,
      bgIcon: "🌷",
    },
  ];
}
