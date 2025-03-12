"use client";

import { useImageSourceStore } from "@/store/use-imageSource-store";
import { useRouter } from "next/navigation";
import { useState, ReactNode } from "react";

interface ImageCaptureOptionProps {
  children: ReactNode;
}

const ImageCaptureOption = ({ children }: ImageCaptureOptionProps) => {
  const [askPermissions, setAskPermissions] = useState<boolean>(false);
  const { setSelectCapture, setSelectUpload } = useImageSourceStore();
  const router = useRouter();

  const handleOnSelected = () => {
    setSelectCapture(true);
    setSelectUpload(false);
    setAskPermissions(true);
  };

  const handleDeny = () => {
    setSelectUpload(true);
    setAskPermissions(false);
  };

  const handleAllow = () => {
    router.push("/intro/photoUpload/imagePreview");
  };

  return (
    <>
      <div className="cursor-pointer" onClick={handleOnSelected}>
        {children}
      </div>
      {askPermissions && (
        <div className="absolute top-3/8 left-3/4 min-w-92">
          <div className="bg-[#1A1B1C] text-[#FCFCFC] font-semibold text-base pt-4 pr-10 pb-16 pl-4">
            ALLOW A.I. TO ACCESS YOUR CAMERA
          </div>
          <div className="bg-[#1A1B1C] text-[#FCFCFC] font-semibold text-sm flex flex-row justify-end items-center tracking-[-0.02em] border-t-1 border-[#FCFCFC] gap-x-2">
            <button className="py-2 px-4 cursor-pointer" onClick={handleDeny}>
              DENY
            </button>
            <button className="py-2 px-4 cursor-pointer" onClick={handleAllow}>
              ALLOW
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageCaptureOption;
