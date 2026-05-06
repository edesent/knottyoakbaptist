import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { OakLeaf } from "@/components/Mark";

export const metadata: Metadata = {
  title: "Church Covenant",
  description:
    "The Church Covenant of Knotty Oak Baptist Church — how we walk together as a body in Coventry, Rhode Island.",
  alternates: { canonical: "/covenant" },
};

const engagements = [
  "That we will exercise a Christian care and watchfulness over one another, and that we will faithfully admonish and entreat one another as occasion may require.",
  "That we will not forsake the assembling of ourselves together, nor neglect the sacred duty of prayer both for ourselves and for others.",
  "That we will endeavor to bring up such as may at any time be under our care in the nurture and admonition of the Lord.",
  "That by a pure and lovable example we will strive to win our kindred and acquaintances to the Savior, and that we will share in the burdens and sorrows of one another.",
  "That we will seek God's aid to enable us to live watchfully and circumspectly in this world, by denying ungodliness and worldly lusts, and remembering that as we have voluntarily been buried by baptism and raised up from that emblematic grave, so there is upon us a special obligation to lead a new and holy life.",
  "That we will strive together for the support of a faithful, evangelical ministry among us, and that through our life — amidst evil report and good report — we will seek to live to the glory of Him who has called us out of darkness and into His marvelous light.",
];

export default function CovenantPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-0 bg-paper">
        <header className="max-w-4xl mx-auto px-6 md:px-10 text-center pb-16 md:pb-20">
          <div className="flex justify-center mb-6 text-brass">
            <OakLeaf className="w-10 h-10" />
          </div>
          <p className="eyebrow">Church Covenant</p>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl lg:text-7xl text-ink font-medium leading-[1.05] tracking-tight">
            We covenant to walk
            <span className="block italic text-forest-800">together.</span>
          </h1>
        </header>

        <section className="bg-paper-warm py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-6 md:px-10">
            <p className="font-serif text-2xl md:text-3xl text-ink leading-relaxed">
              Having, as we trust, been brought by divine grace seriously and
              forever to give up ourselves in faith and love, and in obedience to
              God the Father, Son, and Holy Ghost, and having been baptized upon
              our profession of faith, we do now solemnly and joyfully covenant
              with one another to walk together in a church relationship, in
              brotherly love, to the honor and glory of God.
            </p>

            <div className="my-14 flex justify-center text-brass/70" aria-hidden>
              <span className="tracking-[1.5em] text-xl">❖❖❖</span>
            </div>

            <p className="text-lg text-ink-body leading-relaxed italic">
              We do, in His strength, engage —
            </p>

            <ol className="mt-8 space-y-10">
              {engagements.map((text, idx) => (
                <li
                  key={idx}
                  className="grid grid-cols-[auto_1fr] gap-6 md:gap-8 items-start pb-10 border-b border-ink-faint/20 last:border-0 last:pb-0"
                >
                  <span className="font-serif text-4xl md:text-5xl text-brass/70 leading-none tabular-nums">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <p className="text-lg md:text-xl text-ink-body leading-relaxed">
                    {text}
                  </p>
                </li>
              ))}
            </ol>

            <div className="my-14 flex justify-center text-brass/70" aria-hidden>
              <span className="tracking-[1.5em] text-xl">❖❖❖</span>
            </div>

            <p className="text-center text-sm italic text-ink-body/70">
              Adopted by Knotty Oak Baptist Church · Coventry, Rhode Island
            </p>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-harbor-950 text-white text-center">
          <div className="max-w-2xl mx-auto px-6">
            <p className="eyebrow text-brass-light">Walk With Us</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium leading-tight tracking-tight">
              A family, by grace.
            </h2>
            <p className="mt-6 text-harbor-100/80 text-lg leading-relaxed">
              If you&rsquo;d like to know more about membership, baptism, or what
              it means to walk with this church family, Pastor Justin would love
              to talk with you.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="tel:+14012127233"
                className="inline-flex items-center gap-2 bg-brass text-forest-950 font-semibold text-sm tracking-wide uppercase px-8 py-4 rounded-full hover:bg-brass-light hover:-translate-y-0.5 transition-all shadow-lg"
              >
                Call Pastor Justin
              </a>
              <Link
                href="/beliefs"
                className="inline-flex items-center gap-2 text-white font-medium text-sm tracking-wide uppercase px-8 py-4 rounded-full border-2 border-white/30 hover:bg-white/10 hover:border-white/60 transition-all"
              >
                Statement of Faith
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
