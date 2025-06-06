import { IconArrowRight } from "@/assets";
import ButtonWithIcon from "@/components/button-with-icon";
import { cn } from "@/lib/utils";

import { usePasswordGeneratorContext } from "../context/password-generator-context";

export const PasswordGeneratorButton = () => {
  const { handlerGenerateClick, isDisabled } = usePasswordGeneratorContext();
  return (
    <ButtonWithIcon
      icon={IconArrowRight}
      type="button"
      disabled={isDisabled}
      className={cn(
        isDisabled &&
          "bg-grey-700 hover:bg-grey-700 hover:text-grey-800 hover:cursor-not-allowed hover:outline-none",
      )}
      onClick={handlerGenerateClick}
    >
      generate
    </ButtonWithIcon>
  );
};
