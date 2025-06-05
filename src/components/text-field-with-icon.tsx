"use client";

import { ComponentType, SVGProps, useState } from "react";
import { Toaster } from "sonner";

import { Input } from "@/components/ui/input";

import { cn } from "../lib/utils";

import { ToasterDemo } from "./ui/sonner";

interface TextFieldWithIconProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  iconAriaLabel?: string;
}

const TextFieldWithIcon = ({
  icon: Icon,
  iconAriaLabel = "",
  className,
  ...props
}: TextFieldWithIconProps & React.ComponentProps<"input">) => {
  const [showCopied, setShowCopied] = useState(false);
  const handlerIconClicked = () => {
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  return (
    <div className="relative">
      <Input
        type={props.type ?? "text"}
        className={cn("w-full", className)}
        {...props}
      />
      {/* ここはコンポーネント化可能 absoluteは外に出す。 */}
      <div className="absolute top-1/2 right-200 flex -translate-y-1/2 items-center space-x-200">
        {/* ここもコンポーネント化可能 */}
        {/* アニメーションつけたい */}
        <p
          className={cn("typo-4 hidden text-green-200", showCopied && "block")}
        >
          Copied
        </p>
        <Icon
          className="hover:cursor-pointer"
          aria-label={iconAriaLabel}
          role="button"
          onClick={handlerIconClicked}
        />
      </div>
    </div>
  );
};

export default TextFieldWithIcon;
