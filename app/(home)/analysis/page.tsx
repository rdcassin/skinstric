"use client";

import { DiagonalDottedDiv } from "@/app/components/DiagonalDottedDiv";
import { useUserInfoStore } from "@/store/use-userInfo-store";
import { useState } from "react";

const AnalysisPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { userData } = useUserInfoStore();

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

  return <>{loading ? <AnalysisLoading /> : <div>Analysis Page</div>}</>;
};

export default AnalysisPage;
