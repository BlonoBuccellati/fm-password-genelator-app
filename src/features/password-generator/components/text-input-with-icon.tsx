"use client";

import { ComponentType, SVGProps } from "react";

import { Input } from "@/components/ui/input";
import { useToast } from "@/features/password-generator/hooks/use-toast";
import { cn } from "@/lib/utils";

interface TextFieldToastProps {
  className?: string;
  text: string;
}
const TextFieldToast = ({ text, className }: TextFieldToastProps) => {
  return <p className={cn("typo-4 text-green-200", className)}>{text}</p>;
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
  const { showCopied, handlerIconClicked } = useToast();

  return (
    <div className="relative">
      <Input
        type={props.type ?? "text"}
        className={cn("w-full", className)}
        {...props}
      />
      {/* ここはコンポーネント化可能 absoluteは外に出す。 */}
      <div className="absolute top-1/2 right-200 flex -translate-y-1/2 items-center space-x-200">
        {/* アニメーションつけたい */}
        {showCopied && <TextFieldToast text={toastText} />}
        {/* アクティブ状態の時に、白くする。 */}
        <Icon
          className="text-green-200 hover:cursor-pointer hover:text-white"
          aria-label={iconAriaLabel}
          role="button"
          onClick={handlerIconClicked}
        />
      </div>
    </div>
  );
};

export default TextInputWithIcon;
