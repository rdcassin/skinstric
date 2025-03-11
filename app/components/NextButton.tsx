import { NextButtonProps } from "./types";
import NextButtonIcon from "@/public/NextButtonIcon.png";
import WhiteNextButtonIcon from "@/public/WhiteNextButtonIcon.png";
import { useIntroStore } from "@/store/use-intro-store";
import { useOpacityStore } from "@/store/use-nextButtonOpacity-store";

const NextButton = ({ label, nextAction, invertImage }: NextButtonProps) => {
  const { opacity } = useOpacityStore();

  let icon = NextButtonIcon;

  if (invertImage) {
    icon = WhiteNextButtonIcon;
  }

  return (
    <button
      className={`cursor-pointer flex flex-row transition-opacity ease-in-out duration-300 ${
        opacity ? "opacity-0" : "opacity-100"
      }`}
      onClick={() => nextAction()}
    >
      <p className="h-11 font-semibold tracking-[-0.02em] text-sm flex items-center text-center pr-4">
        {label}
      </p>
      <img src={icon.src} alt={label} className="w-11 h-11" />
    </button>
  );
};

export default NextButton;
