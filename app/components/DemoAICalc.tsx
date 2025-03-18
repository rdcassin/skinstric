"use client";

import { useDemoStore } from "@/store/use-demo-store";
import { useEffect, useState } from "react";

interface DemoAICalcProps {
  races: Record<string, number>;
  ages: Record<string, number>;
  genders: Record<string, number>;
}

const DemoAICalc = ({ races, ages, genders }: DemoAICalcProps) => {
  const {
    raceProp,
    ageProp,
    genderProp,
    tSelRace,
    setTSelRace,
    tSelAge,
    setTSelAge,
    tSelGender,
    setTSelGender,
  } = useDemoStore();
  const [title, setTitle] = useState<string>("RACE");
  const [propDisplay, setPropDisplay] = useState(races);

  const handleSelection = (key: string, percentage: number) => {
    if (raceProp) {
      setTSelRace(key, percentage);
    } else if (ageProp) {
      setTSelAge(key, percentage);
    } else if (genderProp) {
      setTSelGender(key, percentage);
    }
  };

  useEffect(() => {
    if (raceProp) {
      setTitle("RACE");
      setPropDisplay(races);
    } else if (ageProp) {
      setTitle("AGE");
      setPropDisplay(ages);
    } else if (genderProp) {
      setTitle("GENDER");
      setPropDisplay(genders);
    }
  }, [raceProp, ageProp, genderProp]);

  return (
    <>
      <div className="flex flex-row justify-between font-medium w-full h-12 p-4">
        <p>{title}</p>
        <p>A.I. CONFIDENCE</p>
      </div>
      {Object.entries(propDisplay).map(([key, percentage]) => (
        <label
          key={key}
          className={`flex justify-between h-12 p-4 cursor-pointer w-full ${
            key === tSelRace || key === tSelAge || key === tSelGender
              ? "bg-[#1A1B1C] text-[#FCFCFC]"
              : "hover:bg-[#E1E1E2]"
          }`}
        >
          <div className="flex items-center gap-x-4">
            <input
              type="radio"
              checked={
                key === tSelRace || key === tSelAge || key === tSelGender
              }
              onChange={() => handleSelection(key, percentage)}
              className="sr-only peer"
            />
            <span
              className={`w-2 h-2 transform rotate-45 border ${
                key === tSelRace || key === tSelAge || key === tSelGender
                  ? "bg-[#FCFCFC] border-[#FCFCFC]"
                  : "peer-checked:bg-[#FCFCFC] peer-checked:border-[#FCFCFC]"
              }`}
            ></span>
            {key
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </div>
          <p>{`${Math.round(percentage * 100)} %`}</p>
        </label>
      ))}
    </>
  );
};

export default DemoAICalc;
