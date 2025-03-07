import { create } from "zustand";

interface IntroState {
  validName: boolean;
  setValidName: (validName: boolean) => void;
  validLocation: boolean;
  setValidLocation: (validName: boolean) => void;
}

export const useIntroStore = create<IntroState>((set) => ({
  validName: false,
  setValidName: (validName) => set({ validName }),
  validLocation: false,
  setValidLocation: (validLocation) => set({ validLocation }),
}));
