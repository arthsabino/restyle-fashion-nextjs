"use client";

import { env } from "@/env";
import { getSignature } from "@/lib/_action";
import axios from "axios";
import { useRouter } from "next/navigation";
import FormSubmitButton from "./FormSubmitButton";

export default function AddProductForm() {
  const { push } = useRouter();
  async function addProduct(formData: FormData) {
    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const imgFile = formData.get("imgFile") as unknown as File;
    const price = Number(formData.get("price") || 0);

    if (!name || !description || !imgFile || !price) {
      throw Error("Missing required fields");
    }
    const { timestamp, signature } = await getSignature();
    const clFormData = new FormData();
    clFormData.append("file", imgFile);
    clFormData.append("upload_preset", "rs-images-preset");
    clFormData.append("api_key", env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
    clFormData.append("folder", "rs-images");
    clFormData.append("timestamp", timestamp?.toString());
    clFormData.append("signature", signature);
    try {
      const res = await axios.post(
        env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL,
        clFormData
      );
      if (res && res.data && res.status === 200) {
        const p = await axios.post("/api/upload-image", {
          name,
          description,
          imageUrl: res.data.url,
          price,
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
      <div className="flex items-center gap-x-3">
        <input
          required
          name="price"
          placeholder="Price"
          type="number"
          className="input input-bordered w-full max-xs mb-3"
        />
        <input
          required
          name="imgFile"
          placeholder="Image File"
          type="file"
          className="file-input file-input-bordered file-input-primary w-full max-w-xs mb-3"
        />
      </div>
      <FormSubmitButton className="btn-secondary btn-block">
        Add Product
      </FormSubmitButton>
    </form>
  );
}
