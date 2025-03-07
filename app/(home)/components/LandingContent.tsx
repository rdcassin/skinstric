import { useHoverStore } from "@/store/use-hover-store";
import { useEffect } from "react";

const LandingContent = () => {
  const { isHovering, setIsHovering } = useHoverStore();

  useEffect(() => {
    setIsHovering(false);
  }, [setIsHovering]);

  return (
    <div className="flex flex-col justify-center h-screen px-8">
      <h1
        className={`text-9xl font-light transition-all duration-1200 ease-in-out text-center tracking-[-0.07em] ${
          isHovering ? "w-0" : "w-full"
        }`}
      >
        Sophisticated
      </h1>
      <h1
        className={`text-9xl font-light transition-all duration-1000 ease-in-out text-center tracking-[-0.02em] ${
          isHovering ? "w-0" : "w-full"
        }`}
      >
        skincare
      </h1>
      <div className="absolute w-79 left-8 bottom-[26px]">
        <p className="text-sm font-normal">
          SKINSTRIC DEVELOPED AND A.I. THAT CREATES A HIGHLY-PERSONALISED
          ROUTINE TAILORED TO WHAT YOUR SKIN NEEDS.
        </p>
      </div>
    </div>
  );
};

export default LandingContent;
