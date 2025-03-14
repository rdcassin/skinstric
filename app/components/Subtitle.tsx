interface SubtitleProps {
    text: string;
    title?: string;
    line1?: string;
    line2?: string;
}

const Subtitle = ({ text, title, line1, line2 }: SubtitleProps) => {
  return (
    <div className="px-8 py-3">
      <p className="font-semibold text-4 tracking-[-0.02em] mb-2">{text}</p>
      <h1 className="text-7xl tracking-[-0.06em]" style={{ marginLeft: "-0.06em" }}>{title}</h1>
      <p className="text-sm mt-1 mb-1">{line1}</p>
      <p className="text-sm mb-1">{line2}</p>
    </div>
  );
};

export default Subtitle;
