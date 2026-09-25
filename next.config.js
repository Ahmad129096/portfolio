/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // This is a single-page site: every section lives on "/". These entries
    // exist so that old/shared/bookmarked URLs like /about still land on the
    // right section instead of 404-ing.
    //
  // They MUST be declared here rather than as `redirect()` calls inside
    // `src/app/<route>/page.tsx`. A component-level redirect() on a static
    // route bakes status 307 into the prerender manifest but drops the
    // Location header entirely, so the server answers 307 with no target.
    // Browsers show a blank page and Search Console reports "Page with
    // redirect". Config-level redirects run before the filesystem and always
    // emit a real Location header.
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/work", destination: "/#work", permanent: true },
      { source: "/services", destination: "/#services", permanent: true },
      { source: "/testimonials", destination: "/#testimonials", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
  async headers() {
    // Security headers for Best Practices: clickjacking (XFO + CSP
    // frame-ancestors), MIME sniffing, COOP origin isolation, strong HSTS,
    // and a CSP scoped to self + the on-demand Cal.com embed. Cal only
    // loads when the booking modal opens, so nothing third-party is on the
    // critical path anymore.
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; " +
              "script-src 'self' 'unsafe-inline' https://app.cal.com https://cal.com; " +
              "style-src 'self' 'unsafe-inline'; " +
              "img-src 'self' data: blob:; " +
              "font-src 'self' data:; " +
              "connect-src 'self' https://app.cal.com https://cal.com https://*.cal.com https://*.sentry.io; " +
              "frame-src 'self' https://app.cal.com https://cal.com; " +
              "worker-src 'self' blob:; " +
              "object-src 'none'; base-uri 'self'; form-action 'self'; " +
              "frame-ancestors 'none'",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
