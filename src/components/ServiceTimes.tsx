import { site } from "@/lib/site";

// Inline SVG icons — deliberately austere, not cartoonish
function BookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" {...props}>
      <path d="M4 4.5a2 2 0 0 1 2-2h12v17H6a2 2 0 0 0-2 2v-17z" />
      <path d="M4 4.5v17" /><path d="M9 7h6M9 11h6" />
    </svg>
  );
}
function SunIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}
function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" {...props}>
      <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
    </svg>
  );
}
function CandleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" {...props}>
      <path d="M12 4.5c-1.2 1.3-2 2.3-2 3.3a2 2 0 1 0 4 0c0-1-.8-2-2-3.3z" />
      <rect x="8" y="9.5" width="8" height="10" rx="1" />
      <path d="M6 19.5h12" />
    </svg>
  );
}

const icons = [BookIcon, SunIcon, MoonIcon, CandleIcon] as const;
const blurbs = [
  "Small-group teaching for every age, around an open Bible.",
  "Worship together — hymns, spiritual songs, prayer, and preaching from God's Word.",
  "A quieter Sunday evening service to close the Lord's Day well.",
  "A time in the middle of the week to make His house a house of prayer.",
];

export default function ServiceTimes() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-forest-900 text-forest-100 overflow-hidden">
      {/* Subtle texture — branch silhouettes */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
           style={{
             backgroundImage:
               "radial-gradient(circle at 15% 15%, rgba(255,255,255,0.4) 0, transparent 30%), radial-gradient(circle at 85% 80%, rgba(255,255,255,0.3) 0, transparent 40%)",
           }} />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow text-brass-light">The Week with Us</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-white font-medium leading-tight tracking-tight">
            Meet together,
            <span className="block italic text-brass-light">open the Word.</span>
          </h2>

        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {site.services.map((service, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={service.label}
                className="group relative bg-forest-800/60 border border-forest-700/60 rounded-sm p-7 hover:bg-forest-800 hover:border-brass/40 transition-all"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brass/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Icon className="w-8 h-8 text-brass-light mb-6" />
                <p className="text-[0.68rem] font-semibold tracking-[0.25em] uppercase text-brass-light/80">
                  {service.day}
                </p>
                <p className="mt-2 font-serif text-2xl text-white leading-snug">
                  {service.label}
                </p>
                <p className="mt-1 text-brass-light text-lg font-medium tabular-nums">
                  {service.time}
                </p>
                <p className="mt-4 text-sm text-forest-100/70 leading-relaxed">
                  {blurbs[idx]}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
          <p className="text-forest-100/70">
            First time joining us? We&rsquo;d love to know you&rsquo;re coming.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-brass-light hover:text-white transition-colors font-semibold tracking-wide uppercase text-[0.78rem]"
          >
            Let us know <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
