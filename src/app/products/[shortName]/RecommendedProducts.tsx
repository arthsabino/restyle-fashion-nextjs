import NoData from "@/components/NoData";
import ProductCard from "@/components/product/ProductCard";
import { prisma } from "@/lib/db/prisma";
import { getCategoryById } from "@/lib/db/product";

interface RecommendedProductsProps {
  currentProductId: string;
  categoryId: string;
}
export default async function RecommendedProducts({
  currentProductId,
  categoryId,
}: RecommendedProductsProps) {
  const prodCategory = await getCategoryById(categoryId);
  const products = await prisma.product.findMany({
    take: 5,
    include: { tag: true },
    where: {
      categoryId: prodCategory.id,
      NOT: {
        id: currentProductId,
      },
    },
  });
  return (
    <>
      {products.length > 0 ? (
        <div className="grid grid-cols-5 py-4 gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} hideBtn />
          ))}
        </div>
      ) : (
        <NoData />
      )}
    </>
  );
}
