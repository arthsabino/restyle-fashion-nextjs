import AddProductForm from "@/components/AddProductForm";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Add Product - ReStyle Fashion",
};
export default function AddProductPage() {
  return (
    <div>
      <h1 className="text-lg mb-3 font-bold">Add Product</h1>
      <AddProductForm />
    </div>
  );
}
