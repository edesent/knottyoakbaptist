export type ChurchEvent = {
  title: string;
  when: string;
  dayLabel: string;
  dateLabel?: string;
  description: string;
  contact?: string;
  recurring?: boolean;
};

// Placeholder events — wire up to Google Sheets later by replacing `getEvents()`.
// To publish: File → Share → Publish to web → CSV, then fetch + parse here.
export async function getEvents(): Promise<ChurchEvent[]> {
  return [
    {
      title: "Men's Bible Study",
      when: "Tuesdays · 6:30 PM",
      dayLabel: "Tue",
      description:
        "All men are welcome to join our weekly Bible study — a time for the Word, prayer, and fellowship.",
      contact: "Pastor Justin · (401) 212-7233",
      recurring: true,
    },
    {
      title: "Ladies Bible Study",
      when: "Tuesdays · 6:30 PM",
      dayLabel: "Tue",
      description:
        "All ladies are welcome. Warm fellowship rooted in Scripture — come just as you are.",
      contact: "Crystal Martin · (401) 226-5856",
      recurring: true,
    },
    {
      title: "Memorial Day Church Picnic",
      when: "Monday, May 25 · 12:00 PM",
      dayLabel: "25",
      dateLabel: "May",
      description:
        "Join us for our annual church picnic! Please do not arrive before noon. Bring something to share with everyone.",
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
