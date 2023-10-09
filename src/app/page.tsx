import BannerSlider from "@/components/BannerSlider";
import ProductCard from "@/components/product/ProductCard";
import { prisma } from "@/lib/db/prisma";
export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });
  return (
    <div>
      <BannerSlider />
      <div className="product-container py-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
