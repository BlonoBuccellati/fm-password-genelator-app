"use client";

import { PropsWithChildren } from "react";

import { IconArrowRight, IconCopy } from "@/assets";
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

const PasswordGeneratorForm = () => {
  return (
    <form className="space-y-200">
      {/* TODO:state管理。character length,checkboxを見て決定 */}
      <TextFieldWithIcon
        icon={IconCopy}
        iconAriaLabel="copied"
        disabled
        placeholder="P4$5W0rD!"
      />
      <div className="bg-grey-800 space-y-200 p-200">
        <div className="space-y-400">
          {/* TODO:state管理 */}
          <CharacterSlider className="mx-auto w-full" />
          <CheckboxList />
          {/* TODO:state管理。character length,checkboxを見て決定 */}
          <StrengthBox />
        </div>
        {/* form送信 */}
        <ButtonWithIcon icon={IconArrowRight} type="button">
          generate
        </ButtonWithIcon>
      </div>
    </form>
  );
};

const PasswordGeneratorTitle = ({ children }: PropsWithChildren) => {
  return <h1 className="text-grey-600 typo-4 text-center">{children}</h1>;
};

const PasswordGenerator = () => {
  return (
    <main className="mx-auto max-w-[343px] space-y-200">
      <PasswordGeneratorTitle>Password Generator</PasswordGeneratorTitle>
      <PasswordGeneratorForm />
    </main>
  );
};

export default PasswordGenerator;
