import { Product } from "@repo/types";
import { redirect } from "next/navigation";

const API = "https://fakestoreapi.com/products";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(API, {
    next: { revalidate: 60, tags: ["products"] },
    headers: { accept: "application/json" },
  });

  const raw = await res.text();
  if (!res.ok) {
    throw new Error(
      `Ürünler alınamadı (HTTP ${res.status}): ${raw.slice(0, 200)}`
    );
  }
  if (!raw) {
    redirect("/");
  }
  try {
    return JSON.parse(raw);
  } catch (e: any) {
    throw new Error(
      `Geçersiz JSON: ${e.message}. İlk 200 byte: ${raw.slice(0, 200)}`
    );
  }
}
