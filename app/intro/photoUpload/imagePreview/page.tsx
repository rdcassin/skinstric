"use client";

import Bar from "@/app/components/Bar";
import LogoBar from "@/app/components/LogoBar";
import { BarProps } from "@/app/components/types";
import { usePreviewStore } from "@/store/use-preview-store";
import { useRouter } from "next/navigation";

const ImagePreviewPage = () => {
  const { previewUrl } = usePreviewStore();
  const router = useRouter();
  const barComps: BarProps = {
    subComponent1: {
      label: "BACK",
      prevAction: () => {router.push("/intro/photoUpload")},
      invertImage: true,
    },
    subComponent2: {
      line1: "TO GET BETTER RESULTS MAKE SURE TO HAVE",
      line2: "◇ NEUTRAL EXPRESSION ◇ FRONTAL POSE ◇ ADEQUATE LIGHTING",
    },
    subComponent3: {
      label: "PROCEED",
      nextAction: () => console.log("Proceed"),
      invertImage: true,
    }
  };

  return (
    <div className="w-screen h-screen bg-[#CDCECC] text-[#FCFCFC] flex flex-col justify-between">
      <LogoBar />
      {previewUrl && (
        <div className="absolute flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
          <p className="absolute z-10 text-center text-[#FCFCFC] text-sm font-normal top-1/4">
            GREAT SHOT!
          </p>
          <img src={previewUrl} alt="Preview" />
        </div>
      )}
      <div className="">
        <Bar 
        subComponent1={barComps.subComponent1}
        subComponent2={barComps.subComponent2}
        subComponent3={barComps.subComponent3}
        />
      </div>
    </div>
  );
};

export default ImagePreviewPage;
