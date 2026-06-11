import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { OakLeaf } from "@/components/Mark";
import PrayerRequestForm from "@/components/PrayerRequestForm";

export const metadata: Metadata = {
  title: "Prayer Requests",
  description:
    "Share a prayer request with Knotty Oak Baptist Church in Coventry, RI. Submit by name or anonymously, privately or to share with the church family.",
  alternates: { canonical: "/prayer" },
};

export default function PrayerPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-paper min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <header className="text-center mb-14">
            <div className="flex justify-center mb-6 text-brass">
              <OakLeaf className="w-10 h-10" />
            </div>
            <p className="eyebrow">We Want to Pray for You</p>
            <h1 className="mt-4 font-serif text-5xl md:text-6xl text-ink font-medium leading-[1.05] tracking-tight">
              Let your requests be
              <span className="italic text-forest-800"> made known.</span>
            </h1>
            <p className="mt-8 text-lg text-ink-body leading-relaxed max-w-2xl mx-auto">
              Whatever you are carrying, you do not have to carry it alone. Share
              your request below, by name or anonymously, and our pastors will
              bring it before the Lord. You decide whether it stays private or
              gets shared with the church family.
            </p>
          </header>

          <div className="bg-paper-warm border-l-[3px] border-brass p-8 md:p-10 mb-12">
            <p className="pull-quote text-xl md:text-2xl text-ink leading-relaxed">
              &ldquo;Be careful for nothing; but in every thing by prayer and
              supplication with thanksgiving let your requests be made known
              unto God.&rdquo;
            </p>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-brass-dark mt-4">
              Philippians 4:6
            </p>
          </div>

          <PrayerRequestForm />

          <div className="mt-16 grid md:grid-cols-2 gap-6 text-sm">
            <div className="bg-paper-warm p-6 rounded-sm">
              <p className="eyebrow text-brass-dark mb-2">Prefer to Talk?</p>
              <p className="text-ink-body leading-relaxed">
                If you would rather share your request in person, our pastors
                are available before and after every service. You are also
                welcome at our Thursday evening prayer meeting.
              </p>
            </div>
            <div className="bg-paper-warm p-6 rounded-sm">
              <p className="eyebrow text-brass-dark mb-2">How We Handle Requests</p>
              <p className="text-ink-body leading-relaxed">
                Every request goes directly to our pastors. Private requests
                stay private. Requests marked okay to share may be included
                when the church gathers to pray.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
