import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { OakLeaf } from "@/components/Mark";
import { fetchSermons, formatSermonDate, YOUTUBE_CHANNEL_URL } from "@/lib/sermons";

export const metadata: Metadata = {
  title: "Sermons",
  description:
    "Watch recent sermons from Knotty Oak Baptist Church in Coventry, Rhode Island. Sunday morning and evening services streamed live on YouTube.",
  alternates: { canonical: "/sermons" },
};

export const revalidate = 3600;

export default async function SermonsPage() {
  const sermons = await fetchSermons();
  const latest = sermons[0];
  const archive = sermons.slice(1);

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-0 bg-paper">
        <header className="max-w-4xl mx-auto px-6 md:px-10 text-center pb-16 md:pb-20">
          <div className="flex justify-center mb-6 text-brass">
            <OakLeaf className="w-10 h-10" />
          </div>
          <p className="eyebrow">Sermons & Livestream</p>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl lg:text-7xl text-ink font-medium leading-[1.05] tracking-tight">
            Sit under the
            <span className="block italic text-forest-800">preaching of the Word.</span>
          </h1>
          <p className="mt-8 text-lg text-ink-body leading-relaxed max-w-2xl mx-auto">
            Sunday morning and evening services are streamed live on YouTube and
            archived here. Whether you&rsquo;re away from church or new to us,
            you&rsquo;re welcome to listen in.
          </p>
        </header>

        {latest ? (
          <section className="bg-paper-warm py-20 md:py-24">
            <div className="max-w-5xl mx-auto px-6 md:px-10">
              <div className="flex flex-wrap items-baseline justify-between gap-3 mb-6">
                <div>
                  <p className="eyebrow text-brass-dark">Most Recent</p>
                  <h2 className="mt-2 font-serif text-3xl md:text-4xl text-ink font-medium leading-tight tracking-tight">
                    {formatSermonDate(latest.published)}
                  </h2>
                </div>
                <a
                  href={`https://www.youtube.com/watch?v=${latest.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold tracking-[0.18em] uppercase text-brass-dark hover:text-ink transition-colors"
                >
                  Open on YouTube ↗
                </a>
              </div>

              <div className="relative aspect-video w-full overflow-hidden rounded-sm shadow-xl bg-forest-950">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${latest.videoId}`}
                  title={`${formatSermonDate(latest.published)} — Knotty Oak Baptist Church`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
            </div>
          </section>
        ) : null}

        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <div className="flex flex-wrap items-end justify-between gap-3 mb-10 md:mb-14">
              <div>
                <p className="eyebrow text-brass-dark">The Archive</p>
                <h2 className="mt-3 font-serif text-3xl md:text-4xl text-ink font-medium leading-tight tracking-tight">
                  Recent services
                </h2>
              </div>
              <a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold tracking-[0.18em] uppercase text-brass-dark hover:text-ink transition-colors"
              >
                Full channel on YouTube ↗
              </a>
            </div>

            {archive.length === 0 ? (
              <div className="bg-paper-warm border border-ink-faint/15 rounded-sm p-10 text-center">
                <p className="text-ink-body">
                  More sermons will appear here as they&rsquo;re streamed.
                </p>
                <a
                  href={YOUTUBE_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.18em] uppercase text-forest-800 hover:text-forest-950 transition-colors"
                >
                  Visit our YouTube channel
                  <span aria-hidden>→</span>
                </a>
              </div>
            ) : (
              <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
                {archive.map((s) => (
                  <li key={s.videoId}>
                    <a
                      href={`https://www.youtube.com/watch?v=${s.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block bg-paper border border-ink-faint/15 rounded-sm overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
                    >
                      <div className="relative aspect-video w-full bg-forest-100 overflow-hidden">
                        <Image
                          src={s.thumbnail}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/40 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <span className="w-14 h-14 rounded-full bg-white/95 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 text-forest-900 ml-1" fill="currentColor" aria-hidden>
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <p className="text-[0.65rem] font-semibold tracking-[0.28em] uppercase text-brass-dark">
                          {new Date(s.published).toLocaleDateString("en-US", {
                            weekday: "short",
                          })}
                        </p>
                        <h3 className="mt-2 font-serif text-xl text-ink font-medium leading-snug">
                          {formatSermonDate(s.published)}
                        </h3>
                        {typeof s.views === "number" && (
                          <p className="mt-2 text-xs text-ink-body/60">
                            {s.views.toLocaleString()} views
                          </p>
                        )}
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <section className="py-24 md:py-32 bg-forest-950 text-white text-center">
          <div className="max-w-2xl mx-auto px-6">
            <p className="eyebrow text-brass-light">Better in Person</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium leading-tight tracking-tight">
              We&rsquo;d love to see you Sunday.
            </h2>
            <p className="mt-6 text-forest-100/80 text-lg leading-relaxed">
              Streaming is a gift, but the gathered church is a greater one.
              First-time visitors — please use the second parking lot.
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
