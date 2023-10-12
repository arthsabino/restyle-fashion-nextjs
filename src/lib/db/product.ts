import { Product } from "@prisma/client";
import { prisma } from "./prisma";

export type CreateProductPayload = {
  name: string;
  shortName: string;
  description: string;
  imageUrl: string;
  price: number;
  category: string;
};
export async function createProduct(
  product: CreateProductPayload
): Promise<Product> {
  const { name, description, imageUrl, category, price, shortName } = product;
  return await prisma.product.create({
    data: {
      name,
      shortName,
      description,
      imageUrl,
      price,
      category,
    },
  });
}