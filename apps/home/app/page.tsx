import Image from "next/image";
import Link from "next/link";

import { Product } from "@repo/types";

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Ürünler alınamadı");
  return res.json();
}

export default async function Page() {
  const products = await getProducts();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((p) => (
        <Link
          key={p.id}
          href={`/product/${p.id}`}
          className="border rounded-2xl p-4 hover:shadow"
        >
          <div className="relative w-full aspect-[3/2]">
            <Image
              src={p.image}
              alt={p.title}
              fill
              className="object-contain rounded-xl p-4"
              sizes="(min-width:1024px)33vw,(min-width:640px)50vw,100vw"
            />
          </div>
          <div>{p.rating?.count}</div>
          <div>{p.rating?.rate}</div>
          <div className="mt-3 font-semibold line-clamp-2 font-display">
            {p.title}
          </div>
          <div className="opacity-70">${p.price}</div>
        </Link>
      ))}
    </div>
  );
}
