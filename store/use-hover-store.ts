import { create } from "zustand";

interface HoverState {
  isHovering: boolean;
  setIsHovering: (isHovering: boolean) => void;
};

export const useHoverStore = create<HoverState>((set) => ({
  isHovering: false,
  setIsHovering: (isHovering) => set({ isHovering }),
}));
