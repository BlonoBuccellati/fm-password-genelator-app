"use client";

import { PropsWithChildren } from "react";

import { IconCopy } from "@/assets";
import TextInputWithIcon from "@/features/password-generator/components/text-input-with-icon";

import { PasswordGeneratorContext } from "../context/password-generator-context";
import { usePasswordGenerator } from "../hooks/use-password-generator";

import { CharacterSlider } from "./character-slider";
import { CheckboxList } from "./checkbox-list";
import { PasswordGeneratorButton } from "./generate-button";
import StrengthBox from "./strength-box/strength-box";

const PasswordGeneratorForm = () => {
  // TODO:zustandに変更する。
  const value = usePasswordGenerator();

  return (
    <PasswordGeneratorContext value={value}>
      <form className="space-y-clamp-200-to-300">
        <TextInputWithIcon
          toastText="Copied"
          icon={IconCopy}
          iconAriaLabel="copied"
          disabled
          placeholder="P4$5W0rD!"
        />
        <div className="bg-grey-800 space-y-200 p-200">
          <div className="space-y-400">
            <CharacterSlider className="mx-auto w-full" />
            <CheckboxList />
            <StrengthBox />
          </div>
          {/* form送信 */}
          <PasswordGeneratorButton />
        </div>
      </form>
    </PasswordGeneratorContext>
  );
};

const PasswordGeneratorTitle = ({ children }: PropsWithChildren) => {
  return <h1 className="text-grey-600 typo-title text-center">{children}</h1>;
};

const PasswordGenerator = () => {
  return (
    <main className="space-y-clamp-200-to-400 py-clamp-200-to-300 mx-auto w-[clamp(21.438rem,9.689rem+50.13vw,33.75rem)]">
      <PasswordGeneratorTitle>Password Generator</PasswordGeneratorTitle>
      <PasswordGeneratorForm />
    </main>
  );
};

export default PasswordGenerator;
