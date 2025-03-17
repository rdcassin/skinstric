"use client";

import { useDemoStore } from "@/store/use-demo-store";
import { useEffect, useState } from "react";

interface DemoAICalcProps {
  races: Record<string, number>;
  ages: Record<string, number>;
  genders: Record<string, number>;
}

const DemoAICalc = ({ races, ages, genders }: DemoAICalcProps) => {
  const { raceProp, ageProp, genderProp, setSelRace, setSelAge, setSelGender } =
    useDemoStore();
  const [title, setTitle] = useState<string>("RACE");
  const [propDisplay, setPropDisplay] = useState(races);
  const [selectedKey, setSelectedKey] = useState<string>("");

  const handleSelection = (key: string, percentage: number) => {
    setSelectedKey(key);
    if (raceProp) {
      setSelRace(key, percentage);
    } else if (ageProp) {
      setSelAge(key, percentage);
    } else if (genderProp) {
      setSelGender(key, percentage);
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
        <div
          key={key}
          className="flex justify-between h-12 p-4 hover:bg-[#E1E1E2] cursor-pointer"
        >
          <label className="relative cursor-pointer flex flex-row justify-center items-center gap-x-4">
            <input
              type="radio"
              value={selectedKey}
              checked={selectedKey === key}
              onChange={() => handleSelection(key, percentage)}
              className="sr-only peer"
            />
            <span className="w-2 h-2 peer-checked:bg-[#FCFCFC] transform rotate-45 border peer-checked:border-[#FCFCFC]"></span>
            {key
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
            <p>{`${Math.round(percentage * 100)} %`}</p>
          </label>
        </div>
      ))}
    </>
  );
};

export default DemoAICalc;
