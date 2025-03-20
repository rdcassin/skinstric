"use client";

import { useUserInfoStore } from "@/store/use-userInfo-store";
import sortData from "../utils/sortData";
import { useEffect } from "react";
import "react-circular-progressbar/dist/styles.css";
import DemoSelect from "./DemoSelect";
import { useDemoStore } from "@/store/use-demo-store";
import DemoChart from "./DemoChart";
import DemoAICalc from "./DemoAICalc";

const Demographics = () => {
  const { userData } = useUserInfoStore();
  const {
    selRace,
    setSelRace,
    selAge,
    setSelAge,
    selGender,
    setSelGender,
    setTSelRace,
    setTSelAge,
    setTSelGender,
    setISelRace,
    setISelAge,
    setISelGender
  } = useDemoStore();

  // const userData = {
  //   race: {
  //     black: 0.0004102313,
  //     white: 0.0010931309,
  //     "southeast asian": 0.0024870074,
  //     "south asian": 0.0002568607,
  //     "latino hispanic": 0.0051376893,
  //     "east asian": 0.9896765168,
  //     "middle eastern": 0.0009385636,
  //   },
  //   age: {
  //     "0-2": 0.0122983524,
  //     "3-9": 0.7352932234,
  //     "20-29": 0.0059112756,
  //     "30-39": 0.0075004672,
  //     "40-49": 0.2125422923,
  //     "10-19": 0.0117241061,
  //     "50-59": 0.0058556294,
  //     "60-69": 0.0030211923,
  //     "70+": 0.0058534613,
  //   },
  //   gender: {
  //     male: 0.4468851605,
  //     female: 0.5531148395,
  //   },
  // };

  const races = sortData(userData.race);
  const ages = sortData(userData.age, true);
  const genders = sortData(userData.gender);

  useEffect(() => {
    if (!selRace) {
      setSelRace(Object.keys(races)[0], Object.values(races)[0]);
      setTSelRace(Object.keys(races)[0], Object.values(races)[0]);
      setISelRace(Object.keys(races)[0], Object.values(races)[0]);
    }

    if (!selAge) {
      let maxAgeKey = "";
      let maxAgeValue = -Infinity;

      for (const key in ages) {
        if (ages[key] > maxAgeValue) {
          maxAgeValue = ages[key];
          maxAgeKey = key;
        }
      }
      if (maxAgeKey) {
        setSelAge(maxAgeKey, maxAgeValue);
        setTSelAge(maxAgeKey, maxAgeValue);
        setISelAge(maxAgeKey, maxAgeValue);
      }
    }

    if (!selGender) {
      setSelGender(Object.keys(genders)[0], Object.values(genders)[0]);
      setTSelGender(Object.keys(genders)[0], Object.values(genders)[0]);
      setISelGender(Object.keys(genders)[0], Object.values(genders)[0]);
    }
  }, []);

  return (
    <div className="p-8 flex flex-row gap-x-4 h-full mt-12">
      <div className="w-[11%]">
        <DemoSelect />
      </div>
      <div className="w-[63%] h-full flex xl:flex-row flex-col justify-between border-t-1 tracking-[-0.05em] bg-[#F3F3F4] px-4 py-5">
        <DemoChart />
      </div>
      <div className="w-[25%] h-full border-t-1 tracking-[-0.02em] bg-[#F3F3F4]">
        <DemoAICalc races={races} ages={ages} genders={genders} />
      </div>
    </div>
  );
};

export default Demographics;
