"use client";

import Bar from "@/app/components/Bar";
import ImageCaptureAction from "@/app/components/ImageCaptureAction";
import LogoBar from "@/app/components/LogoBar";
import { BarProps } from "@/app/components/types";
import { usePreviewStore } from "@/store/use-preview-store";
import { useUserInfoStore } from "@/store/use-userInfo-store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ImagePreviewPage = () => {
  const { previewUrl, setPreviewUrl } = usePreviewStore();
  const { userImage, setUserImage, userData, setUserData } = useUserInfoStore();
  const router = useRouter();
  const barComps: BarProps = {
    subComponent1: {
      label: "BACK",
      prevAction: () => {
        router.push("/intro/photoUpload");
      },
      invertImage: true,
    },
    subComponent2: {
      line1: "TO GET BETTER RESULTS MAKE SURE TO HAVE",
      line2: "◇ NEUTRAL EXPRESSION ◇ FRONTAL POSE ◇ ADEQUATE LIGHTING",
    },
    subComponent3: {
      label: "PROCEED",
      nextAction: () => postPicture(),
      invertImage: true,
    },
  };

  const postPicture = async () => {
    if (!userImage) return;

    try {
      const { data } = await axios.post(
        "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
        {
          image: userImage
        }
      );
      setUserData(data.data);
    } catch (error) {
      setUserImage(null);
      setPreviewUrl(null);
      console.error("Upload error:", error);
    }
  };

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <>
      <div className="w-screen h-screen text-[#FCFCFC] flex flex-col justify-between">
        <LogoBar />
        {previewUrl ? (
          <div className="absolute w-screen h-screen flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
            <p className="absolute z-10 text-center text-[#FCFCFC] text-sm font-normal top-1/4">
              GREAT SHOT!
            </p>
            <img src={previewUrl} alt="Preview" className="w-screen h-screen" />
          </div>
        ) : (
          <ImageCaptureAction />
        )}
        <Bar
          subComponent1={barComps.subComponent1}
          subComponent2={barComps.subComponent2}
          subComponent3={barComps.subComponent3}
        />
      </div>
    </>
  );
};

export default ImagePreviewPage;
