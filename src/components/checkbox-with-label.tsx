import { CheckedState } from "@radix-ui/react-checkbox";
import { PropsWithChildren } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface CheckboxWithLabelProps {
  id: string;
  hasAnimation: boolean;
  onCheckedChange: (checked: CheckedState) => void;
}
const CheckboxWithLabel = ({
  id,
  hasAnimation,
  onCheckedChange,
  children,
  ...props
}: PropsWithChildren<CheckboxWithLabelProps> &
  React.ComponentProps<typeof Checkbox>) => {
  return (
    <div className="flex space-x-300">
      <Checkbox
        {...props}
        id={id}
        onCheckedChange={onCheckedChange}
        hasAnimation={hasAnimation}
      />
      <Label htmlFor={id} className="main text-white hover:cursor-pointer">
        {children}
      </Label>
    </div>
  );
};

export default CheckboxWithLabel;
