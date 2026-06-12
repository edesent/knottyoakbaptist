"use client";

import { useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/xbdezjvq";

type Status = "idle" | "sending" | "sent" | "error";

export default function PrayerRequestForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [request, setRequest] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [sharing, setSharing] = useState<"public" | "private">("private");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!request.trim()) return;
    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: anonymous ? "Anonymous" : name.trim() || "Not given",
          ...(email.trim() ? { email: email.trim() } : { contact: "No email given" }),
          sharing:
            sharing === "public"
              ? "OKAY TO SHARE with the church"
              : "PRIVATE — pastor and prayer team only",
          request: request.trim(),
        }),
      });

      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-white rounded-sm shadow-md border border-ink-faint/15 p-10 text-center">
        <p className="font-serif text-3xl text-forest-800 italic mb-4">
          Your request has been received.
        </p>
        <p className="text-ink-body leading-relaxed max-w-md mx-auto">
          Thank you for sharing this with us. Pastor Justin will be praying for
          you this week. &ldquo;The effectual fervent prayer of a righteous man
          availeth much.&rdquo; (James 5:16)
        </p>
        <button
          type="button"
          onClick={() => {
            setName("");
            setEmail("");
            setRequest("");
            setAnonymous(false);
            setSharing("private");
            setStatus("idle");
          }}
          className="mt-8 inline-flex items-center bg-forest-800 text-white text-sm font-semibold tracking-wide uppercase px-6 py-3 rounded-full hover:bg-forest-700 transition-all"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  const inputClasses =
    "w-full bg-paper-warm border border-ink-faint/30 rounded-sm px-4 py-3 text-ink placeholder:text-ink-faint focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass transition-colors";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-sm shadow-md border border-ink-faint/15 p-8 md:p-10"
    >
      {/* Anonymous toggle */}
      <label className="flex items-start gap-3 cursor-pointer mb-8 select-none">
        <input
          type="checkbox"
          checked={anonymous}
          onChange={(e) => setAnonymous(e.target.checked)}
          className="mt-1 w-4 h-4 accent-[#1d3a2a]"
        />
        <span className="text-sm text-ink-body leading-relaxed">
          <span className="font-semibold text-ink">
            Keep my request anonymous.
          </span>{" "}
          Your name will not be attached to your request. If you include your
          email, it goes only to Pastor Justin and is never shared.
        </span>
      </label>

      <div className="grid md:grid-cols-2 gap-5 mb-6">
        {!anonymous && (
          <div>
            <label
              htmlFor="prayer-name"
              className="block text-xs font-semibold tracking-[0.18em] uppercase text-brass-dark mb-2"
            >
              Your Name
            </label>
            <input
              id="prayer-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First and last name"
              className={inputClasses}
            />
          </div>
        )}
        <div className={anonymous ? "md:col-span-2" : ""}>
          <label
            htmlFor="prayer-email"
            className="block text-xs font-semibold tracking-[0.18em] uppercase text-brass-dark mb-2"
          >
            Email <span className="normal-case text-ink-faint tracking-normal font-normal">(optional)</span>
          </label>
          <input
            id="prayer-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Include this if you'd like Pastor Justin to follow up"
            className={inputClasses}
          />
        </div>
      </div>

      {/* The request */}
      <div className="mb-8">
        <label
          htmlFor="prayer-request"
          className="block text-xs font-semibold tracking-[0.18em] uppercase text-brass-dark mb-2"
        >
          Your Prayer Request
        </label>
        <textarea
          id="prayer-request"
          required
          value={request}
          onChange={(e) => setRequest(e.target.value)}
          placeholder="How can we pray for you?"
          rows={6}
          className={inputClasses}
        />
      </div>

      {/* Sharing preference */}
      <fieldset className="mb-10">
        <legend className="text-xs font-semibold tracking-[0.18em] uppercase text-brass-dark mb-3">
          How should we handle this request?
        </legend>
        <div className="space-y-3">
          <label className="flex items-start gap-3 cursor-pointer select-none">
            <input
              type="radio"
              name="sharing"
              checked={sharing === "private"}
              onChange={() => setSharing("private")}
              className="mt-1 w-4 h-4 accent-[#1d3a2a]"
            />
            <span className="text-sm text-ink-body leading-relaxed">
              <span className="font-semibold text-ink">Keep it private.</span>{" "}
              Only our pastor and prayer team will see this request.
            </span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer select-none">
            <input
              type="radio"
              name="sharing"
              checked={sharing === "public"}
              onChange={() => setSharing("public")}
              className="mt-1 w-4 h-4 accent-[#1d3a2a]"
            />
            <span className="text-sm text-ink-body leading-relaxed">
              <span className="font-semibold text-ink">
                Okay to share with the church.
              </span>{" "}
              We may share this request with the congregation so the whole
              church family can pray.
            </span>
          </label>
        </div>
      </fieldset>

      {status === "error" && (
        <p className="mb-6 text-sm text-red-700 bg-red-50 border border-red-200 rounded-sm px-4 py-3">
          Something went wrong sending your request. Please try again, or call
          the church office and we will gladly pray with you.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full md:w-auto inline-flex items-center justify-center bg-brass text-forest-950 text-sm font-semibold tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-brass-light hover:-translate-y-0.5 transition-all shadow-sm disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === "sending" ? "Sending..." : "Send Prayer Request"}
      </button>
    </form>
  );
}
