import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const productId = searchParams.get("productId");

  // TODO: Burada gerçek session/store’a ekleme yap.
  console.log("ADD TO CART productId:", productId);

  // Basitçe /cart’a yönlendir:
  return NextResponse.redirect(new URL("/cart", request.url));
}
