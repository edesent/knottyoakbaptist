export type SoftballGame = {
  date: string; // e.g. "Jun 15"
  isoDate: string; // e.g. "2026-06-15" — used for figuring out what's next
  opponent: string;
  time: string;
  field: string;
  mapsUrl: string;
};

export const softballSchedule: SoftballGame[] = [
  { date: "Jun 15", isoDate: "2026-06-15", opponent: "vs. Legacy Church Orange", time: "6:45 PM", field: "Rice Memorial Field", mapsUrl: "https://maps.google.com/?q=51+Knotty+Oak+Rd,+Coventry,+RI+02816" },
  { date: "Jun 22", isoDate: "2026-06-22", opponent: "@ COTC 1", time: "6:45 PM", field: "Chariho / Dow Field", mapsUrl: "https://maps.google.com/?q=1118+Main+St,+Hope+Valley,+RI+02832" },
  { date: "Jun 29", isoDate: "2026-06-29", opponent: "@ Legacy Church Blue", time: "6:45 PM", field: "Rice Memorial Field", mapsUrl: "https://maps.google.com/?q=51+Knotty+Oak+Rd,+Coventry,+RI+02816" },
  { date: "Jul 13", isoDate: "2026-07-13", opponent: "vs. COTC2", time: "6:45 PM", field: "Neutaconkanut Park", mapsUrl: "https://maps.google.com/?q=899+Plainfield+St,+Providence,+RI+02909" },
  { date: "Jul 20", isoDate: "2026-07-20", opponent: "@ Faith Baptist", time: "6:45 PM", field: "Rice Memorial Field", mapsUrl: "https://maps.google.com/?q=51+Knotty+Oak+Rd,+Coventry,+RI+02816" },
  { date: "Jul 27", isoDate: "2026-07-27", opponent: "@ Bridgepointe Green", time: "7:45 PM", field: "Agawam Rear Field", mapsUrl: "https://maps.google.com/?q=1600+Pawtucket+Ave,+East+Providence,+RI+02914" },
  { date: "Aug 3", isoDate: "2026-08-03", opponent: "vs. Cornerstone Church", time: "6:45 PM", field: "Chariho / Dow Field", mapsUrl: "https://maps.google.com/?q=1118+Main+St,+Hope+Valley,+RI+02832" },
  { date: "Aug 10", isoDate: "2026-08-10", opponent: "vs. Bridgepointe Blue", time: "7:45 PM", field: "Rice Memorial Field", mapsUrl: "https://maps.google.com/?q=51+Knotty+Oak+Rd,+Coventry,+RI+02816" },
  { date: "Aug 17", isoDate: "2026-08-17", opponent: "@ Redemption City", time: "7:45 PM", field: "Rice Memorial Field", mapsUrl: "https://maps.google.com/?q=51+Knotty+Oak+Rd,+Coventry,+RI+02816" },
  { date: "Aug 24", isoDate: "2026-08-24", opponent: "@ Riverside", time: "7:45 PM", field: "Rice Memorial Field", mapsUrl: "https://maps.google.com/?q=51+Knotty+Oak+Rd,+Coventry,+RI+02816" },
];

// Returns the next game that hasn't happened yet (today counts).
// If the whole season's done, returns null.
export function getNextGame(now: Date = new Date()): SoftballGame | null {
  const today = new Date(now.toISOString().slice(0, 10)); // strip time, compare by day
  for (const game of softballSchedule) {
    const gameDate = new Date(game.isoDate);
    if (gameDate >= today) return game;
  }
  return null;
}
