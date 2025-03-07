"use client";

import Link from "next/link";
import BackButton from "../../../public/back.svg";
import ProceedButton from "../../../public/proceed.svg";
import { useIntroStore } from "@/store/use-intro-store";

const IntroScrollButtons = () => {
  const { validLocation } = useIntroStore();

  // May want to add feature to back button so that when validName is true and validLocation is false, it will go back to the name input instead of the landing page.

  return (
    <div className="flex justify-between px-8 py-9">
      <Link href="/">
        <button className="cursor-pointer">
          <img src={BackButton.src} alt="BackButton" />
        </button>
      </Link>
      {/* Need to updated the proceed button link href to the next page */}
      <Link href="/">
        <button
          className={`cursor-pointer opacity-0 transition-opacity ease-in-out duration-300 ${
            !validLocation ? "opacity-0" : "opacity-100"
          }`}
        >
          <img src={ProceedButton.src} alt="ProceedButton" />
        </button>
      </Link>
    </div>
  );
};

export default IntroScrollButtons;
