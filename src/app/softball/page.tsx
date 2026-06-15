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
            <p className="font-serif italic text-ink-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              &ldquo;Whether therefore ye eat, or drink, or whatsoever ye do,
              do all to the glory of God.&rdquo;
            </p>
            <p className="eyebrow mt-3">1 Corinthians 10:31</p>
            <h1 className="mt-6 font-serif text-4xl md:text-5xl text-ink font-medium leading-tight tracking-tight">
              Church Softball
              <span className="block italic text-forest-800">Schedule</span>
            </h1>
            <p className="mt-6 text-ink-body text-base leading-relaxed max-w-xl mx-auto">
              Come watch our softball team play every Monday night starting at
              6:45 PM. Bring the family and cheer us on! Players, check the
              game schedule below for this week&rsquo;s time and field. (Click
              on any game below for field and directions.)
            </p>
          </div>

          <div className="bg-white border border-ink-faint/15 rounded-sm p-6 md:p-8 shadow-sm">
            <SoftballSchedule />
          </div>

          {/* Field Information Section */}
          <div className="mt-10">
            <h2 className="font-serif text-2xl md:text-3xl text-ink font-medium text-center mb-2">
              Field Information
            </h2>
            <p className="text-center text-ink-body text-sm mb-6">
              Don&rsquo;t have the GameChanger app? No problem. Here are all the fields we play at this season with directions.
            </p>
            <div className="space-y-4">

              {/* Rice Memorial Field */}
              <div className="bg-white border border-ink-faint/15 rounded-sm p-5 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="font-serif text-lg font-medium text-ink">Rice Memorial Field</p>
                  <p className="text-ink-body text-sm mt-1">51 Knotty Oak Rd, Coventry, RI 02816</p>
                </div>
                <a
                  href="https://maps.google.com/?q=51+Knotty+Oak+Rd,+Coventry,+RI+02816"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block shrink-0 bg-forest-700 hover:bg-forest-900 text-white text-sm font-semibold px-5 py-2.5 rounded-sm transition-colors text-center"
                >
                  Get Directions
                </a>
              </div>

              {/* Neutaconkanut Park */}
              <div className="bg-white border border-ink-faint/15 rounded-sm p-5 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="font-serif text-lg font-medium text-ink">Neutaconkanut Park</p>
                  <p className="text-ink-body text-sm mt-1">899 Plainfield St, Providence, RI 02909</p>
                </div>
                <a
                  href="https://maps.google.com/?q=899+Plainfield+St,+Providence,+RI+02909"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block shrink-0 bg-forest-700 hover:bg-forest-900 text-white text-sm font-semibold px-5 py-2.5 rounded-sm transition-colors text-center"
                >
                  Get Directions
                </a>
              </div>

              {/* Chariho Little League / Dow Field */}
              <div className="bg-white border border-ink-faint/15 rounded-sm p-5 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="font-serif text-lg font-medium text-ink">Chariho Little League / Dow Field</p>
                  <p className="text-ink-body text-sm mt-1">1118 Main St, Hope Valley, RI 02832</p>
                </div>
                <a
                  href="https://maps.google.com/?q=1118+Main+St,+Hope+Valley,+RI+02832"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block shrink-0 bg-forest-700 hover:bg-forest-900 text-white text-sm font-semibold px-5 py-2.5 rounded-sm transition-colors text-center"
                >
                  Get Directions
                </a>
              </div>

              {/* Agawam Rear Field */}
              <div className="bg-white border border-ink-faint/15 rounded-sm p-5 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="font-serif text-lg font-medium text-ink">Agawam Rear Field</p>
                  <p className="text-ink-body text-sm mt-1">1600 Pawtucket Ave, East Providence, RI 02914</p>
                </div>
                <a
                  href="https://maps.google.com/?q=1600+Pawtucket+Ave,+East+Providence,+RI+02914"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block shrink-0 bg-forest-700 hover:bg-forest-900 text-white text-sm font-semibold px-5 py-2.5 rounded-sm transition-colors text-center"
                >
                  Get Directions
                </a>
              </div>

            </div>
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
