import AddProductForm from "@/components/AddProductForm";
import { getAllCategory, getAllTags } from "@/lib/db/product";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Add Product - ReStyle Fashion",
};
export default async function AddProductPage() {
  const category = await getAllCategory();
  const tags = await getAllTags();
  return (
    <div className="bg-base-100 flex items-center justify-center py-8">
      <div className="content-container">
        <h1 className="text-lg mb-3 font-bold">Add Product</h1>
        <AddProductForm
          productCategory={category.map((c) => c.name)}
          productTags={tags.map((t) => t.name)}
        />
      </div>
    </div>
  );
}
