import { create } from "zustand";

interface Demo {
  raceProp: boolean;
  setRaceProp: (raceProp: boolean) => void;
  ageProp: boolean;
  setAgeProp: (ageProp: boolean) => void;
  genderProp: boolean;
  setGenderProp: (GenderProp: boolean) => void;
  selRace: string | undefined;
  racePercentage: number | undefined;
  setSelRace: (selRace: string | undefined, racePercentage: number | undefined) => void;
  selAge: string | undefined;
  agePercentage: number | undefined;
  setSelAge: (selAge: string | undefined, agePercentage: number | undefined) => void;
  selGender: string | undefined;
  genderPercentage: number | undefined;
  setSelGender: (selGender: string | undefined, genderPercentage: number | undefined) => void;
}

export const useDemoStore = create<Demo>((set) => ({
  raceProp: true,
  setRaceProp: (value) =>
    set((state) => ({
      raceProp: value,
      ageProp: value ? false : state.ageProp,
      genderProp: value ? false : state.genderProp,
    })),
  ageProp: false,
  setAgeProp: (value) =>
    set((state) => ({
      ageProp: value,
      raceProp: value ? false : state.raceProp,
      genderProp: value ? false : state.genderProp,
    })),
  genderProp: false,
  setGenderProp: (value) =>
    set((state) => ({
      genderProp: value,
      raceProp: value ? false : state.raceProp,
      ageProp: value ? false : state.ageProp,
    })),
  selRace: undefined,
  racePercentage: undefined,
  setSelRace: (selRace, racePercentage) => set({ selRace, racePercentage }),
  selAge: undefined,
  agePercentage: undefined,
  setSelAge: (selAge, agePercentage) => set({ selAge, agePercentage }),
  selGender: undefined,
  genderPercentage: undefined,
  setSelGender: (selGender, genderPercentage) => set({ selGender, genderPercentage }),
}));
