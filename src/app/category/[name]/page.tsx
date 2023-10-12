import ProductCard from "@/components/product/ProductCard";
import { prisma } from "@/lib/db/prisma";
import { Product } from "@prisma/client";
import { Metadata } from "next";
import PageTitle from "./title";

interface CategoryPageProps {
  params: { name: string };
}

export const revalidate = 0;
export function generateMetadata({
  params: { name },
}: CategoryPageProps): Metadata {
  return {
    title: `${name[0].toUpperCase()}${name.substring(
      1,
      name.length
    )} - ReStyle Fashion`,
  };
}
async function getProductsByCategory(name: string): Promise<Product[]> {
  const res = await prisma.product.findMany({
    where: {
      category: name,
    },
  });
  return res;
}

export default async function CategoryPage({
  params: { name },
}: CategoryPageProps) {
  const products = await getProductsByCategory(name);
  return products && products.length > 0 ? (
    <div className="content-container py-4">
      <PageTitle title={name} />
      <div className="py-4 flex items-center"></div>
      <div className="product-container">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  ) : (
    <div className="h-screen flex items-center justify-center">No data...</div>
  );
}
