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
    // Location header entirely, so the server answers 307 with no target —
    // browsers show a blank page and Search Console reports "Page with
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
};

module.exports = nextConfig;
