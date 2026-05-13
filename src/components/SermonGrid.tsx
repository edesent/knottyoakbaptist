"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { Sermon } from "@/lib/sermons";
import { formatSermonDate } from "@/lib/sermons";

type Props = {
  sermons: Sermon[];
};

export default function SermonGrid({ sermons }: Props) {
  const [active, setActive] = useState<Sermon | null>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active, close]);

  return (
    <>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
        {sermons.map((s) => (
          <li key={s.videoId}>
            <button
              type="button"
              onClick={() => setActive(s)}
              className="group block w-full text-left bg-paper border border-ink-faint/15 rounded-sm overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2 focus:ring-offset-paper"
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
            </button>
          </li>
        ))}
      </ul>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={formatSermonDate(active.published)}
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-forest-950/85 backdrop-blur-sm px-4 py-8 md:py-16 animate-[fadeIn_180ms_ease-out]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl"
          >
            <div className="flex items-center justify-between gap-4 mb-3 text-white">
              <div>
                <p className="text-[0.65rem] font-semibold tracking-[0.28em] uppercase text-brass-light">
                  Knotty Oak Baptist
                </p>
                <h2 className="mt-1 font-serif text-xl md:text-2xl font-medium leading-tight">
                  {formatSermonDate(active.published)}
                </h2>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="shrink-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
                </svg>
              </button>
            </div>

            <div className="relative aspect-video w-full bg-black rounded-sm overflow-hidden shadow-2xl">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${active.videoId}?autoplay=1&rel=0`}
                title={formatSermonDate(active.published)}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>

            <p className="mt-3 text-center">
              <a
                href={`https://www.youtube.com/watch?v=${active.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold tracking-[0.2em] uppercase text-brass-light/80 hover:text-brass-light transition-colors"
              >
                Open on YouTube ↗
              </a>
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
}
