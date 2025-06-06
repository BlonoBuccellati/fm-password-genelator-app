import { Label } from "@/components/ui/label";

import { usePasswordGeneratorContext } from "../../context/password-generator-context";

import StrengthBar from "./strength-bar";

const StrengthIndicator = () => {
  const { result } = usePasswordGeneratorContext();
  const { resultStrengthColor, resultStrengthName } = result;
  return (
    <div className="flex items-center space-x-200 text-white">
      <span className="typo-label uppercase">{resultStrengthName}</span>
      <StrengthBar color={resultStrengthColor} />
    </div>
  );
};

const StrengthBox = () => {
  return (
    <div className="bg-grey-850 px-clamp-200-to-300 flex items-center justify-between py-200">
      <Label className="typo-main text-grey-600 uppercase">strength</Label>
      <StrengthIndicator />
    </div>
  );
};

export default StrengthBox;
