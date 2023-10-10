import ProductCard from "@/components/product/ProductCard";
import { prisma } from "@/lib/db/prisma";
import { Product } from "@prisma/client";

interface CategoryPageProps {
  params: { name: string };
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
    <div className="content-container">
      <h2 className="text-center font-semibold text-6xl dancing-script">
        {name}
      </h2>
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
