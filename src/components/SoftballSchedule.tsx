"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    GC?: {
      team: {
        schedule: {
          init: (options: {
            target: string;
            widgetId: string;
            maxVerticalGamesVisible?: number;
          }) => void;
        };
      };
    };
  }
}

const SDK_SRC = "https://widgets.gc.com/static/js/sdk.v1.js";

export default function SoftballSchedule() {
  useEffect(() => {
    const init = () => {
      window.GC?.team.schedule.init({
        target: "#gc-schedule-widget-gjn0",
        widgetId: "adae7ee8-c271-4466-ab18-391383fbc7bc",
        maxVerticalGamesVisible: 4,
      });
    };

    if (window.GC) {
      init();
      return;
    }

    const existing = document.querySelector(`script[src="${SDK_SRC}"]`);
    if (existing) {
      existing.addEventListener("load", init);
      return;
    }

    const script = document.createElement("script");
    script.src = SDK_SRC;
    script.async = true;
    script.onload = init;
    document.body.appendChild(script);
  }, []);

  return <div id="gc-schedule-widget-gjn0" className="min-h-[400px]" />;
}
