import { useHoverStore } from "@/store/use-hover-store";
import { ReactNode } from "react";

interface DiagonalDottedDivProps {
  children: ReactNode;
}

export const DiagonalDottedDivLeft = ({ children }: DiagonalDottedDivProps) => {
  const { isHovering } = useHoverStore();

  return (
    <div
      className={`absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out ${
        isHovering ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative w-150 h-150 flex items-center justify-center">
        <div className="absolute w-[70%] h-0 custom-dotted-border-sm top-1/4 left-3/4 -translate-x-1/2 rotate-45" />
        <div className="absolute w-[70%] h-0 custom-dotted-border-sm top-3/4 left-3/4 -translate-x-1/2 -rotate-45" />
        <div className="absolute w-[70%] h-0 custom-dotted-border-sm top-1/4 left-1/4 -translate-x-1/2 -rotate-45" />
        <div className="absolute w-[70%] h-0 custom-dotted-border-sm top-3/4 left-1/4 -translate-x-1/2 rotate-45" />
        {children}
      </div>
    </div>
  );
};

export const DiagonalDottedDivRight = ({
  children,
}: DiagonalDottedDivProps) => {
  const { isHovering } = useHoverStore();

  return (
    <>
      <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-30">
        <div className="relative w-150 h-150 flex items-center justify-center">
          <div className="absolute w-[70%] h-0 custom-dotted-border-sm top-1/4 left-3/4 -translate-x-1/2 rotate-45" />
          <div className="absolute w-[70%] h-0 custom-dotted-border-sm top-3/4 left-3/4 -translate-x-1/2 -rotate-45" />
          <div className="absolute w-[70%] h-0 custom-dotted-border-sm top-1/4 left-1/4 -translate-x-1/2 -rotate-45" />
          <div className="absolute w-[70%] h-0 custom-dotted-border-sm top-3/4 left-1/4 -translate-x-1/2 rotate-45" />
          {children}
        </div>
      </div>
      <div
        className={`absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-500 ease-in-out ${
          isHovering ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="relative w-170 h-170 flex items-center justify-center">
          <div className="absolute w-[70%] h-0 custom-dotted-border-md top-1/4 left-3/4 -translate-x-1/2 rotate-45" />
          <div className="absolute w-[70%] h-0 custom-dotted-border-md top-3/4 left-3/4 -translate-x-1/2 -rotate-45" />
          <div className="absolute w-[70%] h-0 custom-dotted-border-md top-1/4 left-1/4 -translate-x-1/2 -rotate-45" />
          <div className="absolute w-[70%] h-0 custom-dotted-border-md top-3/4 left-1/4 -translate-x-1/2 rotate-45" />
        </div>
      </div>
      <div
        className={`absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-700 ease-in-out ${
          isHovering ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="relative w-190 h-190 flex items-center justify-center">
          <div className="absolute w-[70%] h-0 custom-dotted-border-lg top-1/4 left-3/4 -translate-x-1/2 rotate-45" />
          <div className="absolute w-[70%] h-0 custom-dotted-border-lg top-3/4 left-3/4 -translate-x-1/2 -rotate-45" />
          <div className="absolute w-[70%] h-0 custom-dotted-border-lg top-1/4 left-1/4 -translate-x-1/2 -rotate-45" />
          <div className="absolute w-[70%] h-0 custom-dotted-border-lg top-3/4 left-1/4 -translate-x-1/2 rotate-45" />
        </div>
      </div>
    </>
  );
};

export const DiagonalDottedDivCenter = ({
  children,
}: DiagonalDottedDivProps) => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
        <div className="relative w-150 h-150 flex items-center justify-center">
          <div className="absolute w-[70%] h-0 custom-dotted-border-sm top-1/4 left-3/4 -translate-x-1/2 rotate-45" />
          <div className="absolute w-[70%] h-0 custom-dotted-border-sm top-3/4 left-3/4 -translate-x-1/2 -rotate-45" />
          <div className="absolute w-[70%] h-0 custom-dotted-border-sm top-1/4 left-1/4 -translate-x-1/2 -rotate-45" />
          <div className="absolute w-[70%] h-0 custom-dotted-border-sm top-3/4 left-1/4 -translate-x-1/2 rotate-45" />
          {children}
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-500 ease-in-out">
        <div className="relative w-170 h-170 flex items-center justify-center">
          <div className="absolute w-[70%] h-0 custom-dotted-border-md top-1/4 left-3/4 -translate-x-1/2 rotate-45" />
          <div className="absolute w-[70%] h-0 custom-dotted-border-md top-3/4 left-3/4 -translate-x-1/2 -rotate-45" />
          <div className="absolute w-[70%] h-0 custom-dotted-border-md top-1/4 left-1/4 -translate-x-1/2 -rotate-45" />
          <div className="absolute w-[70%] h-0 custom-dotted-border-md top-3/4 left-1/4 -translate-x-1/2 rotate-45" />
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-700 ease-in-out">
        <div className="relative w-190 h-190 flex items-center justify-center">
          <div className="absolute w-[70%] h-0 custom-dotted-border-lg top-1/4 left-3/4 -translate-x-1/2 rotate-45" />
          <div className="absolute w-[70%] h-0 custom-dotted-border-lg top-3/4 left-3/4 -translate-x-1/2 -rotate-45" />
          <div className="absolute w-[70%] h-0 custom-dotted-border-lg top-1/4 left-1/4 -translate-x-1/2 -rotate-45" />
          <div className="absolute w-[70%] h-0 custom-dotted-border-lg top-3/4 left-1/4 -translate-x-1/2 rotate-45" />
        </div>
      </div>
    </>
  );
};
