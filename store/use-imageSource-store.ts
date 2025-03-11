import { create } from "zustand";

interface ImageSource {
  selectCapture: boolean;
  setSelectCapture: (selectCapture: boolean) => void;
  selectUpload: boolean;
  setSelectUpload: (selectUpload: boolean) => void;
}

export const useImageSourceStore = create<ImageSource>((set) => ({
  selectCapture: true,
  setSelectCapture: (selectCapture) => set({ selectCapture }),
  selectUpload: true,
  setSelectUpload: (selectUpload) => set({ selectUpload }),
}));
