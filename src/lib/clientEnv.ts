import { z } from "zod";

const clientEnvSchema = z.object({
  NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL: z.string().min(1),
  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: z.string().min(1),
  NEXT_PUBLIC_CLOUDINARY_API_KEY: z.string().min(1),
});

export const clientEnv = clientEnvSchema.parse({
  NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL:
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL,
  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME:
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  NEXT_PUBLIC_CLOUDINARY_API_KEY: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
});
