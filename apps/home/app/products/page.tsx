import { Product } from "@repo/types";
import ProductGridSection from "@/sections/ProductGridSection";
import Breadcrumbs from "@/components/Breadcrumbs";

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
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Shop" }]} />
      <ProductGridSection title="PRODUCTS" products={products} />
    </>
  );
}
