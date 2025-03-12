"use client";

import { usePreviewStore } from "@/store/use-preview-store";
import { useEffect, useRef, useState } from "react";
import ImageCaptureButton from "./ImageCaptureButton";
import { useNextButtonOpacityStore } from "@/store/use-nextButtonOpacity-store";
import { useImageSourceStore } from "@/store/use-imageSource-store";
import LoadCamera from "./LoadCamera";

const ImageCaptureAction = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const { selectCapture, setSelectCapture } = useImageSourceStore();
  const { setOpacity } = useNextButtonOpacityStore();
  const { previewUrl, setPreviewUrl } = usePreviewStore();
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleOpenCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setSelectCapture(false);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Camera access error:", error);
    }
  };

  const takePicture = () => {
    setOpacity(false);
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext("2d");
      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((blob) => {
          if (blob) {
            setSelectedImage(
              new File([blob], "captured.png", { type: "image/png" })
            );
            setPreviewUrl(URL.createObjectURL(blob));
          }
        }, "image/png");
      }
    }
  };

  useEffect(() => {
    handleOpenCamera();
  }, []);

  return (
    <div className="absolute">
      {selectCapture ? (
        <LoadCamera />
      ) : (
        <>
          <video
            ref={videoRef}
            autoPlay
            className="h-screen w-screen object-cover"
            style={{ display: previewUrl ? "none" : "block" }}
          ></video>
          <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
          <div className="absolute top-1/2 right-8">
            <ImageCaptureButton takePicture={takePicture} />
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCaptureAction;
