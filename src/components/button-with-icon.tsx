import { VariantProps } from "class-variance-authority";
import { ComponentType, SVGProps } from "react";

import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "./ui/button";

interface ButtonWithIconProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}
const ButtonWithIcon = ({
  icon: Icon,
  className,
  variant,
  children,
  ...props
}: ButtonWithIconProps &
  React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>) => {
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
