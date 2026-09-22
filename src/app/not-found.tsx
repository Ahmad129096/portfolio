import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 pt-28 text-center">
      <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted">
        404
      </p>
      <h1 className="mb-4 text-3xl font-semibold text-text sm:text-4xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mb-8 max-w-md text-muted">
        The page you&apos;re looking for may have been moved or never
        existed. Head back to the homepage instead.
      </p>
      <Link href="/" className="btn-primary">
        Back to homepage
      </Link>
    </div>
  );
}
