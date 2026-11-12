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
  return [
    {
      title: "Fall Clean Up Day",
      when: "Saturday, November 21 · 10:00 AM",
      dayLabel: "21",
      dateLabel: "Nov",
      description: "We need your help! Come lend a hand getting the church ready for winter.",
    },
    {
      title: "Pies & Praise Service",
      when: "Wednesday, November 25 · 6:00 PM",
      dayLabel: "25",
      dateLabel: "Nov",
      description: "A Thanksgiving eve service of praise. Bring your favorite pie!",
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
