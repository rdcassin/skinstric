import { BarCenterContentProps } from "./types";

const BarCenterContent = ({ line1, line2 }: BarCenterContentProps) => {
  return (
    <div className={`font-normal text-center ${line2 ? "tracking-normal text-sm" : "tracking-[-0.02em]"}`}>
      <div className={`${line2? "mb-4": ""}`} >{line1}</div>
      {line2 && <div>{line2}</div>}
    </div>
  );
};

export default BarCenterContent;