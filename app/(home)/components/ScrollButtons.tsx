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

interface ScrollButtonProps {
  size: number;
}

export const ScrollButtonLeft = ({ size }: ScrollButtonProps) => {
  return (
    <DiagonalDottedDivLeft innerDiamondSize={size}>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-[calc(50%+32px)] cursor-pointer"
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

  return (
    <DiagonalDottedDivRight innerDiamondSize={size}>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-[calc(50%+32px)] flex">
        <Link href="/intro">
          <button
            className="relative cursor-pointer w-[169px] h-[78px]"
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
