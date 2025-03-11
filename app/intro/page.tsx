"use client";

import { useOpacityStore } from "@/store/use-nextButtonOpacity-store";
import Bar from "../components/Bar";
import LogoBar from "../components/LogoBar";
import IntroInput from "./components/IntroInput";
import { useRouter } from "next/navigation";
import { BarProps } from "../components/types";
import { useEffect } from "react";
import Subtitle from "../components/Subtitle";
import { useIntroStore } from "@/store/use-intro-store";

const IntroPage = () => {
  const { validName, setValidName, validLocation, setValidLocation } = useIntroStore();
  const { setOpacity } = useOpacityStore();

  const router = useRouter();
  const barComps: BarProps = {
    subComponent1: {
      label: "BACK",
      prevAction: () => {
        if (validName && validLocation) {
          setValidLocation(false);
        } else if (validName) {
          setValidName(false);
        } else {
          router.push("/");
        }
      },
    },
    subComponent3: {
      label: "PROCEED",
      nextAction: () => {
        router.push("/intro/photoUpload");
      },
    },
  };

  useEffect(() => {
    setOpacity(true);
    if (validLocation) {
      setOpacity(false);
    }
  }, [validLocation]);

  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <LogoBar />
        <Subtitle text="TO START ANALYSIS" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <IntroInput size={600} />
      </div>
      <Bar
        subComponent1={barComps.subComponent1}
        subComponent3={barComps.subComponent3}
      />
    </div>
  );
};
export default IntroPage;
