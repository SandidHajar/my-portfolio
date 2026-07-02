import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <section className="case-study max-w-xl p-8 text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[var(--accent)]">404</p>
        <h1 className="mb-4 text-3xl font-semibold text-white">Page not found</h1>
        <p className="mb-8 text-base leading-7 text-slate-400">
          The page you are looking for does not exist or has moved.
        </p>
        <Link href="/" className="button-primary">
          Back to portfolio
        </Link>
      </section>
    </main>
  );
}
