import { getEvents } from "@/lib/events";

export const revalidate = 300; // ISR: refresh at most every 5 minutes

export default async function Events() {
  const events = await getEvents();

  return (
    <section id="events" className="relative py-28 md:py-36 bg-paper">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-ink font-medium leading-tight tracking-tight">
              Here&rsquo;s what&rsquo;s going on
              <span className="block italic text-forest-800">in the church.</span>
            </h2>
          </div>
          <p className="text-ink-muted text-sm max-w-sm">
            Each week there&rsquo;s something going on, and we don&rsquo;t want you to miss it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((ev) => (
            <article
              key={ev.title}
              className="relative overflow-hidden bg-white border border-ink-faint/15 rounded-sm p-8 hover:border-forest-600/40 hover:shadow-lg transition-all"
            >
              {ev.bgIcon && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none select-none absolute -bottom-8 -right-6 text-[9rem] leading-none opacity-25 rotate-12"
                >
                  {ev.bgIcon}
                </span>
              )}
              <div className="flex items-start justify-between mb-5">
                <div className="flex flex-col items-center text-center bg-forest-900 text-brass-light w-16 py-3 rounded-sm">
                  <span className="text-[0.6rem] font-semibold tracking-[0.2em] uppercase">
                    {ev.recurring ? "Weekly" : ev.dateLabel ?? "Save the Date"}
                  </span>
                  <span className="font-serif text-2xl text-white mt-1">
                    {ev.dayLabel}
                  </span>
                </div>
                {ev.recurring && (
                  <span className="text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-forest-700 bg-forest-100 px-2.5 py-1 rounded-full">
                    Recurring
                  </span>
                )}
              </div>

              <h3 className="font-serif text-2xl text-ink font-medium leading-tight">
                {ev.title}
              </h3>
              <p className="mt-1 text-brass-dark text-sm font-semibold tracking-wide tabular-nums">
                {ev.when}
              </p>
              <p className="mt-4 text-ink-body text-sm leading-relaxed">
                {ev.description}
              </p>
              {ev.contact && (
                <p className="mt-5 pt-4 border-t border-ink-faint/20 text-xs text-ink-muted">
                  {ev.contact}
                </p>
              )}
              {ev.flyer && (
                <a
                  href={ev.flyer}
                  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-forest-700 hover:text-forest-900 transition-colors border-t border-ink-faint/20 pt-4 w-full"
                >
                  <span>View Flyer</span>
                  <span aria-hidden="true">→</span>
                </a>
              )}
              {ev.link && (
                <a
                  href={ev.link}
                  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-forest-700 hover:text-forest-900 transition-colors border-t border-ink-faint/20 pt-4 w-full"
                >
                  <span>{ev.linkLabel ?? "Learn More"}</span>
                  <span aria-hidden="true">→</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
