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

const TITHELY_FORM_ID = "987a0e90-6865-11ee-90fc-1260ab546d11";
const TITHELY_EMBED_URL = `https://give.tithe.ly/?formId=${TITHELY_FORM_ID}`;

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

          <div className="bg-white rounded-sm shadow-md overflow-hidden border border-ink-faint/15">
            <iframe
              src={TITHELY_EMBED_URL}
              title="Give Online to Knotty Oak Baptist Church"
              className="w-full border-0 block"
              style={{ minHeight: "1000px" }}
              allow="payment"
            />
          </div>

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
