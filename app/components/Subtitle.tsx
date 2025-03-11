interface SubtitleProps {
    text: string;
}

const Subtitle = ({ text}: SubtitleProps) => {
  return (
    <div className="px-8 py-6">
      <p className="font-semibold text-4 tracking-[-0.02em]">{text}</p>
    </div>
  );
};

export default Subtitle;
