import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { OakLeaf } from "@/components/Mark";

export const metadata: Metadata = {
  title: "Ministries",
  description:
    "Children's, Teen, Young Adult, and weekly Bible study ministries at Knotty Oak Baptist Church in Coventry, RI.",
  alternates: { canonical: "/ministries" },
};

type Ministry = {
  id: string;
  eyebrow: string;
  title: string;
  meta: string;
  description: string[];
  highlights?: { label: string; value: string }[];
  image: string;
  tone: "forest" | "harbor";
};

const ministries: Ministry[] = [
  {
    id: "children",
    eyebrow: "Age 4 – 6th Grade",
    title: "Children's Ministry",
    meta: "Sunday Mornings & Evenings",
    description: [
      "Children represent the greatest opportunity to make a long-term impact in our world for Christ. Our Children's Chapel meets every Sunday — morning and evening — with prayer, singing, age-grouped instruction, crafts, and refreshments.",
      "Children begin together, then split into classroom groups. On Sunday evenings they join the adults for worship before dismissing to their classes.",
    ],
    highlights: [
      { label: "Sunday School", value: "10:00 AM" },
      { label: "Children's Chapel (AM)", value: "11:00 AM" },
      { label: "Evening Classes", value: "6:00 PM" },
    ],
    image: "https://images.unsplash.com/flagged/photo-1567116681178-c326fa4e2c8b?auto=format&fit=crop&w=1400&q=80",
    tone: "forest",
  },
  {
    id: "teens",
    eyebrow: "Grades 7 – 12",
    title: "Teen Ministry",
    meta: "Year-Round",
    description: [
      "The teenage years are meant to prepare oneself for adulthood. We give students real opportunities for spiritual growth, leadership development, and Christian formation — alongside friendships that last well beyond high school.",
      "Our teens help lead VBS each August, join the church's July missions trip (tract distribution and door-to-door outreach at partner churches), and gather regularly for fellowship.",
    ],
    highlights: [
      { label: "Summer Missions", value: "July" },
      { label: "Teen VBS", value: "Grades 7–12 · August" },
      { label: "Fellowship Nights", value: "Monthly" },
    ],
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1400&q=80",
    tone: "harbor",
  },
  {
    id: "young-adults",
    eyebrow: "",
    title: "Adult Ministry",
    meta: "Monthly & Bi-Monthly",
    description: [
      "Relationship building and social activity are important aspects of the Christian life. Our young adults gather regularly for dinners, bowling, game nights, campfires, and baseball games — and worship together every Sunday.",
      "It's the kind of community you'd want for your early career, early marriage, and early-parenting years: real friends, serious about Scripture, enjoying life together.",
    ],
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1400&q=80",
    tone: "forest",
  },
  {
    id: "mens",
    eyebrow: "Tuesdays · 6:30 PM",
    title: "Men's Bible Study",
    meta: "Weekly",
    description: [
      "All men are welcome to join our weekly Bible study. Prayer and honest conversation — men sharpening one another in the Word.",
    ],
    highlights: [{ label: "Contact", value: "Pastor Justin · (401) 212-7233" }],
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1400&q=80",
    tone: "harbor",
  },
  {
    id: "ladies",
    eyebrow: "Tuesdays · 6:30 PM",
    title: "Ladies Bible Study",
    meta: "Weekly",
    description: [
      "All ladies are welcome. A warm, rooted study that meets women where they are — come as you are.",
    ],
    highlights: [{ label: "Contact", value: "Crystal Martin · (401) 226-5856" }],
    image: "https://images.unsplash.com/photo-1553729784-e91953dec042?auto=format&fit=crop&w=1400&q=80",
    tone: "forest",
  },
  {
    id: "vbs",
    eyebrow: "First Week of August",
    title: "Vacation Bible School",
    meta: "Annual",
    description: [
      "Knotty Oak has a long history of conducting excellent Vacation Bible Schools. Each year the first full week of August, children ages 5 through 12th grade enjoy a full week of teaching, recreation, crafts, and refreshments.",
      "The week closes with a Saturday Funfair and a Sunday Parent's Night — a warm invitation for the whole community.",
    ],
    image: "https://images.unsplash.com/photo-1638202951770-2240942c7d1c?auto=format&fit=crop&w=1400&q=80",
    tone: "harbor",
  },
  {
    id: "cef",
    eyebrow: "Children's Outreach",
    title: "Child Evangelism Fellowship",
    meta: "Year-Round",
    description: [
      "Knotty Oak partners with Child Evangelism Fellowship to reach boys and girls in our community with the Good News of Jesus Christ. Through Good News Clubs, 5-Day Clubs, and Bible-centered teaching, the Gospel is brought right where children are.",
      "It's one of the most direct ways our church family multiplies its impact — coming alongside CEF workers and supporting the simple, faithful work of teaching children Scripture.",
    ],
    image: "/cef.jpg",
    tone: "forest",
  },
];

export default function MinistriesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-0 bg-paper">
        {/* Page header */}
        <header className="max-w-5xl mx-auto px-6 md:px-10 text-center pb-16 md:pb-24">
          <div className="flex justify-center mb-6 text-brass">
            <OakLeaf className="w-10 h-10" />
          </div>
          <p className="eyebrow">Life at Knotty Oak</p>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl lg:text-7xl text-ink font-medium leading-[1.05] tracking-tight">
            Ministries for every
            <span className="italic text-forest-800"> season of life.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-ink-body leading-relaxed max-w-2xl mx-auto">
            From our youngest children to our seasoned saints, every ministry at
            Knotty Oak is built around the same two hopes: deeper engagement with
            God&rsquo;s Word, and richer fellowship with one another.
          </p>
        </header>

        {/* Alternating full-width ministry sections */}
        {ministries.map((m, idx) => (
          <section
            key={m.id}
            id={m.id}
            className={`py-20 md:py-28 ${idx % 2 === 0 ? "bg-paper" : "bg-paper-warm"}`}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-10">
              <div
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  idx % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative">
                  <div
                    className={`absolute -inset-3 rounded-sm ${
                      m.tone === "forest" ? "bg-forest-800" : "bg-harbor-800"
                    } ${idx % 2 === 0 ? "-rotate-1" : "rotate-1"}`}
                  />
                  <div
                    className="relative aspect-[5/4] rounded-sm overflow-hidden shadow-xl"
                    style={{
                      backgroundImage: `url('${m.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </div>

                <div>
                  <p className="eyebrow text-brass-dark">{m.eyebrow}</p>
                  <h2 className="mt-3 font-serif text-4xl md:text-5xl text-ink font-medium leading-tight tracking-tight">
                    {m.title}
                  </h2>
                  <p className="mt-2 text-forest-700 font-medium text-sm tracking-wide">
                    {m.meta}
                  </p>

                  <div className="mt-6 space-y-4 text-lg text-ink-body leading-relaxed">
                    {m.description.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  {m.highlights && (
                    <dl className="mt-8 grid sm:grid-cols-3 gap-4">
                      {m.highlights.map((h) => (
                        <div
                          key={h.label}
                          className={`p-4 rounded-sm ${
                            m.tone === "forest"
                              ? "bg-forest-100"
                              : "bg-harbor-100"
                          }`}
                        >
                          <dt className="eyebrow text-brass-dark">{h.label}</dt>
                          <dd className="mt-1 font-serif text-lg text-ink">{h.value}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Bottom CTA */}
        <section className="py-24 md:py-32 bg-forest-900 text-white text-center">
          <div className="max-w-2xl mx-auto px-6">
            <p className="eyebrow text-brass-light">Come Alongside</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium leading-tight tracking-tight">
              There&rsquo;s a place for you here.
            </h2>
            <p className="mt-6 text-forest-100/80 text-lg leading-relaxed">
              If you&rsquo;re unsure which ministry to start with, we&rsquo;d love
              to help. Give Pastor Justin a call — he&rsquo;ll meet you where you
              are.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="tel:+14012127233"
                className="inline-flex items-center gap-2 bg-brass text-forest-950 font-semibold text-sm tracking-wide uppercase px-8 py-4 rounded-full hover:bg-brass-light hover:-translate-y-0.5 transition-all shadow-lg"
              >
                Call Pastor Justin
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 text-white font-medium text-sm tracking-wide uppercase px-8 py-4 rounded-full border-2 border-white/30 hover:bg-white/10 hover:border-white/60 transition-all"
              >
                Send a Message
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
