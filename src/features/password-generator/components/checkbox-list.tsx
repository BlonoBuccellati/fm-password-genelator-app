"use client";

import CheckboxWithLabel from "@/components/checkbox-with-label";

import { usePasswordGeneratorContext } from "../context/password-generator-context";
import { PasswordCheckOptions } from "../types/password-generator";

export const CheckboxList = () => {
  const checkboxList: { label: string; id: PasswordCheckOptions }[] = [
    { label: "Include Uppercase Letters", id: "upper" },
    { label: "Include Lowercase Letters", id: "lower" },
    { label: "Include Numbers", id: "number" },
    { label: "Include Symbols", id: "symbols" },
  ];
  const { handlerChecked } = usePasswordGeneratorContext();

  return (
    <div className="space-y-200">
      {checkboxList.map((checkbox) => (
        <CheckboxWithLabel
          aria-label="include character type"
          hasAnimation
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
