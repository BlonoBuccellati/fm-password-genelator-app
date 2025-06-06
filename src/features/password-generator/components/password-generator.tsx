"use client";

import { PropsWithChildren } from "react";

import { IconArrowRight, IconCopy } from "@/assets";
import ButtonWithIcon from "@/components/button-with-icon";
import CheckboxWithLabel from "@/components/checkbox-with-label";
import TextInputWithIcon from "@/features/password-generator/components/text-input-with-icon";
import { cn } from "@/lib/utils";

import {
  PasswordGeneratorContext,
  usePasswordGeneratorContext,
} from "../context/password-generator-context";
import { usePasswordGenerator } from "../hooks/use-password-generator";

import { CharacterSlider } from "./character-slider";
import StrengthBox from "./strength-box";

const PasswordGenerateButton = () => {
  const { handlerGenerateClick } = usePasswordGeneratorContext();
  return (
    <ButtonWithIcon
      icon={IconArrowRight}
      type="button"
      className={cn()}
      onClick={handlerGenerateClick}
    >
      generate
    </ButtonWithIcon>
  );
};
const CheckboxList = () => {
  // これidが重要になるから型定義かなんかするかも。
  const checkboxList = [
    { label: "Include Uppercase Letters", id: "upper" },
    { label: "Include Lowercase Letters", id: "lower" },
    { label: "Include Numbers", id: "num" },
    { label: "Include Symbols", id: "symbol" },
  ];
  const { handlerChecked } = usePasswordGeneratorContext();

  return (
    <div className="space-y-200">
      {checkboxList.map((checkbox) => (
        <CheckboxWithLabel
          key={checkbox.id}
          id={checkbox.id}
          onCheckedChange={(state) => handlerChecked(state, checkbox.id)}
        >
          {checkbox.label}
        </CheckboxWithLabel>
      ))}
    </div>
  );
};

const PasswordGeneratorForm = () => {
  const value = usePasswordGenerator();
  return (
    <PasswordGeneratorContext value={value}>
      <form className="space-y-200">
        {/* TODO:state管理。character length,checkboxを見て決定 */}
        <TextInputWithIcon
          toastText="Copied"
          icon={IconCopy}
          iconAriaLabel="copied"
          disabled
          placeholder="P4$5W0rD!"
        />
        <div className="bg-grey-800 space-y-200 p-200">
          <div className="space-y-400">
            {/* TODO:state管理。sliderの値はリフトアップする。 */}
            <CharacterSlider className="mx-auto w-full" />
            {/* TODO:state管理。sliderの値はリフトアップする。 */}
            <CheckboxList />
            {/* TODO:stateを渡す。character length,checkboxを見て決定 */}
            <StrengthBox />
          </div>
          {/* form送信 */}
          <PasswordGenerateButton />
        </div>
      </form>
    </PasswordGeneratorContext>
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
