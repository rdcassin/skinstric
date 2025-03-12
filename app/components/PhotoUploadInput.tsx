import { DiagonalDottedDiv } from "@/app/components/DiagonalDottedDiv";
import ImageCaptureOption from "@/app/components/ImageCaptureOption";
import ImageUploadOptionAndAction from "@/app/components/ImageUploadOptionAndAction";
import Camera from "@/public/camera.svg";
import Gallery from "@/public/gallery.svg";
import { useImageSourceStore } from "@/store/use-imageSource-store";

interface PhotoInputProps {
  size: number;
}

export const PhotoCameraInput = ({ size }: PhotoInputProps) => {
  const { fadeCapture } = useImageSourceStore();
  return (
    <DiagonalDottedDiv innerDiamondSize={size}>
      <div
        className={`relative w-full h-full flex justify-center items-center ${
          fadeCapture ? "opacity-50" : "opacity-100"
        }`}
      >
        <ImageCaptureOption>
          <img src={Camera.src} alt="camera" />
          <div className="custom-line absolute w-[85px] h-0 top-41/128 right-9/32 translate-x-9/32 -rotate-45 z-40"></div>
          <p className="absolute text-left text-sm w-35 top-3/16 -right-1/8">
            ALLOW A.I. TO SCAN YOUR FACE
          </p>
        </ImageCaptureOption>
      </div>
    </DiagonalDottedDiv>
  );
};

export const PhotoUploadInput = ({ size }: PhotoInputProps) => {
  const { fadeUpload } = useImageSourceStore();
  return (
    <DiagonalDottedDiv innerDiamondSize={size}>
      <div
        className={`relative w-full h-full flex justify-center items-center ${
          fadeUpload ? "opacity-50" : "opacity-100"
        }`}
      >
        <div className="custom-line absolute w-[85px] h-0 bottom-41/128 left-23/128 translate-x-23/128 -rotate-225 z-40"></div>
        <p className="absolute text-right text-sm w-33 bottom-3/16 -left-1/8">
          ALLOW A.I. ACCESS GALLERY
        </p>
        <ImageUploadOptionAndAction>
          <img src={Gallery.src} alt="upload" />
        </ImageUploadOptionAndAction>
      </div>
    </DiagonalDottedDiv>
  );
};
