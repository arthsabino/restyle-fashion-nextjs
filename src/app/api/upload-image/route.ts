import { prisma } from "@/lib/db/prisma";
import { Product } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body: Product = await request.json();
  const { name, description, imageUrl, category, price, shortName } = body;
  const response = await prisma.product.create({
    data: {
      name,
      shortName,
      description,
      imageUrl,
      price,
      category,
    },
  });

  return NextResponse.json({ response }, { status: 200 });
}
