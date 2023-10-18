import { CreateProductPayload, createProduct } from "@/lib/db/product";
import { Product } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body: CreateProductPayload = await request.json();
  let response: Product | null = null;
  for (let i = 0; i < 50; i++) {
    response = await createProduct({ ...body, shortName: body.shortName + i });
  }
  return NextResponse.json({ response }, { status: 200 });
}
