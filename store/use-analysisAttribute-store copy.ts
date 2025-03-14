import { create } from "zustand";

interface AnalysisAttribute {
  demo: boolean;
  setDemo: (demo: boolean) => void;
  cosCon: boolean;
  setCosCon: (cosCon: boolean) => void;
  skinDet: boolean;
  setSkinDet: (skinDet: boolean) => void;
  weather: boolean;
  setWeather: (weather: boolean) => void;
}

export const useAnalysisAttributeStore = create<AnalysisAttribute>((set) => ({
  demo: false,
  setDemo: (demo) => set({ demo }),
  cosCon: false,
  setCosCon: (cosCon) => set({ cosCon }),
  skinDet: false,
  setSkinDet: (skinDet) => set({ skinDet }),
  weather: false,
  setWeather: (weather) => set({ weather }),
}));
