import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating?: { rate: number; count: number };
};

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Ürün bulunamadı");
  return res.json();
}

type Params = Promise<{ id: string }>;

export default async function ProductPage({ params }: { params: Params }) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="relative w-full aspect-[3/2]">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain rounded-2xl p-6"
          sizes="(min-width:768px)50vw,100vw"
        />
      </div>
      <div>
        <h1 className="text-5xl font-display">{product.title}</h1>
        <p className="mt-2 text-lg text-danger">${product.price}</p>
        <p className="mt-4 text-sm opacity-80">{product.description}</p>

        <div className="mt-6 flex gap-3">
          <AddToCartButton
            product={{
              id: product.id,
              title: product.title,
              price: product.price,
              image: product.image,
              description: product.description,
              category: product.category,
              rating: product.rating,
            }}
          />
          <a
            href="/cart"
            className="inline-flex items-center px-4 py-2 rounded-2xl hover:bg-black/5"
          >
            Sepete Git
          </a>
        </div>
      </div>
    </div>
  );
}
