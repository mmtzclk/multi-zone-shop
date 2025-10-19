import Image from "next/image";
import RatingStars from "@/components/RatingStars";
import ProductActions from "@/components/ProductActions";
import ProductGridSection from "@/sections/ProductGridSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getProducts } from "@/app/lib/product";
import { getProduct } from "@/app/lib/getProduct";

type Params = Promise<{ id: string }>;

export default async function ProductPage({ params }: { params: Params }) {
  const { id } = await params;
  const product = await getProduct(id);
  const products = await getProducts();

  return (
    <div className="flex flex-col ">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/products" },
          { label: product.category, href: "/products" },
          { label: product.title },
        ]}
      />

      <div className="flex flex-col md:flex-row gap-6 xl:gap-10 container-block">
        <div className="aspect-square md:max-w-80 lg:max-w-120 xl:max-w-150 w-full bg-paper rounded-[20px] relative h-fit">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-10"
            sizes="(min-width:768px)50vw,100vw"
            priority
          />
        </div>

        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-display mb-3 xl:mb-3.5">
            {product.title}
          </h1>

          <RatingStars
            value={product.rating?.rate ?? 0}
            count={product.rating?.count}
            sizeClass="size-4 lg:size-5 xl:size-6"
            textClass="text-sm xl:text-base text-black/60"
            colorClass="text-[#FFC633]"
            showNumber
          />

          <div className="mt-4 mb-5 font-bold text-3xl xl:text-4xl">
            ${product.price}
          </div>
          <p className="text-sm xl:text-base text-black/60">
            {product.description}
          </p>

          <ProductActions product={product} />
        </div>
      </div>
      <ProductGridSection
        title="YOU MIGHT ALSO LIKE"
        products={products}
        maxItems={4}
      />
    </div>
  );
}
