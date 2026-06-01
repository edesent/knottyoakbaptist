import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-forest-100 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/knotty-oak-hero.png"
            alt="Knotty Oak Baptist Church"
            width={1024}
            height={1024}
            className="w-36 h-36 md:w-44 md:h-44 object-contain mb-6"
          />
          <h3 className="font-serif text-3xl text-white font-medium tracking-tight">
            {site.name}
          </h3>
          <p className="mt-2 text-brass-light text-xs font-semibold tracking-[0.3em] uppercase">
            Est. {site.foundingDate} · Coventry, Rhode Island
          </p>

          <p className="mt-8 max-w-xl pull-quote text-lg text-forest-100/85">
            &ldquo;For we are labourers together with God: ye are God&rsquo;s
            husbandry, ye are God&rsquo;s building.&rdquo;
          </p>
          <p className="text-xs tracking-[0.2em] uppercase text-brass-light/80 mt-3">
            1 Corinthians 3:9
          </p>

          {/* Social Icons */}
          <div className="mt-8 flex justify-center gap-5">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Knotty Oak Baptist Church on Facebook"
              className="text-forest-100/50 hover:text-[#1877F2] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.883v2.271h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
              </svg>
            </a>
            <a
              href={site.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Knotty Oak Baptist Church on YouTube"
              className="text-forest-100/50 hover:text-[#FF0000] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-16 text-sm">
          <div>
            <p className="eyebrow text-brass-light mb-3">Visit</p>
            <p className="text-forest-100/80 leading-relaxed">
              {site.address.line1}<br />
              {site.address.city}, {site.address.state} {site.address.postal}
            </p>
            <p className="mt-3 text-forest-100/70">
              <a href={`tel:${site.phones.churchTel}`} className="hover:text-brass-light transition-colors">
                {site.phones.church}
              </a>
              <br />
              <a href={`mailto:${site.email}`} className="hover:text-brass-light transition-colors">
                {site.email}
              </a>
            </p>
          </div>

          <div>
            <p className="eyebrow text-brass-light mb-3">Gather</p>
            <ul className="space-y-1.5 text-forest-100/80">
              {site.services.map((s) => (
                <li key={s.label} className="flex justify-between gap-3">
                  <span>{s.day === "Sunday" ? "" : `${s.day} · `}{s.label}</span>
                  <span className="text-brass-light/80 tabular-nums">{s.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-brass-light mb-3">Explore</p>
            <ul className="space-y-1.5">
              <li><Link href="/ministries" className="text-forest-100/80 hover:text-brass-light transition-colors">Ministries</Link></li>
              <li><Link href="/sermons" className="text-forest-100/80 hover:text-brass-light transition-colors">Sermons</Link></li>
              <li><Link href="/mission" className="text-forest-100/80 hover:text-brass-light transition-colors">Our Mission</Link></li>
              <li><Link href="/beliefs" className="text-forest-100/80 hover:text-brass-light transition-colors">Statement of Faith</Link></li>
              <li><Link href="/covenant" className="text-forest-100/80 hover:text-brass-light transition-colors">Church Covenant</Link></li>
              <li><Link href="/give" className="text-forest-100/80 hover:text-brass-light transition-colors">Give</Link></li>
              <li><Link href="/#contact" className="text-forest-100/80 hover:text-brass-light transition-colors">Contact</Link></li>

            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-forest-100/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-forest-100/50">
          <p>&copy; {new Date().getFullYear()} {site.name}. All are welcome.</p>
          <p className="tracking-[0.2em] uppercase">{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
