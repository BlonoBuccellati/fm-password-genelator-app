import { createContext, PropsWithChildren, useContext, useMemo } from "react";

import { usePasswordGenerator } from "../hooks/use-password-generator";
import { PasswordGeneratorType } from "../types/password-generator";

export const PasswordGeneratorContext =
  createContext<PasswordGeneratorType | null>(null);

export const PasswordGeneratorProvider = ({ children }: PropsWithChildren) => {
  const passwordGeneratorValues = usePasswordGenerator();
  // 分けたほうがいい？
  const contextValue: PasswordGeneratorType = useMemo(
    () => passwordGeneratorValues,
    [passwordGeneratorValues],
  );
  return (
    <PasswordGeneratorContext.Provider value={contextValue}>
      {children}
    </PasswordGeneratorContext.Provider>
  );
};

export const usePasswordGeneratorContext = () => {
  const ctx = useContext(PasswordGeneratorContext);
  if (!ctx)
    throw new Error(
      "usePasswordGeneratorは、PasswordGeneratorProviderの中でしか呼べません。",
    );
  return ctx;
};
