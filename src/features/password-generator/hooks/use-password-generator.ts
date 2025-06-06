import { CheckedState } from "@radix-ui/react-checkbox";
import { useEffect, useState } from "react";

import { createPassword } from "../lib/utils/create-password";
import {
  PasswordCheckOptions,
  PasswordGeneratorType,
  StrengthResultType,
} from "../types/password-generator";

export function usePasswordGenerator(): PasswordGeneratorType {
  // usePassword
  const [passwordLength, setPasswordLength] = useState([0]);
  const handlerValueChange = (value: number[]) => {
    setPasswordLength(value);
  };

  // checked List
  const [checkedMap, setCheckedMap] = useState<
    Partial<Record<PasswordCheckOptions, boolean>>
  >({});
  const handlerChecked = (state: CheckedState, id: string) => {
    setCheckedMap((prev) => ({
      ...prev,
      [id]: state === true,
    }));
  };

  // generate buttonの有効、無効
  const [isDisabled, setIsDisabled] = useState(false);
  useEffect(() => {
    const hasChecked = Object.values(checkedMap).some((val) => val);
    if (hasChecked && passwordLength[0]) {
      setIsDisabled(false);
    } else setIsDisabled(true);
  }, [checkedMap, passwordLength]);

  // 計算するときの、 状態管理
  const initialState: StrengthResultType = {
    resultPassword: "",
    resultStrengthColor: "default",
    resultStrengthName: "",
  };
  const [result, setResult] = useState<StrengthResultType>(initialState);
  const handlerGenerateClick = () => {
    const result = createPassword(passwordLength[0], checkedMap);
    setResult(result);
  };
  return {
    length: passwordLength[0],
    handlerValueChange,
    handlerChecked,
    handlerGenerateClick,
    result,
    isDisabled,
  };
}
