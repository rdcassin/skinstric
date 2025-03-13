import ImageCaptureButtonIcon from "@/public/ImageCaptureButtonIcon.png";
import { useNextButtonOpacityStore } from "@/store/use-nextButtonOpacity-store";

interface ImageCaptureButtonProps {
  takePicture: () => void;
}

const ImageCaptureButton = ({ takePicture }: ImageCaptureButtonProps) => {
  const { opacity } = useNextButtonOpacityStore();

  const icon = ImageCaptureButtonIcon;

  return (
    <button
      className={`cursor-pointer flex flex-row transition-opacity ease-in-out duration-300 bg-transparent z-10 text-[#FCFCFC] ${
        !opacity ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={() => takePicture()}
    >
      <p className="h-16 font-semibold tracking-[-0.02em] text-sm flex items-center text-center pr-4">
        TAKE PICTURE
      </p>
      <img src={icon.src} alt="Take Picture" className="w-16 h-16" />
    </button>
  );
};

export default ImageCaptureButton;
