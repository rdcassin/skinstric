import { BarCenterContentProps } from "./types";

const BarCenterContent = ({ line1, line2, grey = false }: BarCenterContentProps) => {
  return (
    <div className={`font-normal text-center ${line2 ? "tracking-normal text-sm" : "tracking-[-0.02em]"} ${grey ? "text-[#A0A4AB]" : ""}`}>
      <div className={`${line2 ? "mb-8": ""} `} >{line1}</div>
      {line2 && <div className={`${grey ? "text-[#A0A4AB]" : ""}`}>{line2}</div>}
    </div>
  );
};

export default BarCenterContent;