import { PrevButtonProps } from "./types";
import PrevButtonIcon from "@/public/PrevButtonIcon.png";
import WhitePrevButtonIcon from "@/public/WhitePrevButtonIcon.png";

const PrevButton = ({ label, prevAction, invertImage }: PrevButtonProps) => {
  let icon = PrevButtonIcon;

  if (invertImage) {
    icon = WhitePrevButtonIcon;
  }

  return (
    <button className="cursor-pointer flex flex-row" onClick={() => prevAction()}>
      <img src={icon.src} alt={label} className="w-11 h-11" />
      <p className="h-11 font-semibold tracking-[-0.02em] text-sm flex items-center text-center pl-4">
        {label}
      </p>
    </button>
  );
};

export default PrevButton;
