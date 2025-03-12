import BarCenterContent from "./BarCenterContent";
import { DiagonalDottedDiv } from "./DiagonalDottedDiv";
import Camera from "@/public/camera.svg";

const LoadCamera = () => {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <DiagonalDottedDiv
        innerDiamondSize={400}
        incrementSize={100}
        rotateDegrees={15}
      >
        <div className="flex w-full h-full justify-center items-center z-50">
          <img src={Camera.src} alt="camera" />
          <p className="absolute font-semibold tracking-[-0.02em] bottom-1/4 text-[#1A2B3C]">
            SETTING UP CAMERA ...
          </p>
        </div>
      </DiagonalDottedDiv>
      <div className="absolute my-0 mx-auto z-10 bottom-1/4 text-[#1A2B3C]">
        <BarCenterContent
          line1="TO GET BETTER RESULTS MAKE SURE TO HAVE"
          line2="◇ NEUTRAL EXPRESSION ◇ FRONTAL POSE ◇ ADEQUATE LIGHTING"
        />
      </div>
    </div>
  );
};

export default LoadCamera;
