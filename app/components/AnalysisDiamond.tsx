"use client";

interface AnalysisDiamondProps {
  size: number;
}

import { useAnalysisAttributeStore } from "@/store/use-analysisAttribute-store copy";
import { DiagonalDottedDiv } from "./DiagonalDottedDiv";

const AnalysisDiamond = ({ size }: AnalysisDiamondProps) => {
  const { setDemo, setCosCon, setSkinDet, setWeather } = useAnalysisAttributeStore();

  return (
    <DiagonalDottedDiv innerDiamondSize={size}>
      <div className="flex flex-col w-78 h-78 rotate-45">
        <div className="flex flex-row h-1/2 w-full gap-x-1.5 mb-0.75">
          <button className="font-semibold tracking-[-0.02em] flex justify-center items-center bg-[#F3F3F4] hover:bg-[#E1E1E2] transition-bg ease-in-out duration-300 h-full w-1/2 cursor-pointer" onClick={() => setDemo(true)}>
            <span className="-rotate-45 flex justify-center text-center">DEMOGRAPHICS</span>
          </button>
          <button className="font-semibold tracking-[-0.02em] flex justify-center items-center bg-[#F3F3F4] hover:bg-[#E1E1E2] transition-bg ease-in-out duration-300 h-full w-1/2 cursor-pointer" onClick={() => setCosCon(true)}>
            <span className="-rotate-45 flex justify-center text-center">COSMETIC CONCERNS</span>
          </button>
        </div>
        <div className="flex flex-row h-1/2 w-full gap-x-1.5 mt-0.75">
          <button className="font-semibold tracking-[-0.02em] flex justify-center items-center bg-[#F3F3F4] hover:bg-[#E1E1E2] transition-bg ease-in-out duration-300 h-full w-1/2 cursor-pointer" onClick={() => setSkinDet(true)}>
            <span className="-rotate-45 flex justify-center text-center">SKIN TYPE DETAILS</span>
          </button>
          <button className="font-semibold tracking-[-0.02em] flex justify-center items-center bg-[#F3F3F4] hover:bg-[#E1E1E2] transition-bg ease-in-out duration-300 h-full w-1/2 cursor-pointer" onClick={() => setWeather(true)}>
            <span className="-rotate-45 flex justify-center text-center">WEATHER</span>
          </button>
        </div>
      </div>
    </DiagonalDottedDiv>
  );
};

export default AnalysisDiamond;
