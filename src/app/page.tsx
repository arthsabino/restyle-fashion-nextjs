import ProductCategory from "@/app/category/[name]/ProductCategory";
import BannerSlider from "@/components/BannerSlider";
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
        <h3 className="text-center font-semibold text-4xl pt-4">
          Our Products
        </h3>
        {PRODUCT_CATEGORY.map((c) => (
          <div key={c}>
            <div className="content-container">
              <ProductCategory
                name={c}
                products={products.filter(
                  (p) => p.category === c.toLowerCase()
                )}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="py-4 mt-8 pb-10 bg-base-200">
        <div className="content-container text-center">
          <h3 className="text-center font-semibold text-4xl pt-4">About us</h3>
          <h3 className="text-2xl pt-8">We are ReStyle Fashion</h3>
          <p className="mt-6 sm:max-w-[70%] mx-auto">
            Welcome to ReStyle Fashion, your go-to thrift shop for stylish and
            affordable dresses, skirts, and shorts for women in the Philippines.
            At ReStyle Fashion, we believe that fashion should not only be
            accessible but also sustainable, and that&apos;s why we&apos;re here
            to redefine your shopping experience.
          </p>
        </div>
      </div>
    </div>
  );
}
