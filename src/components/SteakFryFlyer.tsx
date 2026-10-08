import { Alfa_Slab_One, Oswald, Yellowtail } from "next/font/google";

const slab = Alfa_Slab_One({ weight: "400", subsets: ["latin"], display: "swap" });
const oswald = Oswald({ weight: ["300", "400", "600", "700"], subsets: ["latin"], display: "swap" });
const script = Yellowtail({ weight: "400", subsets: ["latin"], display: "swap" });

const INK = "#141414";
const RED = "#B5231B";

// The flyer is drawn as a letter size page (816 x 1056). Every size below is a
// share of the flyer's own width, so the whole thing scales like a picture.
const u = (px: number) => `${(px / 8.16).toFixed(3)}cqw`;

const SLAB = slab.style.fontFamily;
const STEAK_OUTLINE =
  "M40,92 C38,44 98,22 160,25 C222,28 272,52 265,102 C260,142 228,176 182,178 C152,179 138,160 110,160 C70,160 42,134 40,92 Z";
const STEAK_BONE = "M92,68 C130,54 190,54 228,72 M160,58 C157,92 162,122 172,150";

// Men's Steak Fry flyer, Friday October 30. Edit the wording right here.
export default function SteakFryFlyer() {
  return (
    <div
      role="img"
      aria-label="Men's Steak Fry flyer. Friday, October 30 at 6:30 PM at Knotty Oak Baptist Church, 11 Knotty Oak Road, Coventry, Rhode Island. Free. All men welcome, bring a friend. Sign up at knottyoak.org/steak-fry."
      style={{ containerType: "inline-size", width: "100%" }}
    >
      <div
        aria-hidden="true"
        style={{
          width: "100cqw",
          height: u(1056),
          boxSizing: "border-box",
          padding: u(40),
          background: "#ffffff",
          color: INK,
          fontFamily: oswald.style.fontFamily,
          textAlign: "left",
        }}
      >
        <div style={{ height: "100%", boxSizing: "border-box", border: `max(1px, ${u(3)}) solid ${INK}`, padding: u(6) }}>
          <div
            style={{
              height: "100%",
              boxSizing: "border-box",
              border: `1px solid ${INK}`,
              padding: `${u(24)} ${u(28)} ${u(26)}`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                paddingBottom: u(12),
                borderBottom: `max(1px, ${u(2)}) solid ${INK}`,
                fontSize: u(14),
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                lineHeight: 1.4,
              }}
            >
              <div>Coventry, R.I.</div>
              <div>Knotty Oak Baptist Church</div>
              <div>Est. 1840</div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div
                style={{
                  fontFamily: script.style.fontFamily,
                  fontSize: u(92),
                  lineHeight: 1,
                  color: RED,
                  transform: "rotate(-5deg)",
                  marginBottom: u(-12),
                  position: "relative",
                  zIndex: 1,
                }}
              >
                Men&rsquo;s
              </div>
              <div style={{ fontFamily: SLAB, fontSize: u(164), lineHeight: 0.92, letterSpacing: "0.01em", whiteSpace: "nowrap" }}>
                STEAK
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: u(26) }}>
                <svg viewBox="0 0 300 200" style={{ display: "block", flexShrink: 0, width: u(190), height: u(127) }}>
                  <path d={STEAK_OUTLINE} fill={RED} stroke={INK} strokeWidth="7" strokeLinejoin="round" />
                  <path d={STEAK_BONE} fill="none" stroke={INK} strokeWidth="22" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={STEAK_BONE} fill="none" stroke="#ffffff" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    d="M68,104 C82,116 96,121 122,122 M196,104 C212,114 222,130 216,146 M100,92 C110,99 122,101 134,98"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                </svg>
                <div style={{ fontFamily: SLAB, fontSize: u(164), lineHeight: 0.92, letterSpacing: "0.01em", whiteSpace: "nowrap" }}>
                  FRY
                </div>
              </div>
              <div
                style={{
                  marginTop: u(16),
                  fontSize: u(20),
                  fontWeight: 400,
                  letterSpacing: "0.26em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  lineHeight: 1.4,
                }}
              >
                Good food · Good men · Good fellowship
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto 1fr",
                alignItems: "center",
                background: INK,
                color: "#ffffff",
                padding: `${u(22)} 0`,
              }}
            >
              <div style={{ textAlign: "center", fontSize: u(29), fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Friday
              </div>
              <div
                style={{
                  fontFamily: SLAB,
                  fontSize: u(72),
                  lineHeight: 1,
                  padding: `0 ${u(24)}`,
                  borderLeft: `max(1px, ${u(2)}) solid #ffffff`,
                  borderRight: `max(1px, ${u(2)}) solid #ffffff`,
                  whiteSpace: "nowrap",
                }}
              >
                OCT 30
              </div>
              <div style={{ textAlign: "center", fontSize: u(29), fontWeight: 700, letterSpacing: "0.06em", whiteSpace: "nowrap" }}>
                6:30 PM
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: u(6), textAlign: "center" }}>
              <div style={{ fontSize: u(30), fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", lineHeight: 1.2 }}>
                Knotty Oak Baptist Church
              </div>
              <div style={{ fontSize: u(20), fontWeight: 400, letterSpacing: "0.04em", lineHeight: 1.3 }}>
                11 Knotty Oak Road · Coventry, Rhode Island
              </div>
            </div>

            <div
              style={{
                background: RED,
                color: "#ffffff",
                textAlign: "center",
                padding: `${u(11)} 0`,
                fontFamily: SLAB,
                fontSize: u(21),
                lineHeight: 1.3,
                letterSpacing: "0.04em",
                whiteSpace: "nowrap",
              }}
            >
              FREE · ALL MEN WELCOME · BRING A FRIEND
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: u(4), textAlign: "center" }}>
              <div style={{ fontSize: u(23), fontWeight: 700, letterSpacing: "0.05em", lineHeight: 1.25 }}>
                Sign up at knottyoak.org/steak-fry
              </div>
              <div style={{ fontSize: u(16), fontWeight: 400, letterSpacing: "0.02em", lineHeight: 1.4 }}>
                No cost. A love offering plate will be out if you want to give.
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: u(6), textAlign: "center" }}>
              <div style={{ maxWidth: u(540), fontSize: u(17), fontWeight: 300, lineHeight: 1.5 }}>
                &ldquo;Iron sharpeneth iron; so a man sharpeneth the countenance of his friend.&rdquo;
              </div>
              <div style={{ fontSize: u(13), fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", lineHeight: 1.4 }}>
                Proverbs 27:17
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
