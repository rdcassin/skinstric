export interface UserRace {
  black?: number;
  white?: number;
  southeastAsian?: number;
  southAsian?: number;
  latinoHispanic?: number;
  eastAsian?: number;
  middleEastern?: number;
}

export interface UserAge {
  "20-29"?: number;
  "30-39"?: number;
  "40-49"?: number;
  "10-19"?: number;
  "50-59"?: number;
  "3-9"?: number;
  "60-69"?: number;
  "70+"?: number;
  "0-2"?: number;
}

export interface UserGender {
  male?: number;
  female?: number;
}
export interface UserData {
  race: UserRace;
  age: UserAge;
  gender: UserGender;
}

export interface PrevButtonProps {
  label: string;
  prevAction: () => void;
  invertImage?: boolean;
}

export interface BarCenterContentProps {
  line1: string;
  line2?: string;
  grey?: boolean;
}

export interface NextButtonProps {
  label: string;
  nextAction?: () => void;
  invertImage?: boolean;
}

export interface DemoOutputChangeProps {
    label1: string;
    action1: () => void;
    label2: string;
    action2: () => void;
}

export interface BarProps {
  subComponent1: PrevButtonProps;
  subComponent2?: BarCenterContentProps;
  subComponent3?: NextButtonProps;
  subComponent4?: DemoOutputChangeProps;
}
