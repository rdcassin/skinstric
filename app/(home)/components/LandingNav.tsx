const LandingNav = () => {
  return (
    <nav className="w-full flex absolute">
      <div className="flex items-center gap-x-4 py-6 px-8 w-1/2">
        <span className="text-sm font-semibold tracking-[-0.02em]">SKINSTRIC</span>
        <span className="text-sm font-semibold opacity-60 border-l-2 border-r-2 rounded-l-sm rounded-r-sm h-4 w-15 flex justify-center items-center tracking-[-0.02em]">
          INTRO
        </span>
      </div>
      <div className="flex justify-end items-center w-1/2 px-8">
        <button className="text-[10px] bg-[#1A1B1C] text-white px-4 py-2 tracking-[-0.02em]">
          ENTER CODE
        </button>
      </div>
    </nav>
  );
};

export default LandingNav;
