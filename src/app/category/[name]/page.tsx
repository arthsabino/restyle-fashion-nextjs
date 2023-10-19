import PaginationBar from "@/components/PaginationBar";
import ProductCard from "@/components/product/ProductCard";
import { prisma } from "@/lib/db/prisma";
import { getCategoryByName } from "@/lib/db/product";
import { Product } from "@prisma/client";
import { Metadata } from "next";
import PageTitle from "./title";

interface CategoryPageProps {
  searchParams: { page: string };
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
  const category = await getCategoryByName(name);
  const res = await prisma.product.findMany({
    where: {
      categoryId: category.id,
    },
  });
  return res;
}

export default async function CategoryPage({
  searchParams: { page = "1" },
  params: { name },
}: CategoryPageProps) {
  const products = await getProductsByCategory(name);
  const currentPage = parseInt(page);
  const pageSize = 8;
  const totalItemCount = products.length;
  const totalPages = Math.ceil(totalItemCount / pageSize);
  const category = await getCategoryByName(name);
  const paginateProducts =
    totalItemCount > 0
      ? await prisma.product.findMany({
          where: {
            categoryId: category.id,
          },
          include: { tag: true },
          skip: (currentPage - 1) * pageSize,
          take: pageSize,
        })
      : [];
  return products && totalItemCount > 0 ? (
    <div className="content-container py-4 flex flex-col items-center">
      <PageTitle title={name} />
      <div className="py-4 flex items-center"></div>
      <div className="product-container">
        {paginateProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="mt-8">
          <PaginationBar currentPage={currentPage} totalPages={totalPages} />
        </div>
      )}
    </div>
  ) : (
    <div className="h-screen flex items-center justify-center">No data...</div>
  );
}
