import BannerSlider from "@/components/BannerSlider";
import ProductCategory from "@/components/product/ProductCategory";
import { PRODUCT_CATEGORY } from "@/lib/consts";
import { prisma } from "@/lib/db/prisma";

export const revalidate = 0;
export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });

  return (
    <div>
      <BannerSlider />
      <div className="py-4">
        {PRODUCT_CATEGORY.map((c) => (
          <div key={c}>
            <div className="content-container">
              <ProductCategory
                name={c}
                products={products.filter((p) => p.category === c)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
