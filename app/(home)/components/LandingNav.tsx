const LandingNav = () => {
  return (
    <nav className="w-screen flex absolute">
      <div className="flex items-center gap-x-4 py-[23px] px-8 w-1/2">
        <span className="text-[14px] font-semibold">SKINSTRIC</span>
        <span className="text-[14px] font-semibold opacity-60 border-l-2 border-r-2 rounded-l-sm rounded-r-sm h-[17px] w-[61px] flex justify-center items-center">
          INTRO
        </span>
      </div>
      <div className="flex justify-end items-center w-1/2 px-8">
        <button className="text-[10px] bg-[#1A1B1C] text-white px-4 py-2">
          ENTER CODE
        </button>
      </div>
    </nav>
  );
};

export default LandingNav;
