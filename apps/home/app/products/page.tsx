import ProductGridSection from "@/sections/ProductGridSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getProducts } from "../lib/product";

export default async function Page() {
  const products = await getProducts();
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Shop" }]} />
      <ProductGridSection title="PRODUCTS" products={products} />
    </>
  );
}
