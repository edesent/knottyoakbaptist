import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { OakLeaf } from "@/components/Mark";

export const metadata: Metadata = {
  title: "Give",
  description:
    "Support the ministry of Knotty Oak Baptist Church in Coventry, RI. Give securely online through Tithe.ly.",
  alternates: { canonical: "/give" },
};

// TODO: Replace with Knotty Oak's actual Tithe.ly form ID once provided.
// Tithe.ly embed format: https://tithe.ly/give?c={CHURCH_ID}  or  https://give.tithe.ly/?formId={FORM_ID}
const TITHELY_URL = "";

export default function GivePage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-paper min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <header className="text-center mb-14">
            <div className="flex justify-center mb-6 text-brass">
              <OakLeaf className="w-10 h-10" />
            </div>
            <p className="eyebrow">Support the Ministry</p>
            <h1 className="mt-4 font-serif text-5xl md:text-6xl text-ink font-medium leading-[1.05] tracking-tight">
              Give with a
              <span className="italic text-forest-800"> cheerful heart.</span>
            </h1>
            <p className="mt-8 text-lg text-ink-body leading-relaxed max-w-2xl mx-auto">
              Thank you for partnering with Knotty Oak Baptist Church. Your giving
              helps us proclaim the Gospel, support ongoing ministry, and serve the
              Coventry community.
            </p>
          </header>

          {/* Scripture */}
          <div className="bg-paper-warm border-l-[3px] border-brass p-8 md:p-10 mb-12">
            <p className="pull-quote text-xl md:text-2xl text-ink leading-relaxed">
              &ldquo;Every man according as he purposeth in his heart, so let him
              give; not grudgingly, or of necessity: for God loveth a cheerful
              giver.&rdquo;
            </p>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-brass-dark mt-4">
              2 Corinthians 9:7
            </p>
          </div>

          {/* Tithely Embed (or placeholder) */}
          {TITHELY_URL ? (
            <div className="bg-white rounded-sm shadow-md overflow-hidden border border-ink-faint/15">
              <iframe
                src={TITHELY_URL}
                title="Give Online to Knotty Oak Baptist Church"
                className="w-full border-0"
                style={{ minHeight: "900px" }}
                allow="payment"
              />
            </div>
          ) : (
            <div className="bg-white rounded-sm shadow-md p-10 md:p-14 border border-ink-faint/15 text-center">
              <p className="eyebrow text-brass-dark">Online Giving</p>
              <h2 className="mt-3 font-serif text-3xl text-ink font-medium">
                Secure giving via Tithe.ly
              </h2>
              <p className="mt-5 text-ink-body max-w-lg mx-auto leading-relaxed">
                Our secure online giving form is being set up. In the meantime,
                you can give through Tithe.ly directly, or reach out to the church
                office for other giving methods.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href="https://tithe.ly/give"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-forest-900 text-white font-semibold text-sm tracking-wide uppercase px-7 py-3.5 rounded-full hover:bg-forest-800 transition-all"
                >
                  Open Tithe.ly →
                </a>
                <a
                  href="tel:+14018285856"
                  className="inline-flex items-center gap-2 text-forest-800 font-semibold text-sm tracking-wide uppercase px-7 py-3.5 rounded-full border-2 border-forest-800/30 hover:bg-forest-100 hover:border-forest-800/60 transition-all"
                >
                  Call the Church
                </a>
              </div>
            </div>
          )}

          {/* Other ways */}
          <div className="mt-16 grid md:grid-cols-2 gap-6 text-sm">
            <div className="bg-paper-warm p-6 rounded-sm">
              <p className="eyebrow text-brass-dark mb-2">By Mail</p>
              <p className="text-ink-body leading-relaxed">
                Knotty Oak Baptist Church<br />
                11 Knotty Oak Road<br />
                Coventry, RI 02816
              </p>
            </div>
            <div className="bg-paper-warm p-6 rounded-sm">
              <p className="eyebrow text-brass-dark mb-2">In Person</p>
              <p className="text-ink-body leading-relaxed">
                An offering plate is passed during every Sunday service. If
                you&rsquo;re visiting, please feel no obligation — we&rsquo;re just
                glad you&rsquo;re here.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
