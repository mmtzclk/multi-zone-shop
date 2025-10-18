import * as React from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@repo/types";
import Link from "next/link";

type Props = {
  title: string;
  products: Product[];
  maxItems?: number;
  showViewAll?: boolean;
  viewAllHref?: string;
};

export default function ProductGridSection({
  title,
  products,
  maxItems,
  showViewAll = false,
  viewAllHref = "/products",
}: Props) {
  const visible =
    typeof maxItems === "number" ? products.slice(0, maxItems) : products;

  return (
    <section className="container-block my-12 lg:my-16">
      <div className="mb-6 md:mb-10 lg:mb-14 flex items-end justify-between gap-4">
        <h2 className="text-center w-full font-display text-3xl md:text-4xl lg:text-5xl">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
        {visible.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {showViewAll && (
        <div className="mt-9 flex justify-center">
          <Link
            href={viewAllHref}
            className="h-13 flex items-center justify-center px-20 rounded-full border border-black/10 hover:border-black hover:bg-black hover:text-white duration-300 font-medium"
          >
            View All
          </Link>
        </div>
      )}
    </section>
  );
}
