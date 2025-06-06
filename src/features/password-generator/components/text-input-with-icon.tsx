"use client";

import { AnimatePresence } from "motion/react";
import { ComponentType, SVGProps } from "react";

import FadeInUp from "@/components/animation/fade-in-up";
import { Input } from "@/components/ui/input";
import { useCopy } from "@/features/password-generator/hooks/use-copy";
import { cn } from "@/lib/utils";

import { usePasswordGeneratorContext } from "../context/password-generator-context";

interface TextFieldToastProps {
  className?: string;
  text: string;
}
const TextFieldToast = ({ text, className }: TextFieldToastProps) => {
  return (
    <p
      className={cn(
        "typo-main bg-transparent/100 text-green-200 text-shadow-[0px_2px_2px_black]",
        className,
      )}
    >
      <span className="">{text}</span>
    </p>
  );
};

interface TextInputWithIconProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  toastText: string;
  iconAriaLabel: string;
}

const TextInputWithIcon = ({
  icon: Icon,
  toastText = "",
  iconAriaLabel = "",
  className,
  ...props
}: TextInputWithIconProps & React.ComponentProps<"input">) => {
  const { result } = usePasswordGeneratorContext();
  const { resultPassword } = result;
  const { showCopied, handlerIconClicked } = useCopy(resultPassword);

  return (
    <div className="relative">
      <Input
        value={resultPassword}
        type={props.type ?? "text"}
        className={cn(
          "px-clamp-200-to-400 pr-clamp-600-to-800 w-full",
          className,
        )}
        {...props}
      />
      {/* ここはコンポーネント化可能 absoluteは外に出す。 */}
      <div className="right-clamp-200-to-400 absolute top-1/2 flex -translate-y-1/2 items-center space-x-200">
        <AnimatePresence>
          {showCopied && (
            <FadeInUp
              exit={{
                opacity: 0,
                transition: { duration: 1, ease: "easeInOut" },
              }}
            >
              <TextFieldToast text={toastText} />
            </FadeInUp>
          )}
        </AnimatePresence>
        <button
          type="button"
          onClick={handlerIconClicked}
          aria-label={iconAriaLabel}
        >
          <Icon className="text-green-200 hover:cursor-pointer hover:text-white" />
        </button>
      </div>
    </div>
  );
};

export default TextInputWithIcon;
