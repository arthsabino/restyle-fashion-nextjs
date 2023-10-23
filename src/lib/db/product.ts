import { Category, Prisma, Product } from "@prisma/client";
import { prisma } from "./prisma";

export type ProductWithTags = Prisma.ProductGetPayload<{
  include: { tag: true };
}>;

export type CreateProductPayload = {
  name: string;
  shortName: string;
  description: string;
  imageUrl: string;
  stock: number;
  price: number;
  category: string;
  tag: string;
};
export async function createProduct(
  product: CreateProductPayload
): Promise<Product> {
  const {
    name,
    description,
    imageUrl,
    category,
    stock,
    price,
    shortName,
    tag,
  } = product;
  const categoryFromDB = (await prisma.category.findFirst({
    where: {
      name: {
        equals: category,
        mode: "insensitive",
      },
    },
  })) as Category;
  const tagFromDB = await prisma.tag.findFirst({
    where: {
      name: {
        equals: tag,
        mode: "insensitive",
      },
    },
  });
  return await prisma.product.create({
    data: {
      name,
      shortName,
      description,
      imageUrl,
      stock,
      price,
      categoryId: categoryFromDB?.id ?? null,
      tagId: tagFromDB?.id ?? null,
    },
  });
}

export async function getCategoryById(id: string): Promise<Category> {
  const category = (await prisma.category.findUnique({
    where: {
      id,
    },
  })) as Category;

  return category;
}

export async function getCategoryByName(name: string): Promise<Category> {
  const category = (await prisma.category.findFirst({
    where: {
      name: {
        equals: name,
        mode: "insensitive",
      },
    },
  })) as Category;

  return category;
}

export async function getAllCategory() {
  const category = await prisma.category.findMany();
  return category;
}

export async function getAllTags() {
  const tags = await prisma.tag.findMany();
  return tags;
}