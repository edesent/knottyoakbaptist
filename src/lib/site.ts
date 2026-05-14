export const site = {
  name: "Knotty Oak Baptist Church",
  shortName: "Knotty Oak Baptist",
  tagline: "Speaking the Truth in Love",
  foundingDate: "1840",
  url: "https://www.knottyoak.org",

  address: {
    line1: "11 Knotty Oak Road",
    city: "Coventry",
    state: "RI",
    postal: "02816",
    full: "11 Knotty Oak Road, Coventry, RI 02816",
  },

  phones: {
    church: "(401) 828-5856",
    churchTel: "+14018285856",
    pastor: "(401) 212-7233",
    pastorTel: "+14012127233",
  },

  email: "pastor@knottyoak.org",

  pastor: {
    name: "Pastor Justin Martin",
    shortName: "Pastor Justin",
  },

  social: {
    facebook: "https://www.facebook.com/knottyoakbaptistchurch02816/",
  },

  services: [
    { label: "Sunday School",     time: "10:00 AM",  day: "Sunday",   iso: "10:00" },
    { label: "Morning Worship",   time: "11:00 AM", day: "Sunday",   iso: "11:00" },
    { label: "Evening Service",   time: "6:00 PM",  day: "Sunday",   iso: "18:00" },
    { label: "Bible Study & Prayer", time: "6:00 PM", day: "Thursday", iso: "18:00" },
  ],

  weeklyMeetings: [
    {
      label: "Men's Bible Study",
      when: "Tuesday · 6:30 PM",
      contact: "Pastor Justin · (401) 212-7233",
      blurb: "All men are welcome. A time for study, prayer, and sharpening one another in the Word.",
    },
    {
      label: "Ladies Bible Study",
      when: "Tuesday · 6:30 PM",
      contact: "Crystal Martin · (401) 226-5856",
      blurb: "All ladies are welcome. Warm fellowship rooted in Scripture — come as you are.",
    },
  ],
} as const;
