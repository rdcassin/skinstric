export interface PrevButtonProps {
  label: string;
  prevAction: () => void;
  invertImage?: boolean;
}

export interface BarCenterContentProps {
  line1: string;
  line2?: string;
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
