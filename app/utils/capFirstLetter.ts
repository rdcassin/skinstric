const CapFirstLetter = (text: string) => {
  const fText = text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return fText;
};

export default CapFirstLetter;
