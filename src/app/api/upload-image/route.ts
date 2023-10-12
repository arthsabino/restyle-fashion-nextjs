import { CreateProductPayload, createProduct } from "@/lib/db/product";
import { Product } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body: CreateProductPayload = await request.json();
  const response: Product = await createProduct(body);

  return NextResponse.json({ response }, { status: 200 });
}
