import Link from "next/link";

export default function MissionQuote() {
  return (
    <section id="mission" className="relative py-28 md:py-36 bg-paper-warm">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-14 items-start">
        <div className="lg:col-span-4">
          <p className="eyebrow">Our Mission</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-ink font-medium leading-tight tracking-tight">
            Everything we do,
            <span className="block italic text-forest-800">
              for the glory of God.
            </span>
          </h2>
        </div>

        <div className="lg:col-span-8 space-y-6 text-lg text-ink-body leading-relaxed">
          <p>
            We exist to fulfill God&rsquo;s plan for the local church as it is
            revealed in the New Testament — with a particular focus on{" "}
            <em className="text-ink font-medium">evangelism and discipleship</em>.
          </p>
          <p>
            Our worship is informal, yet reverent. Our preaching is thorough, yet
            practical. We believe the Bible — and we seek to make a deep,
            thorough application of every precept within it, knowing that
            inward submission leads to outward obedience.
          </p>
          <p className="font-serif italic text-xl text-forest-800 border-l-2 border-brass/60 pl-6 mt-8">
            &ldquo;Grow in grace, and in the knowledge of our Lord and Saviour
            Jesus Christ.&rdquo;
            <span className="block text-sm not-italic font-sans font-semibold tracking-[0.2em] uppercase text-brass-dark mt-3">
              2 Peter 3:18
            </span>
          </p>

          <Link
            href="/mission"
            className="inline-flex items-center gap-2 mt-6 text-sm font-semibold tracking-[0.2em] uppercase text-forest-800 hover:text-forest-950 transition-colors"
          >
            Read our full statement <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
