import { create } from "zustand";

interface nextButtonOpacityState {
  opacity: boolean;
  setOpacity: (opacity: boolean) => void;
};

export const useOpacityStore = create<nextButtonOpacityState>((set) => ({
  opacity: true,
  setOpacity: (opacity) => set({ opacity }),
}));
