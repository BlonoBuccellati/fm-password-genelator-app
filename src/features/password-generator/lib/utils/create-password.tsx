import {
  PasswordCheckOptions,
  StrengthResultType,
  StrengthType,
} from "../../types/password-generator";

export function createPassword(
  passwordLength: number,
  checkedMap: Partial<Record<PasswordCheckOptions, boolean>>,
): StrengthResultType {
  const checkedKeys = Object.keys(checkedMap) as PasswordCheckOptions[];
  const checkedItems = checkedKeys.filter((key) => checkedMap[key]);

  const resultStrengthColor = getStrengthType(
    passwordLength,
    checkedItems.length,
  );
  const resultPassword = generatePasswordArr(passwordLength, checkedItems).join(
    "",
  );

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
  if (passwordLength >= 6 && numberOfCheckedItems >= 2) {
    return "weak";
  }
  return "too weak!";
};

// 再帰関数
const UPPERCASE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE_CHARS = "abcdefghijklmnopqrstuvwxyz";
const NUMBER_CHARS = "0123456789";
const SYMBOL_CHARS = "!@#$%^&*()-_=+[]{}|;:,.<>/?"; // お好みで編集可

const generatePasswordArr = (
  passwordLength: number,
  checkedItems: PasswordCheckOptions[],
  currentPassword: string[] = [],
) => {
  const allAvailableChars = getAllAvailableChars(checkedItems);

  if (passwordLength === 0 || checkedItems.length === 0) return currentPassword;

  // 最初に、checkedItemsを全て含んでおく。
  if (currentPassword.length === 0) {
    if (checkedItems.includes("upper")) {
      currentPassword.push(pickRandomChar(UPPERCASE_CHARS));
    }
    if (checkedItems.includes("lower")) {
      currentPassword.push(pickRandomChar(LOWERCASE_CHARS));
    }
    if (checkedItems.includes("number")) {
      currentPassword.push(pickRandomChar(NUMBER_CHARS));
    }
    if (checkedItems.includes("symbols")) {
      currentPassword.push(pickRandomChar(SYMBOL_CHARS));
    }
  }
  currentPassword.push(pickRandomChar(allAvailableChars));

  return generatePasswordArr(passwordLength - 1, checkedItems, currentPassword);
};

const pickRandomChar = (charTypes: string): string => {
  const idx = Math.floor(Math.random() * charTypes.length);
  return charTypes[idx];
};

const getAllAvailableChars = (checkedItems: PasswordCheckOptions[]): string => {
  let allAvailableChars = "";
  if (checkedItems.includes("upper")) {
    allAvailableChars += UPPERCASE_CHARS;
  }
  if (checkedItems.includes("lower")) {
    allAvailableChars += LOWERCASE_CHARS;
  }
  if (checkedItems.includes("number")) {
    allAvailableChars += NUMBER_CHARS;
  }
  if (checkedItems.includes("symbols")) {
    allAvailableChars += SYMBOL_CHARS;
  }
  return allAvailableChars;
};
