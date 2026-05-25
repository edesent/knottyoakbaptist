import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { OakLeaf } from "@/components/Mark";

export const metadata: Metadata = {
  title: "Our Mission",
  description:
    "The mission and core beliefs of Knotty Oak Baptist Church — an Independent Baptist church in Coventry, Rhode Island.",
  alternates: { canonical: "/mission" },
};

const beliefs = [
  {
    heading: "The Word of God",
    body:
      "We not only believe the Bible, we seek to make a deep and thorough application of every precept within it. Scripture is our authority for faith and practice.",
  },
  {
    heading: "Evangelism & Discipleship",
    body:
      "Everything we do should be to the glory of God, with a particular focus on evangelism and discipleship, calling sinners to Christ and building saints up in Him.",
  },
  {
    heading: "Worship From the Heart",
    body:
      "Our worship is informal and reverent. We sing hymns and spiritual songs. Our preaching and teaching are thorough and practical, meeting believers and seekers where they are.",
  },
  {
    heading: "Inward Submission, Outward Obedience",
    body:
      "We emphasize developing the inner man through the Word of God, knowing that inward submission to Christ is what produces outward obedience.",
  },
  {
    heading: "Growth in the Likeness of Christ",
    body:
      "Members of our local body are expected to grow in Christian virtue, the knowledge of the Scriptures, the grace of God, the fruit of the Spirit, and in the likeness of our Lord Jesus Christ.",
  },
];

export default function MissionPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-0 bg-paper">
        {/* Hero statement */}
        <header className="max-w-4xl mx-auto px-6 md:px-10 text-center pb-16 md:pb-20">
          <div className="flex justify-center mb-6 text-brass">
            <OakLeaf className="w-10 h-10" />
          </div>
          <p className="eyebrow">Our Mission</p>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl lg:text-7xl text-ink font-medium leading-[1.05] tracking-tight">
            Everything we do,
            <span className="block italic text-forest-800">
              for the glory of God.
            </span>
          </h1>
        </header>

        {/* Mission statement */}
        <section className="bg-paper-warm py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-12 gap-10 md:gap-16">
              <div className="md:col-span-4">
                <p className="eyebrow">Our Charter</p>
                <h2 className="mt-3 font-serif text-3xl md:text-4xl text-ink font-medium leading-tight">
                  A local church, by New Testament design.
                </h2>
              </div>
              <div className="md:col-span-8 text-lg text-ink-body leading-relaxed space-y-5">
                <p>
                  Knotty Oak Baptist Church is incorporated under the laws of
                  the State of Rhode Island for the purpose of fulfilling the
                  plan of God for the local church as it is revealed in the New
                  Testament.
                </p>
                <p>
                  We are an Independent Baptist church, unaffiliated with any
                  denomination or governing body beyond our local congregation,
                  devoted to the preaching of the Word, the observance of the
                  ordinances, and the building up of the saints.
                </p>
                <p className="pull-quote text-2xl text-forest-800 border-l-2 border-brass/60 pl-6 mt-8">
                  &ldquo;Study to shew thyself approved unto God, a workman that
                  needeth not to be ashamed, rightly dividing the word of
                  truth.&rdquo;
                  <span className="block text-sm not-italic font-sans font-semibold tracking-[0.2em] uppercase text-brass-dark mt-3">
                    2 Timothy 2:15
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core beliefs */}
        <section className="py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 md:px-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="eyebrow">What We Believe</p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl text-ink font-medium leading-tight tracking-tight">
                Core convictions
                <span className="italic text-forest-800"> that shape us.</span>
              </h2>
            </div>

            <ol className="space-y-12">
              {beliefs.map((b, idx) => (
                <li
                  key={b.heading}
                  className="grid md:grid-cols-12 gap-6 md:gap-10 items-start pb-12 border-b border-ink-faint/20 last:border-0"
                >
                  <div className="md:col-span-2 flex md:justify-end">
                    <span className="font-serif text-5xl text-brass/70 leading-none tabular-nums">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="md:col-span-10">
                    <h3 className="font-serif text-2xl md:text-3xl text-ink font-medium leading-snug">
                      {b.heading}
                    </h3>
                    <p className="mt-3 text-lg text-ink-body leading-relaxed">
                      {b.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-24 md:py-32 bg-harbor-950 text-white text-center">
          <div className="max-w-2xl mx-auto px-6">
            <p className="eyebrow text-brass-light">You&rsquo;re Welcome Here</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium leading-tight tracking-tight">
              Come and see for yourself.
            </h2>
            <p className="mt-6 text-harbor-100/80 text-lg leading-relaxed">
              The warmest welcome is the one you experience in person. Join us this
              Sunday, we&rsquo;d love to meet you.
            </p>
            <div className="mt-10">
              <a
                href="/#services"
                className="inline-flex items-center gap-2 bg-brass text-forest-950 font-semibold text-sm tracking-wide uppercase px-8 py-4 rounded-full hover:bg-brass-light hover:-translate-y-0.5 transition-all shadow-lg"
              >
                See Service Times
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
