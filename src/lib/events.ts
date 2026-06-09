export type ChurchEvent = {
  title: string;
  when: string;
  dayLabel: string;
  dateLabel?: string;
  description: string;
  contact?: string;
  recurring?: boolean;
  flyer?: string;
};

// Placeholder events — wire up to Google Sheets later by replacing `getEvents()`.
// To publish: File → Share → Publish to web → CSV, then fetch + parse here.
export async function getEvents(): Promise<ChurchEvent[]> {
  return [
    {
      title: "Children's Day",
      when: "Sunday, June 14 · 10:00 AM to 12:00 PM",
      dayLabel: "14",
      dateLabel: "June",
      description:
        "Bring the whole family for a morning made just for the kids. We'll have games, a Bible story, a bounce house, and plenty more. Open to kids ages K through 6.",
      flyer: "/1443.png",
    },
    {
      title: "Men's Bible Study",
      when: "Tuesdays · 6:30 PM",
      dayLabel: "Tue",
      description:
        "All men are welcome to join our weekly Bible study, a time for the Word, prayer, and fellowship.",
      contact: "Pastor Justin · (401) 212-7233",
      recurring: true,
    },
    {
      title: "Ladies Bible Study",
      when: "Tuesdays · 6:30 PM",
      dayLabel: "Tue",
      description:
        "All ladies are welcome. Warm fellowship rooted in Scripture, come just as you are.",
      contact: "Crystal Martin · (401) 226-5856",
      recurring: true,
    },
    {
      title: "Vacation Bible School",
      when: "First full week of August",
      dayLabel: "Aug",
      dateLabel: "Summer",
      description:
        "A week of teaching, crafts, games, and joy for children ages 5 through 12th grade. Concludes Saturday with our Funfair and Sunday Parent's Night.",
      recurring: true,
    },
  ];
}
