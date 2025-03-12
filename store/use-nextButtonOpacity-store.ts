import { create } from "zustand";

interface nextButtonOpacityState {
  opacity: boolean;
  setOpacity: (opacity: boolean) => void;
};

export const useNextButtonOpacityStore = create<nextButtonOpacityState>((set) => ({
  opacity: false,
  setOpacity: (opacity) => set({ opacity }),
}));
