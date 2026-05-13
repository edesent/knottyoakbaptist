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
              <li>
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest-100/80 hover:text-brass-light transition-colors"
                >
                  Facebook ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-forest-100/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-forest-100/50">
          <p>&copy; {new Date().getFullYear()} {site.name}. All are welcome.</p>
          <p className="tracking-[0.2em] uppercase">{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
