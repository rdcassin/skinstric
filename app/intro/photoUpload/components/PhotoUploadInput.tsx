import { DiagonalDottedDiv } from "@/app/components/DiagonalDottedDiv";
import Camera from "@/public/camera.svg";
import Gallery from "@/public/gallery.svg";

const PhotoUploadInput = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <DiagonalDottedDiv>
        <img src={Camera.src} alt="camera" />
      </DiagonalDottedDiv>
      <DiagonalDottedDiv>
        <img src={Gallery.src} alt="camera" />
      </DiagonalDottedDiv>
    </div>
  );
};

export default PhotoUploadInput;
