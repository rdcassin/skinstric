interface LogoBarProps{
  section?: string;
  button?: boolean;
}

const LogoBar = ({ section = "" }: LogoBarProps) => {
  return (
    <nav className="w-full flex items-center gap-x-4 py-6 px-8 z-10">
      <span className="text-sm font-semibold tracking-[-0.02em]">
        SKINSTRIC
      </span>
      <span className="text-sm font-semibold opacity-60 border-l-2 border-r-2 rounded-l-sm rounded-r-sm min-h-4 min-w-15 px-2 flex justify-center items-center tracking-[-0.02em]">
        {section}
      </span>
    </nav>
  );
};

export default LogoBar;
