"use client";

import CheckboxWithLabel from "@/components/checkbox-with-label";

import { usePasswordGeneratorContext } from "../context/password-generator-context";

export const CheckboxList = () => {
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
