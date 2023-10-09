import BannerSlider from "@/components/BannerSlider";
import ProductCategory from "@/components/product/ProductCategory";
import { prisma } from "@/lib/db/prisma";
export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });
  return (
    <div>
      <BannerSlider />
      <div className="content-container py-4">
        <ProductCategory name="Dresses" products={products} />
      </div>
    </div>
  );
}
