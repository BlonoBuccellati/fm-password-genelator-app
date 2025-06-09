import { VariantProps } from "class-variance-authority";
import { ComponentType, SVGProps } from "react";

import { IconArrowRight } from "@/assets";
import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "./ui/button";

interface ButtonWithIconProps {
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
}
const ButtonWithIcon = ({
  icon: Icon = IconArrowRight,
  className,
  variant,
  children,
  ...props
}: ButtonWithIconProps &
  React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>) => {
  console.log(Icon);
  return (
    <Button
      {...props}
      variant={variant}
      className={cn("flex items-center justify-center space-x-300", className)}
    >
      <span className="block">{children}</span>
      <Icon />
    </Button>
  );
};

export default ButtonWithIcon;
