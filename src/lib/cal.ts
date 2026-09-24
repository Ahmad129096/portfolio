/**
 * Cal.com is only needed once someone decides to book a call.
 *
 * The official loader shim used to be injected from the root layout on every
 * page view — together with two eager `preload` calls that fetched the full
 * 30-min and 15-min booking documents, three fonts and six scripts (~2 MB,
 * ~40 requests, three third-party cookies) before anyone clicked anything.
 *
 * Injecting it on first open keeps all of that off the critical path. The
 * widget in the modal (`CalComWidget`) polls for `window.Cal.ns` and picks
 * the queued calls up as soon as the shim runs.
 */
const CAL_LOADER = `
(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "30min", {origin: "https://cal.com"});
Cal("init", "15min", {origin: "https://cal.com"});
`;

let injected = false;

/** Inject the Cal.com loader exactly once, on demand. */
export const ensureCalLoaded = () => {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const script = document.createElement("script");
  script.innerHTML = CAL_LOADER;
  document.head.appendChild(script);
};
