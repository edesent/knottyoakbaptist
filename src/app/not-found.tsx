import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { OakLeaf } from "@/components/Mark";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex items-center justify-center pt-32 pb-24 bg-paper">
        <div className="text-center max-w-xl px-6">
          <OakLeaf className="w-12 h-12 text-brass mx-auto mb-8" />
          <p className="eyebrow">Page Not Found</p>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl text-ink font-medium leading-tight">
            Lost in the woods?
          </h1>
          <p className="mt-6 text-lg text-ink-body leading-relaxed">
            We can&rsquo;t find the page you&rsquo;re looking for, but we&rsquo;d
            still love to see you this Sunday.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 mt-10 bg-forest-900 text-white font-semibold text-sm tracking-wide uppercase px-8 py-4 rounded-full hover:bg-forest-800 transition-all"
          >
            Back to Home →
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
