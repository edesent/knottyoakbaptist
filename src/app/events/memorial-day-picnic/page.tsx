import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Memorial Day Church Picnic",
  description:
    "Join Knotty Oak Baptist Church for our Memorial Day Church Picnic — Monday, May 26 at 12:00 PM. Food, games, and fellowship for the whole family!",
  alternates: { canonical: "/events/memorial-day-picnic" },
};

export default function MemorialDayPicnicPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-paper min-h-screen">
        <div className="max-w-2xl mx-auto px-4">

          {/* Flyer card */}
          <div
            style={{
              fontFamily: "'Nunito', sans-serif",
              background: "#FFF8EE",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
            }}
          >
            {/* ── HERO ── */}
            <div
              style={{
                position: "relative",
                height: "260px",
                background: "linear-gradient(180deg, #1B3A6B 0%, #2660A4 40%, #71B6E8 85%, #A8D8F0 100%)",
                overflow: "hidden",
              }}
            >
              {/* Sun */}
              <div style={{
                position: "absolute", top: "20px", right: "80px",
                width: "80px", height: "80px",
                background: "radial-gradient(circle, #FFE84D 40%, #FFB800 100%)",
                borderRadius: "50%",
                boxShadow: "0 0 50px 20px rgba(255,220,0,0.6), 0 0 100px 40px rgba(255,180,0,0.35)",
              }} />

              {/* Clouds */}
              <div style={{ position:"absolute", top:"40px", left:"35px", width:"130px", height:"38px", background:"white", borderRadius:"100px", filter:"drop-shadow(0 3px 6px rgba(0,0,0,0.1))" }} />
              <div style={{ position:"absolute", top:"55px", left:"490px", width:"100px", height:"30px", background:"white", borderRadius:"100px", filter:"drop-shadow(0 3px 6px rgba(0,0,0,0.1))" }} />

              {/* Sparkles */}
              {["12px","52px","28px","65px","44px"].map((top, i) => (
                <span key={i} style={{
                  position:"absolute", color:"#FFE84D", fontSize:"15px",
                  top, left: ["165px","470px","245px","118px","290px"][i],
                  opacity: 0.85,
                }}>
                  {i % 2 === 0 ? "✦" : "★"}
                </span>
              ))}

              {/* Balloons left */}
              <div style={{ position:"absolute", bottom:"90px", left:"14px" }}>
                {[["#E53935",0,0],["#FFB800",-10,22],["#1565C0",4,42],["#43A047",-6,62]].map(([bg,top,left],i)=>(
                  <div key={i} style={{
                    position:"absolute", width:"30px", height:"38px",
                    background: bg as string,
                    borderRadius:"50% 50% 55% 45% / 60% 60% 40% 40%",
                    top: `${top}px`, left: `${left}px`,
                    boxShadow: "inset -4px -4px 0 rgba(0,0,0,0.15)",
                  }} />
                ))}
              </div>

              {/* Balloons right */}
              <div style={{ position:"absolute", bottom:"90px", right:"14px" }}>
                {[["#1565C0",0,0],["#E53935",-10,22],["#43A047",4,42],["#FFB800",-6,62]].map(([bg,top,left],i)=>(
                  <div key={i} style={{
                    position:"absolute", width:"30px", height:"38px",
                    background: bg as string,
                    borderRadius:"50% 50% 55% 45% / 60% 60% 40% 40%",
                    top: `${top}px`, left: `${left}px`,
                    boxShadow: "inset -4px -4px 0 rgba(0,0,0,0.15)",
                  }} />
                ))}
              </div>

              {/* Left umbrella */}
              <div style={{ position:"absolute", bottom:"38px", left:"28px", display:"flex", flexDirection:"column", alignItems:"center" }}>
                <div style={{ width:"95px", height:"48px", borderRadius:"48px 48px 0 0", overflow:"hidden", display:"flex", boxShadow:"0 4px 10px rgba(0,0,0,0.3)" }}>
                  {[0,1,2,3,4,5].map(i=>(
                    <div key={i} style={{ flex:1, height:"100%", background: i%2===0 ? "#C8273A" : "white" }} />
                  ))}
                </div>
                <div style={{ width:"4px", height:"65px", background:"linear-gradient(180deg,#C4922A,#A07020)" }} />
                <div style={{ width:"26px", height:"7px", background:"#8B6010", borderRadius:"3px" }} />
              </div>

              {/* Right umbrella */}
              <div style={{ position:"absolute", bottom:"38px", right:"28px", display:"flex", flexDirection:"column", alignItems:"center" }}>
                <div style={{ width:"95px", height:"48px", borderRadius:"48px 48px 0 0", overflow:"hidden", display:"flex", boxShadow:"0 4px 10px rgba(0,0,0,0.3)" }}>
                  {[0,1,2,3,4,5].map(i=>(
                    <div key={i} style={{ flex:1, height:"100%", background: i%2===0 ? "#C8273A" : "white" }} />
                  ))}
                </div>
                <div style={{ width:"4px", height:"65px", background:"linear-gradient(180deg,#C4922A,#A07020)" }} />
                <div style={{ width:"26px", height:"7px", background:"#8B6010", borderRadius:"3px" }} />
              </div>

              {/* Picnic table */}
              <div style={{ position:"absolute", bottom:"44px", left:"50%", transform:"translateX(-50%)" }}>
                <div style={{ width:"160px", height:"14px", background:"linear-gradient(180deg,#A0693A,#7B4F28)", borderRadius:"4px", boxShadow:"0 4px 8px rgba(0,0,0,0.4)" }} />
                <div style={{ display:"flex", justifyContent:"space-around", marginTop:"0" }}>
                  <div style={{ width:"9px", height:"36px", background:"#7B4F28", transform:"rotate(-10deg)", transformOrigin:"top center" }} />
                  <div style={{ width:"9px", height:"36px", background:"#7B4F28", transform:"rotate(10deg)", transformOrigin:"top center" }} />
                </div>
              </div>

              {/* Grass */}
              <div style={{ position:"absolute", bottom:0, left:"-5%", right:"-5%", height:"70px", background:"#3A7D44", borderRadius:"70% 70% 0 0 / 28px 28px 0 0" }} />
              <div style={{ position:"absolute", bottom:0, left:"-5%", right:"-5%", height:"50px", background:"linear-gradient(180deg,#52A85E,#3D8C48)", borderRadius:"60% 60% 0 0 / 22px 22px 0 0" }} />
            </div>

            {/* ── BUNTING ── */}
            <div style={{ background:"#1B3A6B", display:"flex", justifyContent:"center", padding:"8px 0 0", position:"relative", height:"34px", overflow:"hidden" }}>
              <div style={{ position:"absolute", top:"8px", left:0, right:0, height:"2px", background:"rgba(255,255,255,0.3)" }} />
              {Array.from({length:19}).map((_,i)=>(
                <div key={i} style={{
                  width:"32px", height:"26px", margin:"8px 2px 0",
                  clipPath:"polygon(0 0, 100% 0, 50% 100%)",
                  background: i%3===0 ? "#C8273A" : i%3===1 ? "#FFE84D" : "white",
                }} />
              ))}
            </div>

            {/* ── TITLE ── */}
            <div style={{
              background:"linear-gradient(135deg,#C8273A 0%,#9B1B2B 100%)",
              padding:"24px 20px 20px",
              textAlign:"center",
            }}>
              <div style={{ display:"flex", justifyContent:"center", gap:"12px", marginBottom:"8px", fontSize:"20px" }}>
                <span>🎉</span><span style={{color:"#FFE84D"}}>★</span><span>🇺🇸</span><span style={{color:"#FFE84D"}}>★</span><span>🎉</span>
              </div>
              <p style={{ fontFamily:"'Fredoka One',cursive", fontSize:"11px", letterSpacing:"0.35em", textTransform:"uppercase", color:"rgba(255,255,255,0.75)", marginBottom:"6px" }}>
                Knotty Oak Baptist Church
              </p>
              <div style={{
                fontFamily:"'Lilita One',cursive",
                fontSize:"clamp(52px,10vw,76px)",
                lineHeight:"0.92",
                color:"#FFE84D",
                textShadow:"3px 4px 0 #9B1B2B, 7px 7px 0 rgba(0,0,0,0.22), 0 0 40px rgba(255,232,77,0.4)",
                letterSpacing:"0.01em",
              }}>
                CHURCH<br/>PICNIC!
              </div>
              <div style={{ fontFamily:"'Lilita One',cursive", fontSize:"28px", color:"white", textShadow:"2px 3px 0 rgba(0,0,0,0.3)", marginTop:"6px", letterSpacing:"0.04em" }}>
                Memorial Day Celebration
              </div>
            </div>

            {/* ── DATE STRIP ── */}
            <div style={{ background:"#1B3A6B", display:"flex", borderTop:"3px solid #FFE84D" }}>
              {[
                { icon:"📅", lbl:"Date",   val:"Monday, May 26th" },
                { icon:"⏰", lbl:"Kickoff", val:"12:00 PM" },
                { icon:"📍", lbl:"Where",  val:"Church Grounds" },
              ].map((item,i)=>(
                <div key={i} style={{ flex:1, textAlign:"center", padding:"14px 8px", borderRight: i<2 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
                  <div style={{ fontSize:"24px", lineHeight:1, marginBottom:"3px" }}>{item.icon}</div>
                  <div style={{ fontSize:"8px", fontWeight:900, letterSpacing:"0.28em", textTransform:"uppercase", color:"#FFE84D", marginBottom:"2px" }}>{item.lbl}</div>
                  <div style={{ fontFamily:"'Fredoka One',cursive", fontSize:"16px", color:"white", lineHeight:1.25 }}>{item.val}</div>
                </div>
              ))}
            </div>

            {/* ── BODY ── */}
            <div style={{ padding:"28px 36px 32px", background:"#FFF8EE" }}>

              {/* Invite banner */}
              <div style={{
                background:"linear-gradient(135deg,#1B3A6B,#2660A4)",
                borderRadius:"16px",
                padding:"18px 24px",
                textAlign:"center",
                marginBottom:"22px",
                boxShadow:"0 6px 24px rgba(27,58,107,0.25)",
                borderBottom:"4px solid #FFE84D",
              }}>
                <div style={{ fontFamily:"'Boogaloo',cursive", fontSize:"28px", color:"white", lineHeight:1.3, textShadow:"1px 2px 4px rgba(0,0,0,0.3)" }}>
                  Join us for a day of<br/>
                  <span style={{ color:"#FFE84D", fontSize:"34px" }}>food, games &amp; fellowship!</span>
                </div>
              </div>

              {/* Activity cards */}
              <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"12px", marginBottom:"22px" }}>
                {[
                  { icon:"🍔", label:"Grilling & Food",  color:"#C8273A" },
                  { icon:"🏐", label:"Lawn Games",        color:"#1B3A6B" },
                  { icon:"👨‍👩‍👧‍👦", label:"Family Fun",   color:"#E8A020" },
                  { icon:"🎶", label:"Good Times",        color:"#3A7D44" },
                ].map((c,i)=>(
                  <div key={i} style={{
                    background:"white",
                    borderRadius:"14px",
                    padding:"16px 8px 12px",
                    textAlign:"center",
                    boxShadow:"0 4px 16px rgba(0,0,0,0.09)",
                    borderTop:`5px solid ${c.color}`,
                    border:`2.5px solid ${c.color}`,
                  }}>
                    <div style={{ fontSize:"34px", marginBottom:"6px" }}>{c.icon}</div>
                    <div style={{ fontFamily:"'Fredoka One',cursive", fontSize:"13px", color:"#1B3A6B", lineHeight:1.2 }}>{c.label}</div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div style={{ textAlign:"center", fontSize:"20px", letterSpacing:"6px", margin:"4px 0 20px", color:"#C8273A" }}>🎊 🇺🇸 🎊</div>

              {/* Notice boxes */}
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"14px" }}>
                <div style={{ background:"linear-gradient(135deg,#FFF8E1,#FFECB3)", border:"2.5px solid #FFB300", borderRadius:"14px", padding:"18px 16px", display:"flex", gap:"12px", alignItems:"flex-start" }}>
                  <span style={{ fontSize:"30px", flexShrink:0 }}>🥗</span>
                  <div>
                    <p style={{ fontSize:"9px", fontWeight:900, letterSpacing:"0.2em", textTransform:"uppercase", color:"#1B3A6B", opacity:0.6, marginBottom:"3px" }}>Bring a Dish</p>
                    <p style={{ fontFamily:"'Fredoka One',cursive", fontSize:"15px", color:"#1B3A6B", lineHeight:1.4 }}>Bring something to share with everyone!</p>
                  </div>
                </div>
                <div style={{ background:"linear-gradient(135deg,#E8F5E9,#C8E6C9)", border:"2.5px solid #43A047", borderRadius:"14px", padding:"18px 16px", display:"flex", gap:"12px", alignItems:"flex-start" }}>
                  <span style={{ fontSize:"30px", flexShrink:0 }}>⏳</span>
                  <div>
                    <p style={{ fontSize:"9px", fontWeight:900, letterSpacing:"0.2em", textTransform:"uppercase", color:"#1B3A6B", opacity:0.6, marginBottom:"3px" }}>Please Note</p>
                    <p style={{ fontFamily:"'Fredoka One',cursive", fontSize:"15px", color:"#1B3A6B", lineHeight:1.4 }}>Please don&rsquo;t arrive before 12:00 PM.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── FOOTER ── */}
            <div style={{ background:"linear-gradient(135deg,#C8273A,#9B1B2B)", padding:"18px 36px", textAlign:"center" }}>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"14px" }}>
                <span style={{ fontSize:"24px" }}>🎉</span>
                <span style={{ fontFamily:"'Lilita One',cursive", fontSize:"22px", color:"white", textShadow:"2px 3px 0 rgba(0,0,0,0.25)", letterSpacing:"0.02em" }}>
                  We can&rsquo;t wait to see you there!
                </span>
                <span style={{ fontSize:"24px" }}>🎉</span>
              </div>
              <p style={{ fontSize:"11px", fontWeight:800, letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(255,255,255,0.7)", marginTop:"6px" }}>
                Knotty Oak Baptist Church · Coventry, RI
              </p>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-10 text-center">
            <a href="/#events" className="text-sm font-semibold text-forest-700 hover:text-forest-900 transition-colors">
              ← Back to Events
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
