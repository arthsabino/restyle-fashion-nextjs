import BannerSlider from "@/components/BannerSlider";
import { getAllCategory } from "@/lib/db/product";
import ProductCategory from "./category/[name]/ProductCategory";

export const revalidate = 0;
export default async function Home() {
  const category = await getAllCategory();
  return (
    <div>
      <BannerSlider />
      <div className="py-4">
        <h2 className="text-center pt-4">Our Products</h2>
        {category.map((c) => (
          <div key={c.id}>
            <div className="content-container">
              <ProductCategory category={c.name} />
            </div>
          </div>
        ))}
      </div>
      <div className="py-4 mt-8 pb-10 bg-base-200">
        <div className="content-container text-center">
          <h2 className="text-center pt-4">About us</h2>
          <h4 className="text-2xl pt-8">We are ReStyle Fashion</h4>
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
