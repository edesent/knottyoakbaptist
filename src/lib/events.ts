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
      title: "Lake Compounce Trip",
      when: "Saturday, August 22",
      dayLabel: "Aug",
      dateLabel: "22",
      description:
        "A church day trip to Lake Compounce in Bristol, CT! $30 per person covers admission to both the amusement park and the water park. Bring appropriate clothing, a swimsuit, and a towel. Space is limited, so sign up soon!",
      contact: "Crystal Martin · (401) 226-5856",
      flyer: "/2756.png",
      link: "/lake-compounce",
      linkLabel: "Sign Up Here",
      bgIcon: "🎢",
    },
    {
      title: "Church Softball",
      when: nextGame ? `Mondays · ${nextGame.time}` : "Mondays · 6:45 PM",
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
