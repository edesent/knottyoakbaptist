"use client";

declare global {
  interface Window {
    WBCChat?: {
      open: (prefillMessage?: string, options?: { autoSend?: boolean }) => void;
      toggle: () => void;
    };
  }
}

export default function MessagePastorButton() {
  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window === "undefined") return;
        if (window.WBCChat?.open) {
          window.WBCChat.open();
        } else if (window.WBCChat?.toggle) {
          window.WBCChat.toggle();
        }
      }}
      className="inline-flex items-center gap-2 bg-brass text-forest-950 font-semibold text-sm tracking-wide uppercase px-8 py-4 rounded-full hover:bg-brass-light hover:-translate-y-0.5 transition-all shadow-lg"
    >
      Message Pastor Justin
      <span aria-hidden>→</span>
    </button>
  );
}
