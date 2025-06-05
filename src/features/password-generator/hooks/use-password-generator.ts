import { CheckedState } from "@radix-ui/react-checkbox";
import { useState } from "react";

import { PasswordGeneratorType } from "../types/password-generator";

export function usePasswordGenerator(): PasswordGeneratorType {
  // usePassword
  const [length, setLength] = useState([0]);
  const handlerValueChange = (value: number[]) => {
    setLength(value);
  };

  // checked List
  const [checkedMap, setCheckedMap] = useState<Record<string, boolean>>({});
  const handlerChecked = (state: CheckedState, id: string) => {
    setCheckedMap((prev) => ({
      ...prev,
      [id]: state === true,
    }));
  };

  // 計算して、その計算結果
  console.log(checkedMap); // checkedMapは計算時に使用

  const resultPassword = "test-password";
  const resultStrengthColor = "default";

  const resultStrengthName =
    resultStrengthColor === "default" ? "" : resultStrengthColor;

  return {
    length: length[0],
    handlerValueChange,
    handlerChecked,
    resultPassword,
    resultStrengthColor,
    resultStrengthName,
  };
}
