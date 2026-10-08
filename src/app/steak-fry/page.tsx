"use client";
import { useState } from "react";
import Link from "next/link";
import SteakFryFlyer from "@/components/SteakFryFlyer";

export default function SteakFrySignup() {
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
          <div className="text-5xl mb-4">🥩</div>
          <h1 className="font-serif text-3xl text-ink font-medium mb-3">You&apos;re Signed Up!</h1>
          <p className="text-ink-body mb-6">
            Thanks for signing up for the Men&apos;s Steak Fry. We will see you Friday, October 30 at 6:30 PM at Knotty Oak Baptist Church. Bring a friend.
          </p>
          <Link href="/" className="text-forest-700 font-semibold underline">Back to Home</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-paper">
      {/* Header */}
      <div className="bg-forest-900 text-white text-center py-8 px-6">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brass-light mb-3">Knotty Oak Baptist Church</p>
        <h1 className="font-serif text-3xl md:text-4xl font-medium mb-2">Men&apos;s Steak Fry Sign-Up</h1>
        <p className="text-white/80 text-sm">Friday, October 30 &nbsp;|&nbsp; 6:30 PM &nbsp;|&nbsp; Free</p>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-10 space-y-8">

        {/* Flyer */}
        <div className="max-w-md mx-auto shadow-md border border-ink-faint/20">
          <SteakFryFlyer />
        </div>

        {/* Details */}
        <section className="bg-white rounded-sm shadow-sm overflow-hidden">
          <div className="bg-forest-900 text-white text-sm font-semibold tracking-wide px-5 py-3">Steak Fry Details</div>
          <div className="p-5 text-sm text-ink-body space-y-2">
            <p><strong>When:</strong> Friday, October 30 at 6:30 PM</p>
            <p><strong>Where:</strong> Knotty Oak Baptist Church, 11 Knotty Oak Road, Coventry, RI</p>
            <p><strong>Cost:</strong> Free. A love offering plate will be out if you want to give.</p>
            <p><strong>Who:</strong> All men are welcome. Bring a friend.</p>
          </div>
        </section>

        {/* Sign-Up Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <section className="bg-white rounded-sm shadow-sm overflow-hidden">
            <div className="bg-forest-900 text-white text-sm font-semibold tracking-wide px-5 py-3">Sign-Up Form</div>
            <div className="p-5 space-y-4">
              <div>
                <label htmlFor="sf-name" className="block text-xs font-bold text-ink-muted mb-1">Your Name *</label>
                <input id="sf-name" name="name" required className="w-full border border-ink-faint/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-forest-600" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="sf-phone" className="block text-xs font-bold text-ink-muted mb-1">Phone *</label>
                  <input id="sf-phone" type="tel" name="phone" required className="w-full border border-ink-faint/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-forest-600" />
                </div>
                <div>
                  <label htmlFor="sf-email" className="block text-xs font-bold text-ink-muted mb-1">Email</label>
                  <input id="sf-email" type="email" name="email" className="w-full border border-ink-faint/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-forest-600" />
                </div>
              </div>
              <div>
                <label htmlFor="sf-count" className="block text-xs font-bold text-ink-muted mb-1">How many men are coming (including you)? *</label>
                <input id="sf-count" type="number" name="number_attending" min="1" defaultValue="1" required className="w-full border border-ink-faint/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-forest-600" />
              </div>
              <div>
                <label htmlFor="sf-names" className="block text-xs font-bold text-ink-muted mb-1">Names of everyone coming with you</label>
                <textarea id="sf-names" name="names_of_attendees" rows={3} placeholder="Leave blank if it's just you" className="w-full border border-ink-faint/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-forest-600 resize-none" />
              </div>
              <div>
                <label htmlFor="sf-notes" className="block text-xs font-bold text-ink-muted mb-1">Anything else we should know?</label>
                <textarea id="sf-notes" name="notes" rows={2} placeholder="Food allergies, arriving late, questions" className="w-full border border-ink-faint/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-forest-600 resize-none" />
              </div>
            </div>
          </section>

          <input type="hidden" name="_subject" value="Men's Steak Fry Sign-Up - Friday October 30" />
          <input type="hidden" name="event" value="Men's Steak Fry, Friday October 30, 6:30 PM" />

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
