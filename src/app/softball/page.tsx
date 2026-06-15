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

          {/* Game Schedule Table */}
          <div className="mt-10">
            <h2 className="font-serif text-2xl md:text-3xl text-ink font-medium text-center mb-2">
              2026 Season Schedule
            </h2>
            <p className="text-center text-ink-body text-sm mb-6">
              No GameChanger app? No problem. All games start at 6:45 PM. Everything you need to know about who we&rsquo;re playing and where we&rsquo;re going is right here.
            </p>
            <div className="bg-white border border-ink-faint/15 rounded-sm shadow-sm overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-forest-700 text-white">
                    <th className="text-left px-4 py-3 font-semibold">Date</th>
                    <th className="text-left px-4 py-3 font-semibold">Opponent</th>
                    <th className="text-left px-4 py-3 font-semibold">Field</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { date: "Jun 15", opponent: "vs. Legacy Church Orange", time: "6:45 PM", field: "Rice Memorial Field", mapsUrl: "https://maps.google.com/?q=51+Knotty+Oak+Rd,+Coventry,+RI+02816" },
                    { date: "Jun 22", opponent: "@ COTC 1", time: "6:45 PM", field: "Chariho / Dow Field", mapsUrl: "https://maps.google.com/?q=1118+Main+St,+Hope+Valley,+RI+02832" },
                    { date: "Jun 29", opponent: "@ Legacy Church Blue", time: "6:45 PM", field: "Rice Memorial Field", mapsUrl: "https://maps.google.com/?q=51+Knotty+Oak+Rd,+Coventry,+RI+02816" },
                    { date: "Jul 13", opponent: "vs. COTC2", time: "6:45 PM", field: "Neutaconkanut Park", mapsUrl: "https://maps.google.com/?q=899+Plainfield+St,+Providence,+RI+02909" },
                    { date: "Jul 20", opponent: "@ Faith Baptist", time: "6:45 PM", field: "Rice Memorial Field", mapsUrl: "https://maps.google.com/?q=51+Knotty+Oak+Rd,+Coventry,+RI+02816" },
                    { date: "Jul 27", opponent: "@ Bridgepointe Green", time: "7:45 PM", field: "Agawam Rear Field", mapsUrl: "https://maps.google.com/?q=1600+Pawtucket+Ave,+East+Providence,+RI+02914" },
                    { date: "Aug 3", opponent: "vs. Cornerstone Church", time: "6:45 PM", field: "Chariho / Dow Field", mapsUrl: "https://maps.google.com/?q=1118+Main+St,+Hope+Valley,+RI+02832" },
                    { date: "Aug 10", opponent: "vs. Bridgepointe Blue", time: "7:45 PM", field: "Rice Memorial Field", mapsUrl: "https://maps.google.com/?q=51+Knotty+Oak+Rd,+Coventry,+RI+02816" },
                    { date: "Aug 17", opponent: "@ Redemption City", time: "7:45 PM", field: "Rice Memorial Field", mapsUrl: "https://maps.google.com/?q=51+Knotty+Oak+Rd,+Coventry,+RI+02816" },
                    { date: "Aug 24", opponent: "@ Riverside", time: "7:45 PM", field: "Rice Memorial Field", mapsUrl: "https://maps.google.com/?q=51+Knotty+Oak+Rd,+Coventry,+RI+02816" },
                  ].map((game, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-paper"}>
                      <td className="px-4 py-3 font-medium text-ink whitespace-nowrap">{game.date}</td>
                      <td className="px-4 py-3 text-ink-body">{game.opponent}</td>
                      <td className="px-4 py-3 text-ink-body whitespace-nowrap">{game.time}</td>
                      <td className="px-4 py-3">
                        <a
                          href={game.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-forest-700 hover:text-forest-900 font-semibold underline underline-offset-2 transition-colors"
                        >
                          {game.field}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
