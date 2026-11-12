import { Alfa_Slab_One, Oswald, Yellowtail } from "next/font/google";

const slab = Alfa_Slab_One({ weight: "400", subsets: ["latin"], display: "swap" });
const oswald = Oswald({ weight: ["300", "400", "600", "700"], subsets: ["latin"], display: "swap" });
const script = Yellowtail({ weight: "400", subsets: ["latin"], display: "swap" });

// Flyers are drawn as a letter size page (816 x 1056). Every size is a share of
// the flyer's own width, so the whole thing scales like a picture.
const u = (px: number) => `${(px / 8.16).toFixed(3)}cqw`;

const INK = "#2B1A10";
const RUST = "#C2410C";
const BROWN = "#8A4B1F";
const CREAM = "#FFF8EE";

const LEAF =
  "M50,4 L58,30 L80,18 L72,42 L96,46 L74,60 L84,80 L60,72 L54,96 L50,74 L46,96 L40,72 L16,80 L26,60 L4,46 L28,42 L20,18 L42,30 Z";

function Leaf({ size, color, rotate, style }: { size: number; color: string; rotate: number; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 100 100"
      style={{ position: "absolute", width: u(size), height: u(size), transform: `rotate(${rotate}deg)`, ...style }}
    >
      <path d={LEAF} fill={color} />
      <path d="M50,96 L50,30" stroke={INK} strokeOpacity="0.35" strokeWidth="2.5" />
    </svg>
  );
}

function Page({ label, bg, children }: { label: string; bg: string; children: React.ReactNode }) {
  return (
    <div role="img" aria-label={label} style={{ containerType: "inline-size", width: "100%" }}>
      <div
        aria-hidden="true"
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100cqw",
          height: u(1056),
          boxSizing: "border-box",
          padding: u(36),
          background: bg,
          color: INK,
          fontFamily: oswald.style.fontFamily,
          textAlign: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function ChurchLine({ color }: { color: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: u(4) }}>
      <div style={{ fontSize: u(28), fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color }}>
        Knotty Oak Baptist Church
      </div>
      <div style={{ fontSize: u(19), fontWeight: 400, letterSpacing: "0.04em" }}>
        11 Knotty Oak Road · Coventry, Rhode Island
      </div>
    </div>
  );
}

function Verse({ text, cite }: { text: string; cite: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: u(6) }}>
      <div style={{ maxWidth: u(580), fontSize: u(18), fontWeight: 300, lineHeight: 1.5 }}>&ldquo;{text}&rdquo;</div>
      <div style={{ fontSize: u(13), fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" }}>{cite}</div>
    </div>
  );
}

// Fall Clean Up Day, Saturday November 21 at 10:00 AM. Edit the wording right here.
export function CleanUpFlyer() {
  return (
    <Page
      bg="#ffffff"
      label="Fall Clean Up Day flyer. Saturday, November 21 at 10:00 AM at Knotty Oak Baptist Church, 11 Knotty Oak Road, Coventry, Rhode Island. We need your help!"
    >
      <Leaf size={150} color={RUST} rotate={-20} style={{ top: u(-30), left: u(-30) }} />
      <Leaf size={110} color="#E08A1E" rotate={25} style={{ top: u(40), right: u(-20) }} />
      <Leaf size={90} color="#9A3412" rotate={50} style={{ bottom: u(150), left: u(-25) }} />
      <Leaf size={120} color="#E08A1E" rotate={-35} style={{ bottom: u(-30), right: u(-30) }} />

      <div
        style={{
          position: "relative",
          height: "100%",
          boxSizing: "border-box",
          border: `max(1px, ${u(3)}) solid ${RUST}`,
          padding: `${u(40)} ${u(30)}`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: u(15), fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase" }}>
          Knotty Oak Baptist Church · Est. 1840
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ fontFamily: slab.style.fontFamily, fontSize: u(210), lineHeight: 0.9, color: RUST }}>FALL</div>
          <div style={{ fontFamily: slab.style.fontFamily, fontSize: u(64), lineHeight: 1.05, color: BROWN, whiteSpace: "nowrap" }}>
            CLEAN UP DAY
          </div>
        </div>

        <div
          style={{
            width: u(300),
            height: u(300),
            borderRadius: "50%",
            background: RUST,
            color: "#ffffff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: u(4),
          }}
        >
          <div style={{ fontSize: u(32), fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Saturday</div>
          <div style={{ fontFamily: slab.style.fontFamily, fontSize: u(72), lineHeight: 1 }}>NOV 21</div>
          <div style={{ fontSize: u(36), fontWeight: 700, letterSpacing: "0.06em" }}>10:00 AM</div>
        </div>

        <div style={{ fontFamily: script.style.fontFamily, fontSize: u(76), lineHeight: 1, color: INK, transform: "rotate(-4deg)", whiteSpace: "nowrap" }}>
          We Need Your Help!
        </div>

        <ChurchLine color={RUST} />

        <Verse
          text="And whatsoever ye do, do it heartily, as to the Lord, and not unto men."
          cite="Colossians 3:23"
        />
      </div>
    </Page>
  );
}

function PieSlice() {
  return (
    <svg viewBox="0 0 120 80" style={{ width: u(120), height: u(80), display: "block" }}>
      <path d="M8,66 L104,20 L112,58 Z" fill="#D9731F" stroke={BROWN} strokeWidth="3" strokeLinejoin="round" />
      <path d="M104,20 L112,58 L118,56 L110,16 Z" fill="#E9B872" stroke={BROWN} strokeWidth="3" strokeLinejoin="round" />
      <path d="M8,66 L112,58 L112,68 L8,74 Z" fill="#E9B872" stroke={BROWN} strokeWidth="3" strokeLinejoin="round" />
      <ellipse cx="74" cy="40" rx="16" ry="9" fill="#ffffff" stroke={BROWN} strokeWidth="2" />
    </svg>
  );
}

function Pumpkin() {
  return (
    <svg viewBox="0 0 100 90" style={{ width: u(96), height: u(86), display: "block" }}>
      <path d="M50,20 C52,10 56,6 62,4" stroke="#5B3A1A" strokeWidth="6" fill="none" strokeLinecap="round" />
      <ellipse cx="30" cy="54" rx="24" ry="30" fill="#E07A1F" stroke={BROWN} strokeWidth="3" />
      <ellipse cx="70" cy="54" rx="24" ry="30" fill="#E07A1F" stroke={BROWN} strokeWidth="3" />
      <ellipse cx="50" cy="54" rx="22" ry="32" fill="#F08C2A" stroke={BROWN} strokeWidth="3" />
    </svg>
  );
}

// Pies & Praise Service, Wednesday November 25 at 6:00 PM. Edit the wording right here.
export function PiesPraiseFlyer() {
  return (
    <Page
      bg={CREAM}
      label="Pies and Praise Service flyer. Wednesday, November 25 at 6:00 PM at Knotty Oak Baptist Church, 11 Knotty Oak Road, Coventry, Rhode Island. Bring your favorite pie!"
    >
      <div
        style={{
          height: "100%",
          boxSizing: "border-box",
          border: `max(1px, ${u(3)}) solid ${BROWN}`,
          padding: `${u(40)} ${u(30)}`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: u(15), fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: BROWN }}>
          A Thanksgiving Eve Service
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ fontFamily: slab.style.fontFamily, fontSize: u(150), lineHeight: 0.95, color: RUST }}>PIES</div>
          <div style={{ fontFamily: script.style.fontFamily, fontSize: u(110), lineHeight: 0.9, color: BROWN }}>&amp; Praise</div>
          <div style={{ marginTop: u(10), fontSize: u(30), fontWeight: 600, letterSpacing: "0.4em", textTransform: "uppercase", color: BROWN }}>
            Service
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: u(18) }}>
          <Pumpkin />
          <PieSlice />
          <Pumpkin />
          <PieSlice />
          <Pumpkin />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
            width: "100%",
            background: BROWN,
            color: "#ffffff",
            padding: `${u(20)} 0`,
          }}
        >
          <div style={{ fontSize: u(28), fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Wednesday</div>
          <div
            style={{
              fontFamily: slab.style.fontFamily,
              fontSize: u(66),
              lineHeight: 1,
              padding: `0 ${u(22)}`,
              borderLeft: `max(1px, ${u(2)}) solid #ffffff`,
              borderRight: `max(1px, ${u(2)}) solid #ffffff`,
              whiteSpace: "nowrap",
            }}
          >
            NOV 25
          </div>
          <div style={{ fontSize: u(28), fontWeight: 700, letterSpacing: "0.06em" }}>6:00 PM</div>
        </div>

        <div style={{ fontFamily: slab.style.fontFamily, fontSize: u(30), letterSpacing: "0.05em", color: RUST, whiteSpace: "nowrap" }}>
          BRING YOUR FAVORITE PIE!
        </div>

        <ChurchLine color={BROWN} />

        <Verse
          text="Enter into his gates with thanksgiving, and into his courts with praise: be thankful unto him, and bless his name."
          cite="Psalm 100:4"
        />
      </div>
    </Page>
  );
}
