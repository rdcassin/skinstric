import { useHoverStore } from "@/store/use-hover-store";

const LandingContent = () => {
  const { isHovering } = useHoverStore();

  return (
    <div className="flex flex-col justify-center h-screen px-8">
      <h1
        className={`text-9xl font-light transition-all duration-1200 ease-in-out text-center ${
          isHovering ? "w-0" : "w-full"
        }`}
      >
        Sophisticated
      </h1>
      <h1
        className={`text-9xl font-light transition-all duration-1000 ease-in-out text-center ${
          isHovering ? "w-0" : "w-full"
        }`}
      >
        skincare
      </h1>
      <div className="absolute w-79 left-8 bottom-[26px]">
        <span className="text-[14px] font-normal">
          SKINSTRIC DEVELOPED AND A.I. THAT CREATES A HIGHLY-PERSONALISED
          ROUTINE TAILORED TO WHAT YOUR SKIN NEEDS.
        </span>
      </div>
    </div>
  );
};

export default LandingContent;
