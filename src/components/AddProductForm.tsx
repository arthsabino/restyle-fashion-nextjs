"use client";

import { getSignature } from "@/lib/_action";
import { clientEnv } from "@/lib/clientEnv";
import axios from "axios";
import { useRouter } from "next/navigation";
import FormSubmitButton from "./FormSubmitButton";

interface AddProductFormProps {
  productTags: string[];
  productCategory: string[];
}

export default function AddProductForm({
  productTags,
  productCategory,
}: AddProductFormProps) {
  const { push } = useRouter();
  async function addProduct(formData: FormData) {
    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const tag = formData.get("tag")?.toString();
    const category = formData.get("category")?.toString();
    const stock = Number(formData.get("stock") || 0);
    const imgFile = formData.get("imgFile") as unknown as File;
    const price = Number(formData.get("price") || 0);

    if (!name || !description || !imgFile || !category || !price) {
      throw Error("Missing required fields");
    }

    const shortName = name.toLowerCase().replaceAll(/\s/g, "-");
    const { timestamp, signature } = await getSignature();
    const clFormData = new FormData();
    clFormData.append("file", imgFile);
    clFormData.append("upload_preset", "rs-images-preset");
    clFormData.append("api_key", clientEnv.NEXT_PUBLIC_CLOUDINARY_API_KEY);
    clFormData.append("folder", "rs-images");
    clFormData.append("timestamp", timestamp?.toString());
    clFormData.append("signature", signature);
    try {
      const res = await axios.post(
        clientEnv.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL,
        clFormData
      );
      if (res && res.data && res.status === 200) {
        const p = await axios.post("/api/create-product", {
          name,
          shortName,
          description,
          stock,
          imageUrl: res.data.url,
          category: category.toLowerCase(),
          price,
          tag,
        });
        push("/");
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <form action={addProduct}>
      <input
        required
        name="name"
        placeholder="Name..."
        className="input input-bordered w-full max-xs mb-3"
      />
      <textarea
        required
        name="description"
        placeholder="Description"
        className="textarea textarea-bordered mb-3 w-full"
      />
      <div className="flex items-center gap-x-3 mb-3">
        <input
          required
          name="price"
          placeholder="Price"
          type="number"
          className="input input-bordered w-full max-xs"
        />
        <input
          required
          name="stock"
          placeholder="Stock"
          type="number"
          className="input input-bordered w-full max-xs"
        />
      </div>
      <div>
        <select
          required
          className="select select-bordered w-full mb-3"
          name="category"
          defaultValue={""}
        >
          <option disabled value={""}>
            Category
          </option>
          {productCategory.map((categ) => (
            <option key={categ} value={categ}>
              {categ}
            </option>
          ))}
        </select>
      </div>
      <select
        className="select select-bordered w-full mb-3"
        defaultValue={""}
        name="tag"
      >
        <option disabled value={""}>
          Tags
        </option>
        {productTags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
      <input
        required
        name="imgFile"
        placeholder="Image File"
        type="file"
        className="file-input file-input-bordered w-full mb-3"
      />
      <FormSubmitButton className="btn-secondary btn-block">
        Add Product
      </FormSubmitButton>
    </form>
  );
}
