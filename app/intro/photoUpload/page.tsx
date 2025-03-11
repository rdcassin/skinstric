"use client";

import { useRouter } from "next/navigation";
import LogoBar from "../../components/LogoBar";
import {
  PhotoUploadInput,
  PhotoCameraInput,
} from "./components/PhotoUploadInput";
import Bar from "@/app/components/Bar";
import { useOpacityStore } from "@/store/use-nextButtonOpacity-store";
import { useEffect } from "react";
import { BarProps } from "@/app/components/types";
import Subtitle from "@/app/components/Subtitle";

const PhotoUpload = () => {
  const { setOpacity } = useOpacityStore();

  const router = useRouter();
  const barComps: BarProps = {
    subComponent1: {
      label: "BACK",
      prevAction: () => {
        router.push("/intro/");
      },
    },
    subComponent3: {
      label: "PROCEED",
    },
  };

  useEffect(() => {
    setOpacity(true);
  }, []);

  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <LogoBar />
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
