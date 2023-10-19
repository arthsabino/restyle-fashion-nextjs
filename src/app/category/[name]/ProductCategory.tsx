import NoData from "@/components/NoData";
import ProductCard from "@/components/product/ProductCard";
import { prisma } from "@/lib/db/prisma";
import { getCategoryByName } from "@/lib/db/product";
import { twMerge } from "tailwind-merge";

interface ProductCategoryProps {
  category: string;
  className?: string;
}
export default async function ProductCategory({
  category,
  className,
}: ProductCategoryProps) {
  const prodCategory = await getCategoryByName(category);
  const products = await prisma.product.findMany({
    where: {
      categoryId: prodCategory.id,
    },
    include: { tag: true },
    take: 3,
  });
  return (
    <div className={twMerge("py-4 relative w-full", className)}>
      <h3 className="font-semibold text-4xl dancing-script">{category}</h3>
      {products && products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-2">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <NoData />
      )}
    </div>
  );
}
