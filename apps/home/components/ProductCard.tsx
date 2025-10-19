import Link from "next/link";
import Image from "next/image";
import RatingStars from "@/components/RatingStars";

export type ProductCardProps = {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
    rating?: { rate: number; count: number };
  };
  className?: string;
};

export default function ProductCard({
  product: p,
  className = "",
}: ProductCardProps) {
  return (
    <Link href={`/products/${p.id}`} className={`block group ${className}`}>
      <div className="relative w-full aspect-square bg-paper rounded-[20px] overflow-hidden mb-2 md:mb-3 lg:mb-4">
        <Image
          src={p.image}
          alt={p.title}
          fill
          className="object-contain p-6 lg:p-8 group-hover:scale-110 duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          sizes="(min-width:1024px)33vw,(min-width:640px)50vw,100vw"
        />
      </div>

      <div className="text-base md:text-lg lg:text-xl font-bold line-clamp-2 h-[2lh] mb-1.5 lg:mb-2">
        {p.title}
      </div>

      <RatingStars
        value={p.rating?.rate ?? 0}
        count={p.rating?.count}
        sizeClass="size-3.5 md:size-4 lg:size-4.5"
        colorClass="text-[#FFC633]"
        showNumber={true}
      />

      <div className="text-lg md:text-xl lg:text-2xl font-bold mt-1.5 lg:mt-2">
        ${p.price}
      </div>
    </Link>
  );
}
