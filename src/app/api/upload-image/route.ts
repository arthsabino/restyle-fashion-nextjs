import { prisma } from "@/lib/db/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, description, imageUrl, price } = body;
  const response = await prisma.product.create({
    data: {
      name,
      description,
      imageUrl,
      price,
    },
  });

  return NextResponse.json({ response }, { status: 200 });
}
