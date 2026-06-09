import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SoftballSchedule from "@/components/SoftballSchedule";

export const metadata: Metadata = {
  title: "Church Softball Schedule",
  description:
    "Come watch the Knotty Oak Baptist Church softball team play every Monday night at 6:45 PM. See our full game schedule here.",
  alternates: { canonical: "/softball" },
};

export default function SoftballPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-paper min-h-screen">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div className="mb-12 text-center">
            <p className="eyebrow">Take Me Out to the Ball Game</p>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl text-ink font-medium leading-tight tracking-tight">
              Church Softball
              <span className="block italic text-forest-800">Schedule</span>
            </h1>
            <p className="mt-6 text-ink-body text-base leading-relaxed max-w-xl mx-auto">
              Come watch our softball team play every Monday night starting at
              6:45 PM. Bring the family, bring a chair, and cheer us on!
            </p>
          </div>

          <div className="bg-white border border-ink-faint/15 rounded-sm p-6 md:p-8 shadow-sm">
            <SoftballSchedule />
          </div>

          <div className="mt-10 text-center">
            <a
              href="/#events"
              className="text-sm font-semibold text-forest-700 hover:text-forest-900 transition-colors"
            >
              ← Back to Events
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
