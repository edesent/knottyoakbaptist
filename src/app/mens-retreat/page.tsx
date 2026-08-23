"use client";
import { useState } from "react";
import Image from "next/image";

export default function MensRetreatSignup() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const res = await fetch("https://formspree.io/f/xbdvylkp", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    setSubmitting(false);
    if (res.ok) setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-paper flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="text-5xl mb-4">🏕️</div>
          <h1 className="font-serif text-3xl text-ink font-medium mb-3">You&apos;re Signed Up!</h1>
          <p className="text-ink-body mb-6">
            Thank you for signing up for the Men&apos;s Retreat at Camp Northfield, September 18 and 19. It&apos;s $75 per man, and that covers lodging and meals. We will be in touch with the rest of the details before we go.
          </p>
          <a href="/" className="text-forest-700 font-semibold underline">Back to Home</a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-paper">
      {/* Header */}
      <div className="bg-forest-900 text-white text-center py-8 px-6">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brass-light mb-3">Knotty Oak Baptist Church</p>
        <div className="flex justify-center mb-4">
          <Image src="/1503.png" alt="KOBC Logo" width={80} height={80} className="drop-shadow-lg" />
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-medium mb-2">Men&apos;s Retreat Sign-Up</h1>
        <p className="text-brass-light italic text-sm mb-2">Camp Northfield</p>
        <p className="text-white/80 text-sm">Friday, September 18 &amp; Saturday, September 19 &nbsp;|&nbsp; $75 per man</p>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-10 space-y-8">

        {/* Verse */}
        <div className="text-center">
          <p className="font-serif italic text-xl text-forest-800 leading-relaxed">
            &ldquo;Iron sharpeneth iron; so a man sharpeneth the countenance of his friend.&rdquo;
          </p>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brass-dark mt-3">Proverbs 27:17</p>
        </div>

        {/* Details */}
        <section className="bg-white rounded-sm shadow-sm overflow-hidden">
          <div className="bg-forest-900 text-white text-sm font-semibold tracking-wide px-5 py-3">Retreat Details</div>
          <div className="p-5 text-sm text-ink-body space-y-2">
            <p><strong>When:</strong> Friday evening, September 18 through Saturday, September 19</p>
            <p><strong>Where:</strong> Camp Northfield</p>
            <p><strong>Cost:</strong> $75 per man — covers lodging and meals</p>
            <p><strong>Who:</strong> Every man and young man. Bring a friend, bring your son, bring your neighbor.</p>
            <p><strong>What to bring:</strong> Your Bible, a notebook, bedding, and clothes for two days.</p>
          </div>
        </section>

        {/* Sign-Up Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <section className="bg-white rounded-sm shadow-sm overflow-hidden">
            <div className="bg-forest-900 text-white text-sm font-semibold tracking-wide px-5 py-3">Sign-Up Form</div>
            <div className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-bold text-ink-muted mb-1">Your Name *</label>
                <input name="name" required className="w-full border border-ink-faint/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-forest-600" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-ink-muted mb-1">Phone *</label>
                  <input type="tel" name="phone" required className="w-full border border-ink-faint/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-forest-600" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-ink-muted mb-1">Email</label>
                  <input type="email" name="email" className="w-full border border-ink-faint/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-forest-600" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-ink-muted mb-1">How many men are you signing up (including you)? *</label>
                <input type="number" name="number_attending" min="1" defaultValue="1" required className="w-full border border-ink-faint/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-forest-600" />
              </div>
              <div>
                <label className="block text-xs font-bold text-ink-muted mb-1">Names of everyone coming with you</label>
                <textarea name="names_of_attendees" rows={3} placeholder="Leave blank if it's just you" className="w-full border border-ink-faint/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-forest-600 resize-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-ink-muted mb-1">Can you drive, and do you have room for others?</label>
                <input name="driving" placeholder="e.g. Yes, room for 3" className="w-full border border-ink-faint/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-forest-600" />
              </div>
              <div>
                <label className="block text-xs font-bold text-ink-muted mb-1">Anything else we should know?</label>
                <textarea name="notes" rows={2} placeholder="Food allergies, arriving late, questions" className="w-full border border-ink-faint/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-forest-600 resize-none" />
              </div>
            </div>
          </section>

          <input type="hidden" name="_subject" value="Men's Retreat Sign-Up - September 18-19" />

          <button type="submit" disabled={submitting} className="w-full bg-forest-900 hover:bg-forest-700 text-white font-semibold py-4 rounded-sm transition-colors text-sm tracking-wide disabled:opacity-60">
            {submitting ? "Submitting..." : "Sign Me Up"}
          </button>

          <p className="text-center text-xs text-ink-muted leading-relaxed">
            Questions? Contact Pastor Justin at <strong>(401) 212-7233</strong><br />
            11 Knotty Oak Road, Coventry, RI
          </p>
        </form>
      </div>
    </main>
  );
}
