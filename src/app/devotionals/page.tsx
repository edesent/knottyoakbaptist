import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { OakLeaf } from "@/components/Mark";

export const metadata: Metadata = {
  title: "Devotionals",
  description:
    "A collection of trusted KJV devotional resources to encourage your daily walk with the Lord.",
  alternates: { canonical: "/devotionals" },
};

const devotionals = [
  {
    name: "Daily Light on the Daily Path",
    description:
      "Nothing but scripture. Morning and evening readings grouped around a theme for every day of the year. No commentary, no opinion — just the Word of God speaking for itself. This one has been in print since 1875 for good reason.",
    url: "https://www.dailylight.org",
    label: "Read Today's Reading",
  },
  {
    name: "Stepping in the Light",
    description:
      "A KJV devotional that takes you through the entire Bible in a year. Each day's thought comes straight out of that day's reading. Simple, scripture-driven, and exactly what it needs to be.",
    url: "https://kjvdevos.com",
    label: "Read Today's Devotional",
  },
  {
    name: "Spurgeon's Morning and Evening",
    description:
      "Charles Spurgeon. Morning and evening readings for every day of the year. He preached the Word plainly, loved the Lord deeply, and this devotional has fed Christians for over 150 years.",
    url: "https://www.spurgeon.org/resource-library/devotionals/",
    label: "Read Today's Reading",
  },
  {
    name: "My Utmost for His Highest",
    description:
      "Oswald Chambers wrote with a depth that still cuts. A daily reading that challenges you to give God everything, not just your Sunday morning. One of the most widely read devotionals in church history.",
    url: "https://utmost.org",
    label: "Read Today's Reading",
  },
];

export default function DevotionalsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-0 bg-paper">
        <header className="max-w-4xl mx-auto px-6 md:px-10 text-center pb-16 md:pb-20">
          <div className="flex justify-center mb-6 text-brass">
            <OakLeaf className="w-10 h-10" />
          </div>
          <p className="eyebrow">Daily Reading</p>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl lg:text-7xl text-ink font-medium leading-[1.05] tracking-tight">
            Feed on the
            <span className="block italic text-forest-800">Word every day.</span>
          </h1>
          <p className="mt-8 text-lg text-ink-body leading-relaxed max-w-2xl mx-auto">
            A few trusted places to spend a few minutes in the Word. KJV. Sound. Encouraging.
            Something you can open on your phone before your feet hit the floor.
          </p>
        </header>

        <section className="py-20 md:py-28 bg-paper-warm">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <div className="grid gap-8 md:gap-10">
              {devotionals.map((d) => (
                <div
                  key={d.name}
                  className="bg-paper border border-ink-faint/15 rounded-sm p-8 md:p-10 shadow-sm"
                >
                  <h2 className="font-serif text-2xl md:text-3xl text-ink font-medium leading-tight tracking-tight">
                    {d.name}
                  </h2>
                  <p className="mt-4 text-ink-body leading-relaxed">{d.description}</p>
                  <a
                    href={d.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.18em] uppercase text-forest-800 hover:text-forest-950 transition-colors"
                  >
                    {d.label} ↗
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-forest-950 text-white text-center">
          <div className="max-w-2xl mx-auto px-6">
            <p className="eyebrow text-brass-light">Keep Going</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium leading-tight tracking-tight">
              The Word is a lamp unto your feet.
            </h2>
            <p className="mt-6 text-forest-100/80 text-lg leading-relaxed">
              Psalm 119:105. A little light is enough for the next step. Keep reading.
            </p>
            <div className="mt-10">
              <a
                href="/prayer"
                className="inline-flex items-center gap-2 bg-brass text-forest-950 font-semibold text-sm tracking-wide uppercase px-8 py-4 rounded-full hover:bg-brass-light hover:-translate-y-0.5 transition-all shadow-lg"
              >
                Submit a Prayer Request
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
