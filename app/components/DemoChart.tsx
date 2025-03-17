"use client";

import { useDemoStore } from "@/store/use-demo-store";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CapFirstLetter from "../utils/capFirstLetter";
import { useEffect, useState } from "react";

const DemoChart = () => {
  const {
    raceProp,
    ageProp,
    genderProp,
    selRace,
    racePercentage,
    selAge,
    agePercentage,
    selGender,
    genderPercentage,
  } = useDemoStore();
  const [chartTitle, setChartTitle] = useState<string>("");
  const [chartPercentage, setChartPercentage] = useState<number>(0);

  const fSelRace = selRace ? CapFirstLetter(selRace) : "";
  const fRacePercentage = racePercentage ? racePercentage * 100 : 0;

  const fSelAge = `${selAge} y.o.` || "";
  const fAgePercentage = agePercentage ? agePercentage * 100 : 0;

  const fSelGender = selGender ? CapFirstLetter(selGender) : "";
  const fGenderPercentage = genderPercentage ? genderPercentage * 100 : 0;

  useEffect(() => {
    if (raceProp) {
      setChartTitle(fSelRace);
      setChartPercentage(fRacePercentage);
    } else if (ageProp) {
      setChartTitle(fSelAge);
      setChartPercentage(fAgePercentage);
    } else if (genderProp) {
      setChartTitle(fSelGender);
      setChartPercentage(fGenderPercentage);
    }
  }, [raceProp, ageProp, genderProp, fSelAge, fSelAge, fSelGender]);

  return (
    <>
      <div className="text-5xl w-1/2">{`${chartTitle}`}</div>
      <div className="w-1/2 flex justify-end items-end">
        <CircularProgressbar
          className="h-3/4"
          value={chartPercentage}
          text={`${Math.round(chartPercentage)}%`}
          strokeWidth={1}
          styles={buildStyles({
            strokeLinecap: "rounded",
            textSize: "8px",
            pathColor: "#1A1B1C",
            textColor: "#1A1B1C",
          })}
        />
      </div>
    </>
  );
};

export default DemoChart;
