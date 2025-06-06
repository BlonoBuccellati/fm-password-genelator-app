import { CheckedState } from "@radix-ui/react-checkbox";

export type StrengthType =
  | "too weak!"
  | "weak"
  | "medium"
  | "strong"
  | "default";

export type PasswordCheckOptions = "upper" | "lower" | "number" | "symbols";

export type StrengthResultType = {
  resultPassword: string;
  resultStrengthColor: StrengthType;
  resultStrengthName: string;
};

export type PasswordGeneratorType = {
  length: number;
  handlerValueChange: (value: number[]) => void;
  handlerChecked: (state: CheckedState, id: string) => void;
  handlerGenerateClick: () => void;
  result: StrengthResultType;
  isDisabled: boolean;
};
