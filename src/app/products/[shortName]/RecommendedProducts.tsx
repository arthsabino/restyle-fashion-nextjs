import NoData from "@/components/NoData";
import ProductCard from "@/components/product/ProductCard";
import { prisma } from "@/lib/db/prisma";

interface RecommendedProductsProps {
  currentProductId: string;
  category: string;
}
export default async function RecommendedProducts({
  currentProductId,
  category,
}: RecommendedProductsProps) {
  const products = await prisma.product.findMany({
    take: 5,
    where: {
      category,
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
