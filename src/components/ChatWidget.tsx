"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Loads the "Message Pastor Justin" chat bubble and keeps it
 * visible ONLY on the homepage. When the visitor navigates to
 * any other page, the bubble is hidden; it comes back when
 * they return home.
 */
export default function ChatWidget() {
  const pathname = usePathname();
  const widgetNodes = useRef<Set<HTMLElement>>(new Set());
  const onHome = useRef(pathname === "/");
  const scriptLoaded = useRef(false);

  onHome.current = pathname === "/";

  // Watch for the elements the chat script adds to the page,
  // so we know exactly what to show/hide later.
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.tagName === "SCRIPT") return;
          // Leave Next.js accessibility helpers alone
          if (node.tagName.toLowerCase().includes("next-route-announcer")) return;
          widgetNodes.current.add(node);
          node.style.display = onHome.current ? "" : "none";
        });
      }
    });
    observer.observe(document.body, { childList: true });
    return () => observer.disconnect();
  }, []);

  // Load the chat script the first time the visitor lands on the homepage.
  useEffect(() => {
    if (pathname !== "/" || scriptLoaded.current) return;
    scriptLoaded.current = true;

    const script = document.createElement("script");
    script.src = "https://slackwebsitechat.vercel.app/widget/wbc-chat.js";
    script.async = true;
    script.dataset.api = "https://slackwebsitechat.vercel.app";
    script.dataset.key = "wbc_41a573f5963a32723cdd6f400b26d57a773b45bb7190368b";
    document.body.appendChild(script);
  }, [pathname]);

  // Show the bubble on the homepage, hide it everywhere else.
  useEffect(() => {
    const show = pathname === "/";
    widgetNodes.current.forEach((el) => {
      el.style.display = show ? "" : "none";
    });
  }, [pathname]);

  return null;
}
