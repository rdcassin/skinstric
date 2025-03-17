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
  setDemo: (value) =>
    set((state) => ({
      demo: value,
      cosCon: value ? false : state.cosCon,
      skinDet: value ? false : state.skinDet,
      weather: value ? false : state.weather,
    })),
  cosCon: false,
  setCosCon: (value) =>
    set((state) => ({
      cosCon: value,
      demo: value ? false : state.demo,
      skinDet: value ? false : state.skinDet,
      weather: value ? false : state.weather,
    })),
  skinDet: false,
  setSkinDet: (value) =>
    set((state) => ({
      skinDet: value,
      demo: value ? false : state.demo,
      cosCon: value ? false : state.cosCon,
      weather: value ? false : state.weather,
    })),
  weather: false,
  setWeather: (value) =>
    set((state) => ({
      weather: value,
      demo: value ? false : state.demo,
      cosCon: value ? false : state.cosCon,
      skinDet: value ? false : state.skinDet,
    })),
}));