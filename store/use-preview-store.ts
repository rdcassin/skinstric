import { create } from "zustand";

interface PreviewState {
  previewUrl: string | null;
  setPreviewUrl: (previewUrl: string | null) => void;
};

export const usePreviewStore = create<PreviewState>((set) => ({
  previewUrl: null,
  setPreviewUrl: (previewUrl) => set({ previewUrl }),
}));
