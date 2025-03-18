import { DemoOutputChangeProps } from "./types";

const DemoOutputChange = ({
  label1,
  action1,
  label2,
  action2,
}: DemoOutputChangeProps) => {
  return (
    <div className="flex justify-between gap-x-4">
      <button className="cursor-pointer font-semibold text-sm tracking-[-0.02em] px-4 py-2 border-1" onClick={() => action1()}>{label1}</button>
      <button className="cursor-pointer font-semibold text-sm tracking-[-0.02em] px-4 py-2 text-[#FCFCFC] bg-[#1A1B1C]" onClick={() => action2()}>{label2}</button>
    </div>
  );
};

export default DemoOutputChange;
