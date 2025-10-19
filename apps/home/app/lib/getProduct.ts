import type { Product } from "@repo/types";
import { notFound } from "next/navigation";

export async function getProduct(id: string): Promise<Product> {
  const url = `https://fakestoreapi.com/products/${id}`;
  const res = await fetch(url, {
    cache: "no-store",
    headers: { accept: "application/json" },
  });

  const raw = await res.text();

  if (!res.ok) {
    throw new Error(
      `Ürün alınamadı (HTTP ${res.status}). Örnek gövde: ${raw.slice(0, 200)}`
    );
  }
  if (!raw) {
    return notFound();
  }

  try {
    return JSON.parse(raw) as Product;
  } catch (e: any) {
    throw new Error(`Geçersiz JSON: ${e.message}. Örnek: ${raw.slice(0, 200)}`);
  }
}
