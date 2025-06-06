import {
  StrengthResultType,
  StrengthType,
} from "../../types/password-generator";

export function createPassword(
  passwordLength: number,
  checkedMap: Record<string, boolean>,
): StrengthResultType {
  const checkedItems = Object.keys(checkedMap).filter((key) => checkedMap[key]);
  const resultStrengthColor = getStrengthType(
    passwordLength,
    checkedItems.length,
  );
  const resultPassword = "test-password";

  const resultStrengthName =
    resultStrengthColor === "default" ? "" : resultStrengthColor;

  return { resultPassword, resultStrengthColor, resultStrengthName };
}

const getStrengthType = (
  passwordLength: number,
  numberOfCheckedItems: number,
): StrengthType => {
  // 強度	条件の例
  // Too Weak	6文字未満、または1種類以下の構成（例：abcdef, 123456）
  // Weak	6文字以上だが、以下のうち2つ以下しか満たしていない
  // Medium	8文字以上で、以下のうち3つ以上を満たす
  // Strong	10文字以上で、以下すべてを満たす
  if (passwordLength === 0 || numberOfCheckedItems === 0) {
    return "default";
  }
  if (passwordLength >= 10 && numberOfCheckedItems >= 4) {
    return "strong";
  }
  if (passwordLength >= 8 && numberOfCheckedItems >= 3) {
    return "medium";
  }
  if (passwordLength >= 6 || numberOfCheckedItems <= 2) {
    return "weak";
  }
  return "too weak!";
};

const generatePassword = (passwordLength: number, checkedItems: string[]) => {
  return "";
};
