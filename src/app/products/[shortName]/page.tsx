import ProductDetails from "@/app/products/[shortName]/ProductDetails";
import { prisma } from "@/lib/db/prisma";
import { Product } from "@prisma/client";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import ProductReview from "./ProductReviews";
import RecommendedProducts from "./RecommendedProducts";
import { incrementProductQuantity } from "./actions";

interface ProductPageProps {
  params: { shortName: string };
}
export const revalidate = 0;
async function getProduct(shortName: string) {
  const product: Product | null = await prisma.product.findUnique({
    where: { shortName },
  });
  if (!product) notFound();
  return product;
}

export async function generateMetadata({
  params: { shortName },
}: ProductPageProps): Promise<Metadata> {
  const product = await getProduct(shortName);
  return {
    title: `${product.name} - ReStyle Fashion`,
  };
}
export default async function ProductPage({
  params: { shortName },
}: ProductPageProps) {
  const product = await getProduct(shortName);
  return (
    <article className="content-container py-4 md:py-8 md:px-4 lg:px-16">
      <div className="flex md:flex-row flex-col gap-y-4 md:gap-x-8 md:items-start items-center">
        <div className="lg:px-12">
          <Image
            src={product.imageUrl}
            alt={product.name}
            height={450}
            width={500}
            className="object-cover rounded"
          />
        </div>
        <div className="w-full md:w-1/2">
          <ProductDetails
            product={product}
            incrementProductQuantity={incrementProductQuantity}
          />
          <div className="mt-12">
            <div className="divider before:bg-neutral after:bg-neutral">
              <span className="italic">Feedback & Reviews</span>
            </div>
            <ProductReview />
          </div>
        </div>
      </div>
      <div className="mt-16">
        <div className="divider before:bg-neutral after:bg-neutral">
          <span className="italic">Recommended Items</span>
        </div>
        <RecommendedProducts
          currentProductId={product.id}
          category={product.category}
        />
      </div>
    </article>
  );
}
