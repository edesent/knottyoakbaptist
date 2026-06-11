import Link from "next/link";
import { OakLeaf } from "@/components/Mark";

export default function PrayerCallout() {
  return (
    <section id="prayer" className="bg-forest-950 py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-6 text-brass">
          <OakLeaf className="w-9 h-9" />
        </div>
        <p className="eyebrow text-brass-light">Need Prayer?</p>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl text-white font-medium leading-[1.08] tracking-tight">
          Whatever you are carrying,
          <span className="italic text-brass-light"> we want to pray with you.</span>
        </h2>
        <p className="mt-6 text-white/75 text-lg leading-relaxed max-w-2xl mx-auto">
          &ldquo;Casting all your care upon him; for he careth for you.&rdquo;
          (1 Peter 5:7) Share your request with us, by name or anonymously, and
          our pastor will bring it before the Lord.
        </p>
        <div className="mt-10">
          <Link
            href="/prayer"
            className="inline-flex items-center gap-1.5 bg-brass text-forest-950 text-sm font-semibold tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-brass-light hover:-translate-y-0.5 transition-all shadow-sm"
          >
            Send a Prayer Request
          </Link>
        </div>
      </div>
    </section>
  );
}
