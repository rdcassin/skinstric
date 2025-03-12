"use client";

import { DiagonalDottedDiv } from "@/app/components/DiagonalDottedDiv";
import { useUserInfoStore } from "@/store/use-userInfo-store";
import { useState, KeyboardEventHandler } from "react";

interface UserInfoInputProps {
  size: number;
}

const UserInfoInput = ({ size }: UserInfoInputProps) => {
  const { userName, setUserName, userLocation, setUserLocation, validName, setValidName, setValidLocation } = useUserInfoStore();
  const [pTextNameSwitch, setPTextNameSwitch] = useState<boolean>(false);
  const [pTextLocSwitch, setPTextLocSwitch] = useState<boolean>(false);

  const inputValidation = (inputName: string) => {
    const regex = /^[a-zA-Z\s'-]+$/;
    return regex.test(inputName);
  };

  const nameHandleOnKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      const target = e.target as HTMLInputElement;
      if (inputValidation(target.value)) {
        setUserName(target.value);
        setValidName(true);
      } else {
        alert("Please enter a valid name.");
      }
    }
  };

  const nameHandleFocus = () => {
    setPTextNameSwitch(true);
  };

  const nameHandleBlur = () => {
    setPTextNameSwitch(false);
  };

  const locationHandleOnKeyDown: KeyboardEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (e.key === "Enter") {
      const target = e.target as HTMLInputElement;
      if (inputValidation(target.value)) {
        setUserLocation(target.value);
        setValidLocation(true);
      } else {
        alert("Please enter a valid location");
      }
    }
  };

  const locationHandleFocus = () => {
    setPTextLocSwitch(true);
  };

  const locationHandleBlur = () => {
    setPTextLocSwitch(false);
  };

  return (
    <DiagonalDottedDiv innerDiamondSize={size}>
      <>
        <div
          className={`flex transition-opacity ease-in-out duration-100 items-center justify-center ${
            !validName ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center justify-center relative">
            <p
              className={`text-sm absolute bottom-19 transition-opacity ease-in-out ${
                !pTextNameSwitch
                  ? "opacity-40 duration-300"
                  : "opacity-0 duration-500"
              }`}
            >
              CLICK TO TYPE
            </p>
            <p
              className={`text-sm absolute bottom-19 transition-opacity ease-in-out ${
                !pTextNameSwitch
                  ? "opacity-0 duration-500"
                  : "opacity-40 duration-300"
              }`}
            >
              INTRODUCE YOURSELF
            </p>
            <input
              className="text-center text-6xl tracking-[-0.07em] placeholder-[#1A1B1C] underline underline-offset-6 decoration-1 outline-none focus:placeholder:opacity-0"
              type="text"
              placeholder="Introduce Yourself"
              defaultValue={userName || ""}
              onKeyDown={nameHandleOnKeyDown}
              onFocus={nameHandleFocus}
              onBlur={nameHandleBlur}
            />
          </div>
        </div>
        <div
          className={`absolute transition-opacity ease-in-out duration-100 ${
            !validName ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="flex flex-col items-center justify-center">
            <p
              className={`text-sm absolute bottom-19 transition-opacity ease-in-out ${
                !pTextLocSwitch
                  ? "opacity-40 duration-300"
                  : "opacity-0 duration-500"
              }`}
            >
              CLICK TO TYPE
            </p>
            <p
              className={`text-sm absolute bottom-19 transition-opacity ease-in-out ${
                !pTextLocSwitch
                  ? "opacity-0 duration-500"
                  : "opacity-40 duration-300"
              }`}
            >
              WHERE ARE YOU FROM?
            </p>
            <input
              className={`text-center text-6xl tracking-[-0.07em] placeholder-[#1A1B1C] underline underline-offset-6 decoration-1 outline-none focus:placeholder:opacity-0 ${
                !validName ? "hidden" : "visible"
              }`}
              type="text"
              placeholder="Where are you from?"
              defaultValue={userLocation || ""}
              onKeyDown={locationHandleOnKeyDown}
              onFocus={locationHandleFocus}
              onBlur={locationHandleBlur}
            />
          </div>
        </div>
      </>
    </DiagonalDottedDiv>
  );
};

export default UserInfoInput;
