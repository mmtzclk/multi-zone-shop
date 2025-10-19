import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-block py-16 text-center">
      <h1 className="font-display text-3xl mb-2">Product not found</h1>
      <p className="text-black/60">
        The product you are looking for has been deleted or does not exist at
        all.
      </p>
      <Link
        href="/products"
        className="inline-flex mt-6 px-4 py-2 rounded-full border"
      >
        Return to store
      </Link>
    </section>
  );
}
