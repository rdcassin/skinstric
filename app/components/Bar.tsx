import PrevButton from "./PrevButton";
import BarCenterContent from "./BarCenterContent";
import NextButton from "./NextButton";
import DemoOutputChange from "./DemoOutputChange";
import { BarProps } from "./types";

const Bar = ({ subComponent1, subComponent2, subComponent3, subComponent4 }: BarProps) => {
  return (
    <div className="flex items-end justify-between px-8 py-9 bg-transparent">
      <PrevButton {...subComponent1} />
      {subComponent2 && (
        <BarCenterContent {...subComponent2} />
      )}
      <NextButton {...subComponent3} />
      {subComponent4 && (
        <DemoOutputChange {...subComponent4} />
      )}
    </div>
  );
};

export default Bar;
