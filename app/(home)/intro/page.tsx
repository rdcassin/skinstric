"use client";

import { useNextButtonOpacityStore } from "@/store/use-nextButtonOpacity-store";
import Bar from "../../components/Bar";
import LogoBar from "../../components/LogoBar";
import UserInfoInput from "../../components/UserInfoInput";
import { useRouter } from "next/navigation";
import { BarProps } from "../../components/types";
import { useEffect } from "react";
import Subtitle from "../../components/Subtitle";
import { useUserInfoStore } from "@/store/use-userInfo-store";
import axios from "axios";

const IntroPage = () => {
  const {
    userName,
    setUserName,
    userLocation,
    setUserLocation,
    validName,
    setValidName,
    validLocation,
    setValidLocation,
  } = useUserInfoStore();
  const { setOpacity } = useNextButtonOpacityStore();

  const router = useRouter();
  const barComps: BarProps = {
    subComponent1: {
      label: "BACK",
      prevAction: () => {
        if (validName && validLocation) {
          setValidLocation(false);
          setUserLocation("");
          setOpacity(false);
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
        sendCustomerData();
        setOpacity(false);
        router.push("/intro/photoUpload");
      },
    },
  };

  const sendCustomerData = async () => {
    try {
      const { data } = await axios.post(
        "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne",
        {
          name: userName,
          location: userLocation,
        }
      );
      console.log(data.message); // What are the instructions for the success message?  Or should I just send an alert?
    } catch {
      alert("System error, please try again later.");
    }
  };

  useEffect(() => {
    if (validLocation) {
      setOpacity(true);
    }
  }, [validLocation]);

  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <LogoBar section="INTRO" />
        <Subtitle text="TO START ANALYSIS" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <UserInfoInput size={600} />
      </div>
      <Bar
        subComponent1={barComps.subComponent1}
        subComponent3={barComps.subComponent3}
      />
    </div>
  );
};
export default IntroPage;
