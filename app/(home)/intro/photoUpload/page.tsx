"use client";

import { useRouter } from "next/navigation";
import LogoBar from "../../../components/LogoBar";
import {
  PhotoUploadInput,
  PhotoCameraInput,
} from "../../../components/PhotoUploadInput";
import Bar from "@/app/components/Bar";
import { BarProps } from "@/app/components/types";
import Subtitle from "@/app/components/Subtitle";
import { useNextButtonOpacityStore } from "@/store/use-nextButtonOpacity-store";
import { useImageSourceStore } from "@/store/use-imageSource-store";
import { usePreviewStore } from "@/store/use-preview-store";

const PhotoUpload = () => {
  const { selectCapture, selectUpload, setSelectUpload, setFadeCapture, setFadeUpload } = useImageSourceStore();
  const { previewUrl } = usePreviewStore();
  const { setOpacity } = useNextButtonOpacityStore();
  const router = useRouter();
  const barComps: BarProps = {
    subComponent1: {
      label: "BACK",
      prevAction: () => {
        setOpacity(true);
        router.push("/intro");
      },
    },
    subComponent3: {
      label: "PROCEED",
      nextAction: () => {
        if (previewUrl) {
          setFadeCapture(true);
          setSelectUpload(true);
        }
        router.push("/intro/photoUpload/imagePreview");
      },
    },
  };

  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <LogoBar section="INTRO" />
        <Subtitle text="TO START ANALYSIS" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-x-90">
        <PhotoCameraInput size={400} />
        <PhotoUploadInput size={400} />
      </div>
      <Bar
        subComponent1={barComps.subComponent1}
        subComponent3={barComps.subComponent3}
      />
    </div>
  );
};

export default PhotoUpload;
