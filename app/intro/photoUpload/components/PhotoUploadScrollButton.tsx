"use client";

import Link from "next/link";
import BackButton from "@/public/back.svg";
import { useIntroStore } from "@/store/use-intro-store";

const PhotoUploadScrollButtons = () => {
  return (
    <div className="flex justify-start px-8 py-9">
      <Link href="/">
        <button className="cursor-pointer">
          <img src={BackButton.src} alt="BackButton" />
        </button>
      </Link>
    </div>
  );
};

export default PhotoUploadScrollButtons;
