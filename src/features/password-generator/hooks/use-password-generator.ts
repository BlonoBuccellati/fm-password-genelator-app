import { CheckedState } from "@radix-ui/react-checkbox";
import { useState } from "react";

import { createPassword } from "../lib/utils/create-password";
import {
  PasswordGeneratorType,
  StrengthResultType,
} from "../types/password-generator";

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
  // チェックの数と、charlengthの組み合わせで、strengthと、passwordが決定する。
  console.log(checkedMap); // checkedMapは計算時に使用

  // 計算するときの、 状態管理
  const initialState: StrengthResultType = {
    resultPassword: "",
    resultStrengthColor: "default",
    resultStrengthName: "",
  };
  const [result, setResult] = useState<StrengthResultType>(initialState);
  const handlerGenerateClick = () => {
    const result = createPassword(length[0], checkedMap);
    setResult(result);
  };
  return {
    length: length[0],
    handlerValueChange,
    handlerChecked,
    handlerGenerateClick,
    result,
  };
}
