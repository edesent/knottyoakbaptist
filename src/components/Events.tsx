import { getEvents } from "@/lib/events";

export const revalidate = 300; // ISR: refresh at most every 5 minutes

export default async function Events() {
  const events = await getEvents();

  return (
    <section id="events" className="relative py-28 md:py-36 bg-paper">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="eyebrow">Come Alongside</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-ink font-medium leading-tight tracking-tight">
              What&rsquo;s happening
              <span className="block italic text-forest-800">this season.</span>
            </h2>
          </div>
          <p className="text-ink-muted text-sm max-w-sm">
            A rhythm of study, prayer, and fellowship you can count on — plus the
            special gatherings we most look forward to each year.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((ev) => (
            <article
              key={ev.title}
              className="relative bg-white border border-ink-faint/15 rounded-sm p-8 hover:border-forest-600/40 hover:shadow-lg transition-all"
            >
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
