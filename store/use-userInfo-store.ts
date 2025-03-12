import { create } from "zustand";
import { UserData } from "@/app/components/types";

interface UserInfoState {
  validName: boolean;
  setValidName: (validName: boolean) => void;
  validLocation: boolean;
  setValidLocation: (validLocation: boolean) => void;
  userName: string | null;
  setUserName: (userName: string | null) => void;
  userLocation: string | null;
  setUserLocation: (userLocation: string | null) => void;
  userImage: File | null;
  setUserImage: (userImage: File | null) => void;
  userData: UserData | null;
  setUserData: (userData: UserData | null) => void;
}

export const useUserInfoStore = create<UserInfoState>((set) => ({
  validName: false,
  setValidName: (validName) => set({ validName }),
  validLocation: false,
  setValidLocation: (validLocation) => set({ validLocation }),
  userName: "",
  setUserName: (userName) => set({ userName }),
  userLocation: "",
  setUserLocation: (userLocation) => set({ userLocation }),
  userImage: null,
  setUserImage: (userImage) => set({ userImage }),
  userData: null,
  setUserData: (userData) => set({ userData }),
}));
