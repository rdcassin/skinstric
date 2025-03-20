"use client";

import { usePreviewStore } from "@/store/use-preview-store";
import { useEffect, useRef, useState } from "react";
import ImageCaptureButton from "./ImageCaptureButton";
import { useNextButtonOpacityStore } from "@/store/use-nextButtonOpacity-store";
import { useImageSourceStore } from "@/store/use-imageSource-store";
import LoadCamera from "./LoadCamera";
import { useRouter } from "next/navigation";
import { useUserInfoStore } from "@/store/use-userInfo-store";

const ImageCaptureAction = () => {
  const { setUserImage } = useUserInfoStore();
  const { setSelectCapture, setFadeUpload, camPerm, setCamPerm } =
    useImageSourceStore();
  const { setOpacity } = useNextButtonOpacityStore();
  const { setPreviewUrl } = usePreviewStore();
  const [streaming, setStreaming] = useState<MediaStream>();
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter();

  const handleOpenCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setCamPerm(true);
      setOpacity(false);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setStreaming(stream);
      }
    } catch (error) {
      setFadeUpload(false);
      router.push("/intro/photoUpload");
      console.error("Camera access error:", error);
    }
  };

  const handleCloseCamera = () => {
    if (streaming) {
      streaming.getTracks().forEach((track: any) => {
        try {
          if (track.readyState === "live") {
            track.stop();
          }
        } catch (error) {
          console.error("Error stopping track: ", error);
        }
      });
      setStreaming(undefined);
    }
    if(videoRef.current){
        videoRef.current.srcObject = null;
    }
  };

  const takePicture = () => {
    setSelectCapture(true);
    setOpacity(true);
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
            setUserImage(
              new File([blob], "captured.png", { type: "image/png" })
            );
            setPreviewUrl(URL.createObjectURL(blob));
            handleCloseCamera();
          }
        }, "image/png");
      }
    }
  };

  useEffect(() => {
    handleOpenCamera();
    return () => {
      handleCloseCamera();
    };
  }, []);

  return (
    <div className="absolute">
      {camPerm ? (
        <>
          <video
            ref={videoRef}
            autoPlay
            className="h-screen w-screen object-cover"
          ></video>
          <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
          <div className="absolute top-1/2 right-8">
            <ImageCaptureButton takePicture={takePicture} />
          </div>
        </>
      ) : (
        <LoadCamera />
      )}
    </div>
  );
};

export default ImageCaptureAction;