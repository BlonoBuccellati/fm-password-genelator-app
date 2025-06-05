import { CheckedState } from "@radix-ui/react-checkbox";

export interface StrengthType {
  resultStrength: "too weak!" | "weak" | "medium" | "strong" | "default";
}
export interface PasswordGeneratorType {
  length: number;
  handlerValueChange: (value: number[]) => void;
  handlerChecked: (state: CheckedState, id: string) => void;
  resultPassword: string;
  resultStrengthColor: StrengthType["resultStrength"];
  resultStrengthName: string;
}
