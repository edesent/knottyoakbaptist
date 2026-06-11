import { site } from "@/lib/site";
import MessagePastorButton from "./MessagePastorButton";

export default function Contact() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    site.address.full,
  )}&output=embed`;

  return (
    <section id="contact" className="relative bg-forest-950 text-forest-100">
      <div className="grid lg:grid-cols-2">
        {/* Info side */}
        <div className="px-6 md:px-12 lg:px-16 py-24 md:py-32 flex items-center">
          <div className="max-w-xl w-full">
            <p className="eyebrow text-brass-light">Come See Us</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-white font-medium leading-tight tracking-tight">
              We&rsquo;d love to
              <span className="block italic text-brass-light">meet you.</span>
            </h2>
            <p className="mt-6 text-forest-100/80 text-lg leading-relaxed">
              Whether you have a question, need prayer, or just want to let us know
              you&rsquo;re planning a visit, we&rsquo;re glad to hear from you.
            </p>

            <dl className="mt-10 space-y-6">
              <div>
                <dt className="eyebrow text-brass-light/80 mb-1.5">Address</dt>
                <dd className="text-white text-lg font-serif">
                  {site.address.line1}<br />
                  {site.address.city}, {site.address.state} {site.address.postal}
                </dd>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <dt className="eyebrow text-brass-light/80 mb-1.5">Church</dt>
                  <dd>
                    <a href={`tel:${site.phones.churchTel}`} className="text-white hover:text-brass-light transition-colors">
                      {site.phones.church}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-brass-light/80 mb-1.5">{site.pastor.shortName}</dt>
                  <dd>
                    <a href={`tel:${site.phones.pastorTel}`} className="text-white hover:text-brass-light transition-colors">
                      {site.phones.pastor}
                    </a>
                  </dd>
                </div>
              </div>
              <div>
                <dt className="eyebrow text-brass-light/80 mb-1.5">Email</dt>
                <dd>
                  <a href={`mailto:${site.email}`} className="text-white hover:text-brass-light transition-colors">
                    {site.email}
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-12">
              <p className="text-forest-100/75 text-sm leading-relaxed mb-5 max-w-md">
                Have a question, prayer request, or want to plan a visit? Send
                Pastor Justin a quick message. It opens a chat window and he&rsquo;ll
                get back to you.
              </p>
              <MessagePastorButton />
            </div>
          </div>
        </div>

        {/* Map side */}
        <div className="flex items-center px-6 md:px-12 lg:px-16 pb-24 lg:py-32">
          <div className="relative w-full h-[400px] lg:h-[480px] bg-forest-900 rounded-sm overflow-hidden border border-brass-light/20 shadow-xl">
            <iframe
              src={mapSrc}
              title={`Map to ${site.name}`}
              className="absolute inset-0 w-full h-full border-0 grayscale contrast-110"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-forest-950/20 via-transparent to-harbor-950/30 mix-blend-multiply" />

            <div className="absolute top-5 left-5 right-5 md:right-auto md:max-w-sm bg-forest-950/95 backdrop-blur-sm border border-brass-light/30 rounded-sm shadow-lg px-5 py-3.5 flex items-start gap-3">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-brass-light shrink-0" aria-hidden />
              <p className="text-sm text-white leading-snug">
                <span className="font-semibold tracking-wide">First-time visitors:</span>{" "}
                <span className="text-forest-100/90">please use the second parking lot.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
