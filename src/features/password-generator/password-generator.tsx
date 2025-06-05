import { IconArrowRight } from "@/assets";
import ButtonWithIcon from "@/components/button-with-icon";
import CheckboxWithLabel from "@/components/checkbox-with-label";
import TextFieldWithIcon from "@/components/text-field-with-icon";

import { CharacterSlider } from "./character-slider";
import StrengthBox from "./strength-box";

const CheckboxList = () => {
  return (
    <div className="space-y-200">
      <CheckboxWithLabel id="upper">
        Include Uppercase Letters
      </CheckboxWithLabel>
      <CheckboxWithLabel id="lower">
        Include Lowercase Letters
      </CheckboxWithLabel>
      <CheckboxWithLabel id="num">Include Numbers</CheckboxWithLabel>
      <CheckboxWithLabel id="symbol">Include Symbols</CheckboxWithLabel>
    </div>
  );
};

const PasswordGenerator = () => {
  return (
    <main className="mx-auto max-w-[343px]">
      <h1 className="text-grey-600 typo-4">Password Generator</h1>
      <div className="space-y-200">
        <TextFieldWithIcon />
        <div className="bg-grey-800 space-y-200 p-200">
          <div className="space-y-400">
            <CharacterSlider className="mx-auto w-full" />
            <CheckboxList />
            <StrengthBox />
          </div>
          <ButtonWithIcon icon={IconArrowRight}>generate</ButtonWithIcon>
        </div>
      </div>
    </main>
  );
};

export default PasswordGenerator;
