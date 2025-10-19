import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-block py-16 text-center">
      <h1 className="font-display text-3xl mb-3">Sorry! You Lost</h1>
      <p className="text-black/60 mb-6">We cannot find this page.</p>
      <Link href="/" className="inline-flex px-4 py-2 rounded-full border">
        Home
      </Link>
    </section>
  );
}
