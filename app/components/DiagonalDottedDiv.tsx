import { useHoverStore } from "@/store/use-hover-store";
import { ReactNode } from "react";

interface DiagonalDottedDivProps {
  children: ReactNode;
  innerDiamondSize?: number;
}

export const DiagonalDottedDivLeft = ({
  children,
  innerDiamondSize = 150,
}: DiagonalDottedDivProps) => {
  const { isHovering } = useHoverStore();

  const innerSize = innerDiamondSize.toString();

  return (
    <div
      className={`absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out ${
        isHovering ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className="relative w-${innerSize} h-${innerSize} flex items-center justify-center" style={{ width: `${innerSize}px`, height: `${innerSize}px` }}
      >
        <div className="absolute w-[70%] custom-dotted-border-inner top-1/4 left-3/4 -translate-x-1/2 rotate-45" />
        <div className="absolute w-[70%] custom-dotted-border-inner top-3/4 left-3/4 -translate-x-1/2 -rotate-45" />
        <div className="absolute w-[70%] custom-dotted-border-inner top-1/4 left-1/4 -translate-x-1/2 -rotate-45" />
        <div className="absolute w-[70%] custom-dotted-border-inner top-3/4 left-1/4 -translate-x-1/2 rotate-45" />
        {children}
      </div>
    </div>
  );
};

export const DiagonalDottedDivRight = ({
  children,
  innerDiamondSize = 150,
}: DiagonalDottedDivProps) => {
  const { isHovering } = useHoverStore();

  const increment = innerDiamondSize * 0.2 - 40;

  const innerSize = innerDiamondSize.toString();
  const middleSize = (innerDiamondSize + increment).toString();
  const outerSize = (innerDiamondSize + increment * 2).toString();

  return (
    <>
      <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-30">
        <div
          className="relative flex items-center justify-center" style={{ width: `${innerSize}px`, height: `${innerSize}px` }}
        >
          <div className="absolute w-[70%] custom-dotted-border-inner top-1/4 left-3/4 -translate-x-1/2 rotate-45" />
          <div className="absolute w-[70%] custom-dotted-border-inner top-3/4 left-3/4 -translate-x-1/2 -rotate-45" />
          <div className="absolute w-[70%] custom-dotted-border-inner top-1/4 left-1/4 -translate-x-1/2 -rotate-45" />
          <div className="absolute w-[70%] custom-dotted-border-inner top-3/4 left-1/4 -translate-x-1/2 rotate-45" />
          {children}
        </div>
      </div>
      <div
        className={`absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-500 ease-in-out ${
          isHovering ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="relative flex items-center justify-center" style={{ width: `${middleSize}px`, height: `${middleSize}px` }}
        >
          <div className="absolute w-[70%] custom-dotted-border-middle top-1/4 left-3/4 -translate-x-1/2 rotate-45" />
          <div className="absolute w-[70%] custom-dotted-border-middle top-3/4 left-3/4 -translate-x-1/2 -rotate-45" />
          <div className="absolute w-[70%] custom-dotted-border-middle top-1/4 left-1/4 -translate-x-1/2 -rotate-45" />
          <div className="absolute w-[70%] custom-dotted-border-middle top-3/4 left-1/4 -translate-x-1/2 rotate-45" />
        </div>
      </div>
      <div
        className={`absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-700 ease-in-out ${
          isHovering ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="relative flex items-center justify-center" style={{ width: `${outerSize}px`, height: `${outerSize}px` }}
        >
          <div className="absolute w-[70%] custom-dotted-border-outer top-1/4 left-3/4 -translate-x-1/2 rotate-45" />
          <div className="absolute w-[70%] custom-dotted-border-outer top-3/4 left-3/4 -translate-x-1/2 -rotate-45" />
          <div className="absolute w-[70%] custom-dotted-border-outer top-1/4 left-1/4 -translate-x-1/2 -rotate-45" />
          <div className="absolute w-[70%] custom-dotted-border-outer top-3/4 left-1/4 -translate-x-1/2 rotate-45" />
        </div>
      </div>
    </>
  );
};

export const DiagonalDottedDiv = ({
  children,
  innerDiamondSize = 100,
}: DiagonalDottedDivProps) => {

  const increment = innerDiamondSize * 0.2 - 40;

  const innerSize = innerDiamondSize.toString();
  const middleSize = (innerDiamondSize + increment).toString();
  const outerSize = (innerDiamondSize + increment * 2).toString();

  console.log(increment, innerSize, middleSize, outerSize)

  return (
    <div
      className="relative flex items-center justify-center z-10" style={{ width: `${outerSize}px`, height: `${outerSize}px` }}
    >
      <div className="absolute w-[70%] custom-dotted-border-outer top-1/4 left-3/4 -translate-x-1/2 rotate-45" />
      <div className="absolute w-[70%] custom-dotted-border-outer top-3/4 left-3/4 -translate-x-1/2 -rotate-45" />
      <div className="absolute w-[70%] custom-dotted-border-outer top-1/4 left-1/4 -translate-x-1/2 -rotate-45" />
      <div className="absolute w-[70%] custom-dotted-border-outer top-3/4 left-1/4 -translate-x-1/2 rotate-45" />
      <div
        className="relative flex items-center justify-center z-20" style={{ width: `${middleSize}px`, height: `${middleSize}px` }}
      >
        <div className="absolute w-[70%] custom-dotted-border-middle top-1/4 left-3/4 -translate-x-1/2 rotate-45" />
        <div className="absolute w-[70%] custom-dotted-border-middle top-3/4 left-3/4 -translate-x-1/2 -rotate-45" />
        <div className="absolute w-[70%] custom-dotted-border-middle top-1/4 left-1/4 -translate-x-1/2 -rotate-45" />
        <div className="absolute w-[70%] custom-dotted-border-middle top-3/4 left-1/4 -translate-x-1/2 rotate-45" />
        <div
          className="relative flex items-center justify-center z-30" style={{ width: `${innerSize}px`, height: `${innerSize}px` }}
        >
          <div className="absolute w-[70%] custom-dotted-border-inner top-1/4 left-3/4 -translate-x-1/2 rotate-45" />
          <div className="absolute w-[70%] custom-dotted-border-inner top-3/4 left-3/4 -translate-x-1/2 -rotate-45" />
          <div className="absolute w-[70%] custom-dotted-border-inner top-1/4 left-1/4 -translate-x-1/2 -rotate-45" />
          <div className="absolute w-[70%] custom-dotted-border-inner top-3/4 left-1/4 -translate-x-1/2 rotate-45" />
          {children}
        </div>
      </div>
    </div>
  );
};