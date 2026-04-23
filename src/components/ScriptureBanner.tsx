export default function ScriptureBanner() {
  return (
    <section className="relative py-32 md:py-44 bg-harbor-950 text-white overflow-hidden">
      {/* Textured overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 30% 30%, rgba(61, 122, 171, 0.5) 0%, transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(176, 138, 62, 0.25) 0%, transparent 55%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-4 text-brass-light mb-8">
          <span className="h-px w-12 bg-brass-light/60" />
          <span className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase">
            From the Word
          </span>
          <span className="h-px w-12 bg-brass-light/60" />
        </div>

        <blockquote className="pull-quote text-3xl md:text-5xl lg:text-6xl text-white leading-[1.15]">
          &ldquo;Thy word is a lamp unto my feet,
          <span className="block italic text-brass-light mt-2">
            and a light unto my path.&rdquo;
          </span>
        </blockquote>

        <p className="mt-10 text-brass-light text-sm font-semibold tracking-[0.3em] uppercase">
          Psalm 119:105
        </p>
      </div>
    </section>
  );
}
