"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { usePreviewStore } from "@/store/use-preview-store";

interface ImageUploadProps {
  children: ReactNode;
}

const ImageUpload = ({ children }: ImageUploadProps) => {
  const { setPreviewUrl } = usePreviewStore();
  const router = useRouter();

  const handleImageUpload = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreviewUrl(e.target.result as string);
        };
        reader.readAsDataURL(file);
        router.push("/intro/photoUpload/imagePreview");
      } else {
        setPreviewUrl(null);
      }
    };

    input.click();
  };

  return (
    <div className="cursor-pointer" onClick={handleImageUpload}>
      {children}
    </div>
  );
};

export default ImageUpload;
