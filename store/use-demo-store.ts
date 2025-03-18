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
  tSelRace: string | undefined;
  tRacePercentage: number | undefined;
  setTSelRace: (tSelRace: string | undefined, tRacePercentage: number | undefined) => void;
  tSelAge: string | undefined;
  tAgePercentage: number | undefined;
  setTSelAge: (tSelAge: string | undefined, tAgePercentage: number | undefined) => void;
  tSelGender: string | undefined;
  tGenderPercentage: number | undefined;
  setTSelGender: (tSelGender: string | undefined, tGenderPercentage: number | undefined) => void;
  iSelRace: string | undefined;
  iRacePercentage: number | undefined;
  setISelRace: (iSelRace: string | undefined, iRacePercentage: number | undefined) => void;
  iSelAge: string | undefined;
  iAgePercentage: number | undefined;
  setISelAge: (iSelAge: string | undefined, iAgePercentage: number | undefined) => void;
  iSelGender: string | undefined;
  iGenderPercentage: number | undefined;
  setISelGender: (iSelGender: string | undefined, iGenderPercentage: number | undefined) => void;
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
  tSelRace: undefined,
  tRacePercentage: undefined,
  setTSelRace: (tSelRace, tRacePercentage) => set({ tSelRace, tRacePercentage }),
  tSelAge: undefined,
  tAgePercentage: undefined,
  setTSelAge: (tSelAge, tAgePercentage) => set({ tSelAge, tAgePercentage }),
  tSelGender: undefined,
  tGenderPercentage: undefined,
  setTSelGender: (tSelGender, tGenderPercentage) => set({ tSelGender, tGenderPercentage }),
  iSelRace: undefined,
  iRacePercentage: undefined,
  setISelRace: (iSelRace, iRacePercentage) => set({ iSelRace, iRacePercentage }),
  iSelAge: undefined,
  iAgePercentage: undefined,
  setISelAge: (iSelAge, iAgePercentage) => set({ iSelAge, iAgePercentage }),
  iSelGender: undefined,
  iGenderPercentage: undefined,
  setISelGender: (iSelGender, iGenderPercentage) => set({ iSelGender, iGenderPercentage }),
}));
