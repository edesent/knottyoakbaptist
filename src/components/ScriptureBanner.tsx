import Link from "next/link";

export default function ScriptureBanner() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden bg-[#f5e8c8] text-ink">
      {/* Warm radial wash — gold to amber */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 25%, rgba(212, 184, 120, 0.55) 0%, transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(176, 138, 62, 0.35) 0%, transparent 60%)",
        }}
      />

      {/* Soft paper grain */}
      <div
        className="absolute inset-0 opacity-[0.18] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(138, 106, 40, 0.35) 0, transparent 45%), radial-gradient(circle at 70% 70%, rgba(138, 106, 40, 0.25) 0, transparent 50%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 text-brass-dark mb-7">
            <span className="h-px w-12 bg-brass-dark/50" />
            <span className="text-[0.7rem] font-semibold tracking-[0.32em] uppercase">
              What We Hold To
            </span>
            <span className="h-px w-12 bg-brass-dark/50" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink font-medium leading-[1.05] tracking-tight">
            A church on a
            <span className="block italic text-brass-dark">sure foundation.</span>
          </h2>

        </div>

        {/* Two cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-7 md:gap-8">
          {/* Statement of Faith */}
          <Link
            href="/beliefs"
            className="group relative block bg-paper border border-brass/40 rounded-sm p-9 md:p-11 shadow-[0_4px_24px_-12px_rgba(138,106,40,0.4)] hover:shadow-[0_10px_40px_-12px_rgba(138,106,40,0.5)] hover:-translate-y-0.5 transition-all"
          >
            <p className="text-[0.65rem] font-semibold tracking-[0.3em] uppercase text-brass-dark">
              The Doctrine
            </p>
            <h3 className="mt-3 font-serif text-3xl md:text-4xl text-ink font-medium leading-tight tracking-tight">
              Statement of Faith
            </h3>
            <div className="mt-6 h-px bg-gradient-to-r from-brass via-brass-light/60 to-transparent" />
            <p className="mt-6 font-serif italic text-lg md:text-xl text-ink-body leading-relaxed">
              &ldquo;The Holy Scriptures of the Old and New Testaments, the
              verbally inspired Word of God, infallible and God-breathed, our
              final authority for faith and life.&rdquo;
            </p>
            <p className="mt-3 text-[0.7rem] font-semibold tracking-[0.25em] uppercase text-brass-dark">
              Article I · The Holy Scriptures
            </p>
            <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.18em] uppercase text-brass-dark group-hover:text-ink transition-colors">
              Read all 14 articles
              <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
            </p>
          </Link>

          {/* Church Covenant */}
          <Link
            href="/covenant"
            className="group relative block bg-paper border border-brass/40 rounded-sm p-9 md:p-11 shadow-[0_4px_24px_-12px_rgba(138,106,40,0.4)] hover:shadow-[0_10px_40px_-12px_rgba(138,106,40,0.5)] hover:-translate-y-0.5 transition-all"
          >
            <p className="text-[0.65rem] font-semibold tracking-[0.3em] uppercase text-brass-dark">
              The Walk
            </p>
            <h3 className="mt-3 font-serif text-3xl md:text-4xl text-ink font-medium leading-tight tracking-tight">
              Church Covenant
            </h3>
            <div className="mt-6 h-px bg-gradient-to-r from-brass via-brass-light/60 to-transparent" />
            <p className="mt-6 font-serif italic text-lg md:text-xl text-ink-body leading-relaxed">
              &ldquo;We do now solemnly and joyfully covenant with one another to
              walk together in a church relationship, in brotherly love, to the
              honor and glory of God.&rdquo;
            </p>
            <p className="mt-3 text-[0.7rem] font-semibold tracking-[0.25em] uppercase text-brass-dark">
              From the Preamble
            </p>
            <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.18em] uppercase text-brass-dark group-hover:text-ink transition-colors">
              Read the full covenant
              <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
