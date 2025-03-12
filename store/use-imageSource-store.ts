import { create } from "zustand";

interface ImageSource {
  selectCapture: boolean;
  setSelectCapture: (selectCapture: boolean) => void;
  selectUpload: boolean;
  setSelectUpload: (selectUpload: boolean) => void;
  fadeCapture: boolean;
  setFadeCapture: (fadeCapture: boolean) => void;
  fadeUpload: boolean;
  setFadeUpload: (fadeUpload: boolean) => void;
  camPerm: boolean;
  setCamPerm: (camPerm: boolean) => void;
}

export const useImageSourceStore = create<ImageSource>((set) => ({
  selectCapture: false,
  setSelectCapture: (selectCapture) => set({ selectCapture }),
  selectUpload: false,
  setSelectUpload: (selectUpload) => set({ selectUpload }),
  fadeCapture: false,
  setFadeCapture: (fadeCapture) => set({ fadeCapture }),
  fadeUpload: false,
  setFadeUpload: (fadeUpload) => set({ fadeUpload }),
  camPerm: false,
  setCamPerm: (camPerm) => set({ camPerm }),
}));
