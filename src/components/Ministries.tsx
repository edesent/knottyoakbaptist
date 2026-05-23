import Link from "next/link";

const ministries = [
  {
    name: "Children's Ministry",
    age: "Age 4 to 6th Grade",
    blurb:
      "Children represent the greatest opportunity to make a long-term impact for Christ. Sunday morning and evening chapel with prayer, singing, teaching, crafts, and snacks — plus our annual VBS each August.",
    href: "/ministries#children",
    image: "https://images.unsplash.com/flagged/photo-1567116681178-c326fa4e2c8b?auto=format&fit=crop&w=800&q=80",
    accent: "forest",
  },
  {
    name: "Teen Ministry",
    age: "Grades 7 – 12",
    blurb:
      "The teenage years are preparation for adulthood — a season for spiritual growth and leadership. Summer missions, VBS leadership, and year-round fellowship activities build deep, lasting friendships.",
    href: "/ministries#teens",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80",
    accent: "harbor",
  },
  {
    name: "Adult Ministry",
    age: "",
    blurb:
      "Relationship building and social activity are vital to the Christian life. We gather monthly for dinners, game nights, bowling, baseball games, and campfires — and weekly for worship.",
    href: "/ministries#young-adults",
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=800&q=80",
    accent: "forest",
  },
  {
    name: "Men's Bible Study",
    age: "Tuesday · 6:30 PM",
    blurb:
      "All men are welcome — a time to study Scripture, pray together, and sharpen one another in the Word. Contact Pastor Justin at (401) 212-7233.",
    href: "/ministries#mens",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80",
    accent: "harbor",
  },
  {
    name: "Ladies Bible Study",
    age: "Tuesday · 6:30 PM",
    blurb:
      "All ladies are welcome — warm fellowship rooted in Scripture. Come as you are. Contact Crystal Martin at (401) 226-5856.",
    href: "/ministries#ladies",
    image: "https://images.unsplash.com/photo-1553729784-e91953dec042?auto=format&fit=crop&w=800&q=80",
    accent: "forest",
  },
  {
    name: "Vacation Bible School",
    age: "First Full Week of August",
    blurb:
      "A long-loved summer tradition — a full week of Bible teaching, recreation, crafts, and joy, capped by a Saturday Funfair and Parent's Night.",
    href: "/ministries#vbs",
    image: "https://images.unsplash.com/photo-1638202951770-2240942c7d1c?auto=format&fit=crop&w=800&q=80",
    accent: "harbor",
  },
  {
    name: "Child Evangelism Fellowship",
    age: "Year-Round",
    blurb:
      "Partnering with CEF to reach boys and girls with the Good News of Jesus Christ through Good News Clubs and Bible-centered teaching in our community.",
    href: "/ministries#cef",
    image: "/cef.jpg",
    accent: "forest",
  },
];

export default function Ministries() {
  return (
    <section id="ministries" className="relative py-28 md:py-36 bg-paper">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow">Life Together</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-ink font-medium leading-[1.05] tracking-tight">
            Ministries for every
            <span className="italic text-forest-800"> season of life.</span>
          </h2>
          <p className="mt-6 text-lg text-ink-body leading-relaxed">
            From young children to seasoned saints, our ministries are built around
            real fellowship and serious engagement with Scripture. You&rsquo;ll find
            a place here.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ministries.map((m) => (
            <Link
              key={m.name}
              href={m.href}
              className="group relative overflow-hidden rounded-sm bg-forest-900 aspect-[4/5] shadow-md hover:shadow-2xl transition-all"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('${m.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  m.accent === "forest"
                    ? "bg-gradient-to-t from-forest-950 via-forest-950/65 to-forest-950/20"
                    : "bg-gradient-to-t from-harbor-950 via-harbor-950/65 to-harbor-950/20"
                }`}
              />

              <div className="relative h-full p-7 flex flex-col justify-end text-white">
                <p className="text-[0.68rem] font-semibold tracking-[0.25em] uppercase text-brass-light">
                  {m.age}
                </p>
                <h3 className="mt-2 font-serif text-2xl md:text-[1.7rem] font-medium leading-tight">
                  {m.name}
                </h3>
                <p className="mt-3 text-sm text-white/80 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">
                  {m.blurb}
                </p>
                <p className="mt-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-brass-light opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <span aria-hidden>→</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
