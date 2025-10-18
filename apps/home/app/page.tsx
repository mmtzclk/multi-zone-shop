import { Product } from "@repo/types";
import HeroSection from "@/sections/HeroSection";
import BrandsSection from "@/sections/BrandsSection";
import ProductGridSection from "@/sections/ProductGridSection";

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 60, tags: ["products"] },
  });
  if (!res.ok) throw new Error("Ürünler alınamadı");
  return res.json();
}

export default async function Page() {
  const products = await getProducts();
  return (
    <>
      <HeroSection />
      <BrandsSection />
      <ProductGridSection
        title="NEW ARRIVALS"
        products={products}
        maxItems={8}
        showViewAll
        viewAllHref="/products"
      />
      <div className="container-block">
        <div className="h-px w-full bg-black/10"></div>
      </div>
      <ProductGridSection
        title="TOP SELLING"
        products={products}
        maxItems={8}
        showViewAll
        viewAllHref="/products"
      />
    </>
  );
}
