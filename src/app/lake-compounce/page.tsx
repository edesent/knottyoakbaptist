"use client";
import { useState } from "react";
import Image from "next/image";

export default function LakeCompounceSignup() {
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
          <div className="text-5xl mb-4">🎢</div>
          <h1 className="font-serif text-3xl text-ink font-medium mb-3">You're Signed Up!</h1>
          <p className="text-ink-body mb-6">
            Thank you for signing up for the Lake Compounce trip. Space is limited, so we will confirm your spot soon. Remember, it&apos;s $30 per person and that covers both the amusement park and the water park.
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
        <h1 className="font-serif text-3xl md:text-4xl font-medium mb-2">Lake Compounce Trip Sign-Up</h1>
        <p className="text-brass-light italic text-sm mb-2">Amusement Park &amp; Water Park — Bristol, CT</p>
        <p className="text-white/80 text-sm">Saturday, August 22 &nbsp;|&nbsp; $30 per person &nbsp;|&nbsp; Space is limited!</p>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-10 space-y-8">

        {/* Flyer */}
        <div className="flex justify-center">
          <Image src="/2756.png" alt="Lake Compounce Trip Flyer" width={500} height={707} className="rounded-sm shadow-md" />
        </div>

        {/* Details */}
        <section className="bg-white rounded-sm shadow-sm overflow-hidden">
          <div className="bg-forest-900 text-white text-sm font-semibold tracking-wide px-5 py-3">Trip Details</div>
          <div className="p-5 text-sm text-ink-body space-y-2">
            <p><strong>When:</strong> Saturday, August 22</p>
            <p><strong>Where:</strong> Lake Compounce Amusement Park &amp; Water Park, Bristol, CT</p>
            <p><strong>Cost:</strong> $30 per person — covers admission to BOTH the amusement park and the water park</p>
            <p><strong>What to bring:</strong> Appropriate clothing, a swimsuit, and a towel for the water park</p>
            <p><strong>Space is limited</strong>, so sign up soon!</p>
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
                <label className="block text-xs font-bold text-ink-muted mb-1">How many people total (including you)? *</label>
                <input type="number" name="number_attending" min="1" required className="w-full border border-ink-faint/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-forest-600" />
              </div>
              <div>
                <label className="block text-xs font-bold text-ink-muted mb-1">Names of everyone coming *</label>
                <textarea name="names_of_attendees" rows={3} required placeholder="List each person coming with you" className="w-full border border-ink-faint/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-forest-600 resize-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-ink-muted mb-1">Anything else we should know?</label>
                <textarea name="notes" rows={2} className="w-full border border-ink-faint/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-forest-600 resize-none" />
              </div>
            </div>
          </section>

          <input type="hidden" name="_subject" value="Lake Compounce Trip Sign-Up - August 22" />

          <button type="submit" disabled={submitting} className="w-full bg-forest-900 hover:bg-forest-700 text-white font-semibold py-4 rounded-sm transition-colors text-sm tracking-wide disabled:opacity-60">
            {submitting ? "Submitting..." : "Sign Me Up"}
          </button>

          <p className="text-center text-xs text-ink-muted leading-relaxed">
            Questions? Contact Crystal at <strong>(401) 226-5856</strong> or Pastor Justin at <strong>(401) 212-7233</strong><br />
            11 Knotty Oak Road, Coventry, RI
          </p>
        </form>
      </div>
    </main>
  );
}
