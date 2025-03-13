"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { usePreviewStore } from "@/store/use-preview-store";
import { useNextButtonOpacityStore } from "@/store/use-nextButtonOpacity-store";
import { useUserInfoStore } from "@/store/use-userInfo-store";
import { useImageSourceStore } from "@/store/use-imageSource-store";

interface ImageUploadOptionAndActionProps {
  children: ReactNode;
}

const ImageUploadOptionAndAction = ({ children }: ImageUploadOptionAndActionProps) => {
  const { setUserImage } = useUserInfoStore();
  const { setPreviewUrl } = usePreviewStore();
  const { setSelectUpload, setFadeCapture } = useImageSourceStore();
  const { setOpacity } = useNextButtonOpacityStore();
  const router = useRouter();

  const handleImageUpload = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        setUserImage(file);
        setOpacity(true);
        setSelectUpload(true);
        setFadeCapture(true);
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreviewUrl(e.target?.result as string);
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

export default ImageUploadOptionAndAction;
