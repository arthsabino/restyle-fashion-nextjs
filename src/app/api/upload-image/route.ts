import { prisma } from "@/lib/db/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, description, imageUrl, category, price } = body;
  const response = await prisma.product.create({
    data: {
      name,
      description,
      imageUrl,
      price,
      category,
    },
  });

  return NextResponse.json({ response }, { status: 200 });
}
