import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { OakLeaf } from "@/components/Mark";

export const metadata: Metadata = {
  title: "How to Be Saved",
  description:
    "Do you want to know how to have your sins forgiven and know for certain you are going to heaven? Find out here.",
  alternates: { canonical: "/gospel" },
};

export default function GospelPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-0 bg-paper">

        {/* Header */}
        <header className="max-w-4xl mx-auto px-6 md:px-10 text-center pb-16 md:pb-20">
          <div className="flex justify-center mb-6 text-brass">
            <OakLeaf className="w-10 h-10" />
          </div>
          <p className="eyebrow">The Gospel</p>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl lg:text-7xl text-ink font-medium leading-[1.05] tracking-tight">
            How to
            <span className="block italic text-forest-800">be saved.</span>
          </h1>
          <p className="mt-8 text-lg text-ink-body leading-relaxed max-w-2xl mx-auto">
            Maybe somebody sent you this link. Maybe you found it on your own.
            Either way, this page is for anybody who wants to know how to have
            eternal life through Jesus Christ.
          </p>
        </header>

        {/* Content */}
        <section className="bg-paper-warm py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-6 md:px-10 space-y-20">

            {/* Section 1 */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-ink font-medium leading-snug tracking-tight mb-6">
                You have a problem. So does everybody else.
              </h2>
              <div className="space-y-5 text-lg text-ink-body leading-relaxed">
                <p>
                  The Bible is honest about this. Every person who has ever
                  lived has sinned. Not just the people we would call bad
                  people. All of us.
                </p>
                <blockquote className="border-l-4 border-brass pl-6 py-2 italic text-ink font-serif text-xl">
                  &ldquo;For all have sinned, and come short of the glory of
                  God.&rdquo;
                  <cite className="block not-italic text-sm font-semibold tracking-[0.18em] uppercase text-brass-dark mt-2">
                    Romans 3:23
                  </cite>
                </blockquote>
                <p>
                  Sin is not just the big stuff. Sin is anything that falls
                  short of what God requires. And none of us make the cut on
                  our own.
                </p>
                <p>And that sin has a consequence.</p>
                <blockquote className="border-l-4 border-brass pl-6 py-2 italic text-ink font-serif text-xl">
                  &ldquo;For the wages of sin is death.&rdquo;
                  <cite className="block not-italic text-sm font-semibold tracking-[0.18em] uppercase text-brass-dark mt-2">
                    Romans 6:23
                  </cite>
                </blockquote>
                <p>
                  That death is not just physical. It is spiritual. Eternal
                  separation from God. That is where every one of us starts.
                  And there is nothing you can do on your own to fix it.
                </p>
              </div>
            </div>

            <hr className="border-ink-faint/20" />

            {/* Section 2 */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-ink font-medium leading-snug tracking-tight mb-6">
                But God did not leave it there.
              </h2>
              <div className="space-y-5 text-lg text-ink-body leading-relaxed">
                <p>
                  God loves you. Not because you have earned it. Not because
                  you are a good person. He loves you because that is who He
                  is. And because He loves you, He did something about your
                  problem.
                </p>
                <p>
                  He sent His Son, Jesus Christ, into this world. Jesus lived
                  the perfect life none of us could live. Then He went to a
                  cross and died. Not for anything He did. For what you and I
                  did. He took the penalty that belonged to us.
                </p>
                <p>And three days later He rose from the dead.</p>
                <blockquote className="border-l-4 border-brass pl-6 py-2 italic text-ink font-serif text-xl">
                  &ldquo;Christ died for our sins according to the scriptures,
                  and that he was buried, and that he rose again the third day
                  according to the scriptures.&rdquo;
                  <cite className="block not-italic text-sm font-semibold tracking-[0.18em] uppercase text-brass-dark mt-2">
                    1 Corinthians 15:3&ndash;4
                  </cite>
                </blockquote>
              </div>
            </div>

            <hr className="border-ink-faint/20" />

            {/* Section 3 */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-ink font-medium leading-snug tracking-tight mb-6">
                So what does God ask of you?
              </h2>
              <div className="space-y-5 text-lg text-ink-body leading-relaxed">
                <p>
                  Not to clean your life up first. Not to promise you will
                  never sin again. Not to join a church or do enough good
                  things to tip the scales.
                </p>
                <p className="font-semibold text-ink">
                  Just this. Stop trusting yourself to get to God.
                </p>
                <p>
                  Maybe you have been trusting your good works. Maybe your
                  religion. Maybe you figured you are a decent enough person
                  and God will let you in. The Bible says that road does not
                  lead where you think it does.
                </p>
                <blockquote className="border-l-4 border-brass pl-6 py-2 italic text-ink font-serif text-xl">
                  &ldquo;Jesus saith unto him, I am the way, the truth, and
                  the life: no man cometh unto the Father, but by me.&rdquo;
                  <cite className="block not-italic text-sm font-semibold tracking-[0.18em] uppercase text-brass-dark mt-2">
                    John 14:6
                  </cite>
                </blockquote>
                <p>
                  There is only one way to God and that is through Jesus
                  Christ. Turning from the idea that you can get there on your
                  own and putting your full trust in Jesus Christ alone. That
                  is what the Bible calls repentance and faith. And that is
                  what God is asking of you.
                </p>
              </div>
            </div>

            <hr className="border-ink-faint/20" />

            {/* Section 4 */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-ink font-medium leading-snug tracking-tight mb-6">
                You can settle this right now.
              </h2>
              <div className="space-y-5 text-lg text-ink-body leading-relaxed">
                <p>
                  You do not have to wait. You do not have to be in a church.
                  You do not have to talk to a pastor first.
                </p>
                <blockquote className="border-l-4 border-brass pl-6 py-2 italic text-ink font-serif text-xl">
                  &ldquo;For whosoever shall call upon the name of the Lord
                  shall be saved.&rdquo;
                  <cite className="block not-italic text-sm font-semibold tracking-[0.18em] uppercase text-brass-dark mt-2">
                    Romans 10:13
                  </cite>
                </blockquote>
                <p>
                  That word whosoever includes you. It does not matter what
                  you have done. It does not matter how long you have waited.
                </p>
                <p>
                  If you are ready to turn from trusting yourself and put your
                  faith in Jesus Christ alone, talk to God right now in your
                  own words. Tell Him you know you are a sinner. Tell Him you
                  believe Jesus Christ died for you and rose again. Tell Him
                  you are trusting Him and Him alone to save you.
                </p>
                <p>
                  If you meant that from your heart, the Bible says you are
                  saved. Not because of how you felt. Not because of the words
                  you used. Because God keeps His word.
                </p>
              </div>
            </div>

            <hr className="border-ink-faint/20" />

            {/* Section 5 */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-ink font-medium leading-snug tracking-tight mb-6">
                What comes next?
              </h2>
              <div className="space-y-5 text-lg text-ink-body leading-relaxed">
                <p>
                  <span className="font-semibold text-ink">Get into a Bible.</span>{" "}
                  Start in the Gospel of John. Just start reading.
                </p>
                <p>
                  <span className="font-semibold text-ink">Get into a church.</span>{" "}
                  God never meant for you to walk this out alone. You need
                  other believers around you and you need to be under the
                  preaching of the Word every week. But not just any church.
                  Find a church that believes the Bible and preaches it
                  straight.
                </p>
                <p>
                  If you are anywhere near Coventry Rhode Island we would love
                  to have you. Come as you are. Reach out to us through this
                  website, give us a call, or use the chat and we will get back
                  to you. We even have a church van and would be glad to come
                  pick you up.
                </p>
                <p>
                  <span className="font-semibold text-ink">Get baptized.</span>{" "}
                  It will not save you. But it is the first step of obedience
                  after you are saved and it matters.
                </p>
                <p>
                  If you are not nearby and need help finding a Bible believing
                  church in your area, reach out to us. Pastor Justin would be
                  more than happy to help you find one. You can email{" "}
                  <a
                    href="mailto:pastor@knottyoak.org"
                    className="text-forest-700 underline underline-offset-2 hover:text-forest-900"
                  >
                    pastor@knottyoak.org
                  </a>{" "}
                  or call or text Pastor Justin directly at{" "}
                  <a
                    href="sms:+14012127233"
                    className="text-forest-700 underline underline-offset-2 hover:text-forest-900"
                  >
                    (401) 212-7233
                  </a>
                  . Texting is usually the quickest way to reach him.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 bg-forest-950 text-white text-center">
          <div className="max-w-2xl mx-auto px-6">
            <p className="eyebrow text-brass-light">Knotty Oak Baptist Church</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium leading-tight tracking-tight">
              11 Knotty Oak Road, Coventry RI.
              <span className="block italic text-forest-300 mt-2">
                Sunday morning at 11.
              </span>
            </h2>
            <p className="mt-6 text-forest-100/80 text-lg leading-relaxed">
              You are welcome here.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-brass text-forest-950 font-semibold text-sm tracking-wide uppercase px-8 py-4 rounded-full hover:bg-brass-light hover:-translate-y-0.5 transition-all shadow-lg"
              >
                Get in Touch
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 text-white font-medium text-sm tracking-wide uppercase px-8 py-4 rounded-full border-2 border-white/30 hover:bg-white/10 hover:border-white/60 transition-all"
              >
                Plan a Visit
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
