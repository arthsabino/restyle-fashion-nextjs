"use client";

import { svgs } from "@/components/util/SVGImages";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="flex items-center gap-4 btn-link"
    >
      <span className="h-4 w-4">{svgs.slider_arrow_left}</span>
      <span>Back</span>
    </button>
  );
}
