"use client";

import GeneralNav from "../../components/GeneralNav";
import IntroContent from "../components/IntroContent";
import {
  PhotoUploadInput,
  PhotoCameraInput,
} from "./components/PhotoUploadInput";
import PhotoUploadScrollButtons from "./components/PhotoUploadScrollButton";

const PhotoUpload = () => {

  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <GeneralNav />
        <IntroContent />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-x-90">
        <PhotoCameraInput size={400} />
        <PhotoUploadInput size={400} />
      </div>
      <PhotoUploadScrollButtons />
    </div>
  );
};

export default PhotoUpload;
