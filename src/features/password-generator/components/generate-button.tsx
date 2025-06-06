import { IconArrowRight } from "@/assets";
import ButtonWithIcon from "@/components/button-with-icon";
import { cn } from "@/lib/utils";

import { usePasswordGeneratorContext } from "../context/password-generator-context";

export const PasswordGeneratorButton = () => {
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
