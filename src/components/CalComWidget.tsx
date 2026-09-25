"use client";
import { useEffect, useRef, useState } from "react";

const CAL_USERNAME = "ahmadhassan";

const durations = [
  { key: "30min", label: "30 min" },
  { key: "15min", label: "15 min" },
];

declare global {
  interface Window {
    Cal?: {
      (...args: unknown[]): void;
      ns: Record<string, (...args: unknown[]) => void>;
    };
  }
}

const CalComWidget = () => {
  const [active, setActive] = useState("30min");
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const render = () => {
      if (!window.Cal?.ns) {
        // Loader script (injected on first open) may still be attaching,
        // so retry briefly rather than showing nothing.
        setTimeout(render, 50);
        return;
      }
      durations.forEach(({ key }) => {
        window.Cal!.ns[key]?.("inline", {
          elementOrSelector: `#cal-inline-${key}`,
          calLink: `${CAL_USERNAME}/${key}`,
          config: { theme: "dark", layout: "month_view" },
        });
        window.Cal!.ns[key]?.("ui", {
          theme: "dark",
          layout: "month_view",
          styles: { branding: { brandColor: "#c9a24d" } },
        });
      });
    };

    render();
  }, []);

  return (
    <div>
      <div className="mb-6 inline-flex rounded-md border border-overlay/10 p-1">
        {durations.map((d) => (
          <button
            key={d.key}
            onClick={() => setActive(d.key)}
            className={`rounded px-4 py-2 text-sm transition ${
              active === d.key
                ? "bg-accent text-ink"
                : "text-muted hover:text-text"
            }`}
          >
            {d.label}
          </button>
        ))}
      </div>
      {durations.map((d) => (
        <div
          key={d.key}
          id={`cal-inline-${d.key}`}
          style={{
            width: "100%",
            height: "700px",
            display: active === d.key ? "block" : "none",
          }}
        />
      ))}
    </div>
  );
};

export default CalComWidget;
