import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 pt-28 text-center">
      <p className="mb-3 text-sm uppercase tracking-[0.2em] text-stone-500">
        404
      </p>
      <h1 className="mb-4 text-3xl font-semibold text-white sm:text-4xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mb-8 max-w-md text-stone-400">
        The page you&apos;re looking for may have been moved or never
        existed. Head back to the homepage instead.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-background transition hover:bg-accent/90"
      >
        Back to homepage
      </Link>
    </div>
  );
}
