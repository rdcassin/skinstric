/* eslint-disable @next/next/no-img-element */
import {
  DiagonalDottedDivLeft,
  DiagonalDottedDivRight,
} from "../../components/DiagonalDottedDiv";

import DiscoverAI from "../../../public/discoverAI.svg";
import TakeTest from "../../../public/takeTest.svg";
import TakeTestHover from "../../../public/takeTestHover.svg";
import { useHoverStore } from "@/store/use-hover-store";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";

interface ScrollButtonProps {
  size: number;
}

export const ScrollButtonLeft = ({ size }: ScrollButtonProps) => {
  const smallScreen = useMediaQuery("(max-width: 1024px)");

  return (
    <DiagonalDottedDivLeft innerDiamondSize={size}>
      <button
        className={`absolute top-1/2 transform -translate-y-1/2 cursor-pointer ${smallScreen ? "w-[108px] h-[30px] left-[calc(50%+16px)]" : "w-[169px] h-[78px] left-[calc(50%+32px)]"}`}
        onClick={() => {}}
      >
        <img
          src={DiscoverAI.src}
          className="bg-white"
          alt="Discover A.I. Button"
        />
      </button>
    </DiagonalDottedDivLeft>
  );
};

export const ScrollButtonRight = ({ size }: ScrollButtonProps) => {
  const { isHovering, setIsHovering } = useHoverStore();
  const smallScreen = useMediaQuery("(max-width: 1024px)");

  return (
    <DiagonalDottedDivRight innerDiamondSize={size}>
      <div className={`absolute top-1/2 transform -translate-y-1/2 flex ${smallScreen ? "right-[calc(50%+16px)]" : "right-[calc(50%+32px)]"}`}>
        <Link href="/intro">
          <button
            className={`relative cursor-pointer ${smallScreen ? "w-[108px] h-[10px]" : "w-[169px] h-[78px]"}`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <img
              src={TakeTestHover.src}
              className={`bg-white transition-opacity ease-in-out duration-750 absolute top-1/2 -translate-y-1/2 right-0 ${
                isHovering ? "opacity-100" : "opacity-0"
              }`}
              alt="Take Test Hover Button"
            />
            <img
              src={TakeTest.src}
              className={`bg-white transition-opacity ease-in-out duration-750 absolute top-1/2 -translate-y-1/2 right-0 ${
                isHovering ? "opacity-0" : "opacity-100"
              }`}
              alt="Take Test Button"
            />
          </button>
        </Link>
      </div>
    </DiagonalDottedDivRight>
  );
};
