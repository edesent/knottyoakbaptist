import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <header id="home" className="relative min-h-screen flex items-stretch overflow-hidden bg-forest-950">
      {/* Background image — replaced later with a real photo of the church/woods */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?auto=format&fit=crop&w=2400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center 60%",
        }}
      />

      {/* Deep tonal overlay — forest → harbor for brand character */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-950/92 via-forest-900/80 to-harbor-900/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent" />

      {/* Subtle film grain */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
           style={{
             backgroundImage:
               "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.08) 0, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.06) 0, transparent 55%)",
           }} />

      {/* Knotty Oak illustration — anchored right on desktop */}
      <div className="absolute inset-y-0 right-0 hidden md:flex items-center justify-end pr-6 lg:pr-12 pointer-events-none w-1/2 max-w-[640px] opacity-30">
        <Image
          src="/knotty-oak-hero.png"
          alt=""
          width={1024}
          height={1024}
          priority
          className="w-full h-auto max-h-[80vh] object-contain"
        />
      </div>

      {/* Content — asymmetric, anchored bottom-left on desktop */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-end pb-20 md:pb-28 pt-32">
        <div className="max-w-3xl">
          <p className="rise-in delay-100 text-brass-light text-xs md:text-sm font-semibold tracking-[0.32em] uppercase">
            Coventry, Rhode Island · Est. 1840
          </p>

          <h1 className="rise-in delay-200 mt-5 font-serif text-white text-[clamp(3rem,7vw,6rem)] font-medium leading-[0.95] tracking-tight">
            Knotty Oak
            <span className="block italic font-normal text-brass-light/90 mt-1">
              Baptist Church
            </span>
          </h1>

          <div className="rise-in delay-300 mt-8 flex items-center gap-4 max-w-md">
            <span className="h-px flex-1 bg-brass-light/40" />
            <span className="text-brass-light/80 text-[0.7rem] font-semibold tracking-[0.3em] uppercase">
              Speaking the Truth in Love
            </span>
            <span className="h-px flex-1 bg-brass-light/40" />
          </div>

          <p className="rise-in delay-400 mt-8 font-serif italic text-white/85 text-xl md:text-2xl leading-relaxed max-w-2xl">
            &ldquo;A beacon of hope for nearly two centuries, proclaiming the
            Gospel of the Lord Jesus Christ in the heart of Coventry.&rdquo;
          </p>

          <div className="rise-in delay-500 mt-10 flex flex-wrap gap-4">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 bg-brass text-forest-950 font-semibold text-sm tracking-wide uppercase px-8 py-4 rounded-full border-2 border-brass hover:bg-brass-light hover:border-brass-light hover:-translate-y-0.5 transition-all shadow-lg shadow-forest-950/40"
            >
              Join Us This Sunday
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/#welcome"
              className="inline-flex items-center gap-2 text-white font-medium text-sm tracking-wide uppercase px-8 py-4 rounded-full border-2 border-white/30 hover:bg-white/10 hover:border-white/60 transition-all"
            >
              Learn More
            </Link>
          </div>

          {/* Social Icons */}
          <div className="rise-in delay-700 mt-10 flex items-center gap-5">
            <a
              href="https://www.facebook.com/knottyoakbaptistchurch"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Knotty Oak Baptist Church on Facebook"
              className="text-white/70 hover:text-[#1877F2] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.883v2.271h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@knottyoakbaptistchurch"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Knotty Oak Baptist Church on YouTube"
              className="text-white/70 hover:text-[#FF0000] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#welcome"
        className="rise-in delay-900 absolute bottom-8 right-8 md:right-12 hidden md:flex flex-col items-center gap-3 text-white/40 text-[0.65rem] tracking-[0.32em] uppercase hover:text-brass-light transition-colors"
      >
        <span className="[writing-mode:vertical-rl] rotate-180">Scroll</span>
        <span className="w-px h-12 bg-current" />
      </a>
    </header>
  );
}
