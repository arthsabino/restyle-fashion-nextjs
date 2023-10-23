import PaginationBar from "@/components/PaginationBar";
import ProductCard from "@/components/product/ProductCard";
import { prisma } from "@/lib/db/prisma";
import { Metadata } from "next";

interface SearchPageProps {
  searchParams: { query: string; page: string };
}

export async function generateMetadata({
  searchParams: { query, page = "1" },
}: SearchPageProps): Promise<Metadata> {
  return {
    title: `Search:${query} - Page ${page}`,
  };
}

export default async function SearchPage({
  searchParams: { query, page = "1" },
}: SearchPageProps) {
  const products = await prisma.product.findMany({
    where: {
      OR: [
        {
          shortName: {
            contains: query,
            mode: "insensitive",
          },
          description: {
            contains: query,
            mode: "insensitive",
          },
          name: {
            contains: query,
            mode: "insensitive",
          },
        },
      ],
    },
  });
  const currentPage = parseInt(page);
  const pageSize = 8;
  const totalItemCount = products.length;
  const totalPages = Math.ceil(totalItemCount / pageSize);
  const paginateProducts =
    totalItemCount > 0
      ? await prisma.product.findMany({
          where: {
            OR: [
              {
                shortName: {
                  contains: query,
                  mode: "insensitive",
                },
                description: {
                  contains: query,
                  mode: "insensitive",
                },
                name: {
                  contains: query,
                  mode: "insensitive",
                },
              },
            ],
          },
          include: { tag: true },
          skip: (currentPage - 1) * pageSize,
          take: pageSize,
        })
      : [];
  return products && totalItemCount > 0 ? (
    <div className="content-container py-8">
      <h2 className="text-center">Search results for: &apos;{query}&apos;</h2>
      <div className="product-container py-4">
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
    <div className="h-screen flex items-center justify-center">
      No results found...
    </div>
  );
}
