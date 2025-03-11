import { DiagonalDottedDiv } from "@/app/components/DiagonalDottedDiv";
import ImageCapture from "@/app/components/ImageCapture";
import ImageUpload from "@/app/components/ImageUpload";
import Camera from "@/public/camera.svg";
import Gallery from "@/public/gallery.svg";
import { useImageSourceStore } from "@/store/use-imageSource-store";

interface PhotoInputProps {
  size: number;
}

export const PhotoCameraInput = ({ size }: PhotoInputProps) => {
  const { selectCapture } = useImageSourceStore();
  return (
    <DiagonalDottedDiv innerDiamondSize={size}>
      <div className={`relative w-full h-full flex justify-center items-center ${selectCapture ? "opacity-100" : "opacity-50"}`}>
        <div className="custom-line absolute w-[85px] h-0 top-41/128 right-9/32 translate-x-9/32 -rotate-45 z-40"></div>
        <p className="absolute text-left text-sm w-35 top-3/16 -right-1/8">
          ALLOW A.I. TO SCAN YOUR FACE
        </p>
        <ImageCapture>
          <img src={Camera.src} alt="camera" />
        </ImageCapture>
      </div>
    </DiagonalDottedDiv>
  );
};

export const PhotoUploadInput = ({ size }: PhotoInputProps) => {
  const { selectUpload } = useImageSourceStore();
  return (
    <DiagonalDottedDiv innerDiamondSize={size}>
      <div className={`relative w-full h-full flex justify-center items-center ${selectUpload ? "opacity-100" : "opacity-50"}`}>
        <div className="custom-line absolute w-[85px] h-0 bottom-41/128 left-23/128 translate-x-23/128 -rotate-225 z-40"></div>
        <p className="absolute text-right text-sm w-33 bottom-3/16 -left-1/8">
          ALLOW A.I. ACCESS GALLERY
        </p>
        <ImageUpload>
          <img src={Gallery.src} alt="upload" />
        </ImageUpload>
      </div>
    </DiagonalDottedDiv>
  );
};
