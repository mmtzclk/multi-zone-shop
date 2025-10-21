import HeroSection from "@/sections/HeroSection";
import BrandsSection from "@/sections/BrandsSection";
import ProductGridSection from "@/sections/ProductGridSection";
import { getProducts } from "./lib/product";

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
