"use client";

import AnalysisDiamond from "@/app/components/AnalysisDiamond";
import Bar from "@/app/components/Bar";
import { DiagonalDottedDiv } from "@/app/components/DiagonalDottedDiv";
import LogoBar from "@/app/components/LogoBar";
import Subtitle from "@/app/components/Subtitle";
import { BarProps } from "@/app/components/types";
import { useAnalysisAttributeStore } from "@/store/use-analysisAttribute-store copy";
import { useNextButtonOpacityStore } from "@/store/use-nextButtonOpacity-store";
import { useUserInfoStore } from "@/store/use-userInfo-store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AnalysisPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { userData, setUserData, userImage } = useUserInfoStore();
  const { demo, setDemo, cosCon, setCosCon, skinDet, setSkinDet, weather, setWeather } = useAnalysisAttributeStore();
  const { setOpacity } = useNextButtonOpacityStore();
  const router = useRouter();
  let choseTitle = "";
  let choseLine1 = "";
  let choseLine2 = "";
  const barComps: BarProps = {
    subComponent1: {
      label: "BACK",
      prevAction: () => {
        router.push("/intro/photoUpload/imagePreview");
      },
    },
    subComponent2: {
      line1: "If A.I. estimate is wrong, select the correct one.",
      grey: demo || cosCon || weather || skinDet,
    },
    subComponent3: {
      label: "GET SUMMARY",
      nextAction: () => {},
    },
  };

  const postPicture = async () => {
    setLoading(true);
    if (!userImage) return;

    try {
      const { data } = await axios.post(
        "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
        {
          image: userImage,
        }
      );
      setUserData(data.data);
      setLoading(false);
      console.log(data.data);
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  if (demo) {
    choseTitle = "DEMOGRAPHICS";
    choseLine1 = "PREDICTED RACE & AGE";
    choseLine2 = "";
  } else if (cosCon) {
    choseTitle = "COSMETIC CONCERNS";
    choseLine1 = "TBD";
    choseLine2 = "";
  } else if (skinDet) {
    choseTitle = "SKIN DETAILS";
    choseLine1 = "TBD";
    choseLine2 = "";
  } else if (weather) {
    choseTitle = "WEATHER";
    choseLine1 = "TBD";
    choseLine2 = "";
  } else {
    choseTitle = "";
    choseLine1 = "A. I. HAS ESTIMATED THE FOLLOWING.";
    choseLine2 = "FIX ESTIMATED INFORMATION IF NEEDED."
  }

 

  if (demo) {
  } else if (cosCon) {
  } else if (skinDet) {
  } else if (weather) {
  } else {
  }

  const AnalysisLoading = () => {
    return (
      <div className="w-screen h-screen relative flex items-center justify-center">
        <DiagonalDottedDiv
          innerDiamondSize={400}
          incrementSize={100}
          rotateDegrees={15}
        >
          <p className="font-semibold tracking-[-0.02em]">
            PREPARING YOUR ANALYSIS...
          </p>
        </DiagonalDottedDiv>
      </div>
    );
  };

  useEffect(() => {
    // postPicture();
    setOpacity(true);
  }, []);

  return (
    <>
      {false ? (
        <AnalysisLoading />
      ) : (
        <div className="flex flex-col justify-between h-screen">
          <div>
            <LogoBar section="INTRO" />
            <Subtitle
              text="A. I. ANALYSIS"
              title={choseTitle}
              line1={choseLine1}
              line2={choseLine2}
            />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <AnalysisDiamond size={600} />
          </div>
          <Bar
            subComponent1={barComps.subComponent1}
            subComponent2={(demo || cosCon || skinDet || weather) && barComps.subComponent2}
            subComponent3={barComps.subComponent3}
          />
        </div>
      )}
    </>
  );
};

export default AnalysisPage;
