"use client";
import { useState } from "react";
import Image from "next/image";

export default function VBSRegistration() {
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
          <div className="text-5xl mb-4">✅</div>
          <h1 className="font-serif text-3xl text-ink font-medium mb-3">Registration Received!</h1>
          <p className="text-ink-body mb-6">Thank you for registering your child for VBS. We will be in touch soon.</p>
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
        <h1 className="font-serif text-3xl md:text-4xl font-medium mb-2">Vacation Bible School Registration</h1>
        <p className="text-brass-light italic text-sm mb-2">Junkyard Redemption — God's Master Plan to Remake Our Broken World</p>
        <p className="text-white/80 text-sm">August 3–8, 2026 &nbsp;|&nbsp; 9:00 AM – 12:15 PM &nbsp;|&nbsp; Ages 5 – Grade 12</p>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-10 space-y-8">
        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Child Info */}
          <section className="bg-white rounded-sm shadow-sm overflow-hidden">
            <div className="bg-forest-900 text-white text-sm font-semibold tracking-wide px-5 py-3">Child Information</div>
            <div className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-bold text-ink-muted mb-1">Child's Full Name *</label>
                <input name="child_name" required className="w-full border border-ink-faint/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-forest-600" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-ink-muted mb-1">Date of Birth *</label>
                  <input type="date" name="date_of_birth" required className="w-full border border-ink-faint/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-forest-600" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-ink-muted mb-1">Age</label>
                  <input type="number" name="age" min="5" max="18" className="w-full border border-ink-faint/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-forest-600" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-ink-muted mb-1">Grade (Fall 2026) *</label>
                  <input name="grade" required placeholder="e.g. 3rd" className="w-full border border-ink-faint/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-forest-600" />
                </div>
              </div>
            </div>
          </section>

          {/* Parent Info */}
          <section className="bg-white rounded-sm shadow-sm overflow-hidden">
            <div className="bg-forest-900 text-white text-sm font-semibold tracking-wide px-5 py-3">Parent / Guardian Information</div>
            <div className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-bold text-ink-muted mb-1">Parent / Guardian Name *</label>
                <input name="parent_name" required className="w-full border border-ink-faint/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-forest-600" />
              </div>
              <div>
                <label className="block text-xs font-bold text-ink-muted mb-1">Home Address</label>
                <input name="address" className="w-full border border-ink-faint/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-forest-600" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-ink-muted mb-1">Phone (Primary) *</label>
                  <input type="tel" name="phone_primary" required className="w-full border border-ink-faint/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-forest-600" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-ink-muted mb-1">Phone (Secondary)</label>
                  <input type="tel" name="phone_secondary" className="w-full border border-ink-faint/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-forest-600" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-ink-muted mb-1">Email Address *</label>
                <input type="email" name="email" required className="w-full border border-ink-faint/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-forest-600" />
              </div>
            </div>
          </section>

          {/* Emergency Contact */}
          <section className="bg-white rounded-sm shadow-sm overflow-hidden">
            <div className="bg-forest-900 text-white text-sm font-semibold tracking-wide px-5 py-3">Emergency Contact (if different from parent)</div>
            <div className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-bold text-ink-muted mb-1">Emergency Contact Name</label>
                <input name="emergency_contact_name" className="w-full border border-ink-faint/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-forest-600" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-ink-muted mb-1">Relationship to Child</label>
                  <input name="emergency_contact_relationship" className="w-full border border-ink-faint/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-forest-600" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-ink-muted mb-1">Phone Number</label>
                  <input type="tel" name="emergency_contact_phone" className="w-full border border-ink-faint/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-forest-600" />
                </div>
              </div>
            </div>
          </section>

          {/* Medical */}
          <section className="bg-white rounded-sm shadow-sm overflow-hidden">
            <div className="bg-forest-900 text-white text-sm font-semibold tracking-wide px-5 py-3">Medical / Allergy Information</div>
            <div className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-bold text-ink-muted mb-1">Allergies (or write "None")</label>
                <textarea name="allergies" rows={3} placeholder="e.g. peanuts, bee stings, penicillin..." className="w-full border border-ink-faint/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-forest-600 resize-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-ink-muted mb-1">Medical Conditions or Special Needs</label>
                <textarea name="medical_notes" rows={3} placeholder="e.g. asthma, ADHD, hearing aid..." className="w-full border border-ink-faint/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-forest-600 resize-none" />
              </div>
            </div>
          </section>

          {/* Waivers */}
          <section className="bg-white rounded-sm shadow-sm overflow-hidden">
            <div className="bg-forest-900 text-white text-sm font-semibold tracking-wide px-5 py-3">Permission &amp; Liability Waiver</div>
            <div className="p-5 space-y-6">

              <div className="space-y-3">
                <p className="text-xs font-bold text-forest-800 uppercase tracking-wide">1. Participation &amp; Liability Waiver</p>
                <p className="text-xs text-ink-body leading-relaxed bg-paper border-l-2 border-forest-700 px-3 py-2">I give permission for my child to participate in all VBS activities at Knotty Oak Baptist Church, August 3–8, 2026. I understand that reasonable care will be taken, and I release Knotty Oak Baptist Church and its staff from liability for any injury that may occur during the program.</p>
                <label className="flex items-start gap-2 text-xs text-ink-body">
                  <input type="checkbox" name="waiver_agreed" value="yes" required className="mt-0.5 accent-forest-700" />
                  <span>I agree to the Participation &amp; Liability Waiver above. *</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-ink-muted mb-1">Parent / Guardian Signature *</label>
                    <input name="signature_waiver" required className="w-full border border-ink-faint/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-forest-600" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-ink-muted mb-1">Date *</label>
                    <input type="date" name="signature_waiver_date" required className="w-full border border-ink-faint/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-forest-600" />
                  </div>
                </div>
              </div>

              <hr className="border-ink-faint/20" />

              <div className="space-y-3">
                <p className="text-xs font-bold text-forest-800 uppercase tracking-wide">2. Photo &amp; Media Permission</p>
                <p className="text-xs text-ink-body leading-relaxed bg-paper border-l-2 border-forest-700 px-3 py-2">I give permission for photos and/or videos of my child to be taken during VBS activities and used in Knotty Oak Baptist Church publications, bulletins, social media, and other church communications.</p>
                <label className="flex items-start gap-2 text-xs text-ink-body">
                  <input type="checkbox" name="photo_permission" value="yes" className="mt-0.5 accent-forest-700" />
                  <span>I give permission for photos/videos of my child to be used as described above.</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-ink-muted mb-1">Parent / Guardian Signature</label>
                    <input name="signature_photo" className="w-full border border-ink-faint/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-forest-600" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-ink-muted mb-1">Date</label>
                    <input type="date" name="signature_photo_date" className="w-full border border-ink-faint/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-forest-600" />
                  </div>
                </div>
              </div>

            </div>
          </section>

          <input type="hidden" name="_subject" value="VBS Registration 2026 - Junkyard Redemption" />

          <button type="submit" disabled={submitting} className="w-full bg-forest-900 hover:bg-forest-700 text-white font-semibold py-4 rounded-sm transition-colors text-sm tracking-wide disabled:opacity-60">
            {submitting ? "Submitting..." : "Submit Registration"}
          </button>

          <p className="text-center text-xs text-ink-muted leading-relaxed">
            Questions? Call <strong>401-226-5856</strong> or email <strong>jmart2cor515@gmail.com</strong><br />
            11 Knotty Oak Road, Coventry, RI
          </p>

        </form>
      </div>
    </main>
  );
}
