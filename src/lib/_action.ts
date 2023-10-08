"use server";

import { env } from "@/env";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
});

export async function getSignature() {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const signature = cloudinary.utils.api_sign_request(
    { timestamp, folder: "rs-images", upload_preset: "rs-images-preset" },
    env.CLOUDINARY_API_SECRET
  );

  return { timestamp, signature };
}

export async function uploadImage(imgFile: string) {
  return cloudinary.uploader.upload(imgFile, { resource_type: "image" });
}
