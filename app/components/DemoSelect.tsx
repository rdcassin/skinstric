"use client";

import { useDemoStore } from "@/store/use-demo-store";

const DemoSelect = () => {
  const {
    raceProp,
    setRaceProp,
    ageProp,
    setAgeProp,
    genderProp,
    setGenderProp,
    selRace,
    selAge,
    selGender,
  } = useDemoStore();

  const fSelRace = selRace ? Object.keys({ [selRace ]: '' }).map(key => key.toUpperCase()) : [];
  const fSelGender = selGender ? Object.keys({ [selGender ]: '' }).map(key => key.toUpperCase()) : [];

  return (
    <>
      <div
        className={`w-full h-26 flex flex-col justify-between mb-2 px-4 py-3 tracking-[-0.02em] font-semibold border-t-1 cursor-pointer ${
          raceProp
            ? "bg-[#1A1B1C] text-[#FCFCFC]"
            : "bg-[#F3F3F4] hover:bg-[#E1E1E2]"
        }`}
        onClick={() => setRaceProp(true)}
      >
        <p>{fSelRace}</p>
        <p>RACE</p>
      </div>
      <div
        className={`w-full h-26 flex flex-col justify-between mb-2 px-4 py-3 tracking-[-0.02em] font-semibold border-t-1 cursor-pointer ${
          ageProp
            ? "bg-[#1A1B1C] text-[#FCFCFC]"
            : "bg-[#F3F3F4] hover:bg-[#E1E1E2]"
        }`}
        onClick={() => setAgeProp(true)}
      >
        <p>{selAge}</p>
        <p>AGE</p>
      </div>
      <div
        className={`w-full h-26 flex flex-col justify-between mb-2 px-4 py-3 tracking-[-0.02em] font-semibold border-t-1 cursor-pointer ${
          genderProp
            ? "bg-[#1A1B1C] text-[#FCFCFC]"
            : "bg-[#F3F3F4] hover:bg-[#E1E1E2]"
        }`}
        onClick={() => setGenderProp(true)}
      >
        <p>{fSelGender}</p>
        <p>SEX</p>
      </div>
    </>
  );
};

export default DemoSelect;
