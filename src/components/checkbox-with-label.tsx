import { CheckedState } from "@radix-ui/react-checkbox";
import { PropsWithChildren } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface CheckboxWithLabelProps {
  id: string;
  onCheckedChange: (checked: CheckedState) => void;
}
const CheckboxWithLabel = ({
  id,
  onCheckedChange,
  children,
}: PropsWithChildren<CheckboxWithLabelProps>) => {
  return (
    <div className="flex space-x-300">
      <Checkbox id={id} onCheckedChange={onCheckedChange} />
      <Label htmlFor={id} className="typo-4 text-white hover:cursor-pointer">
        {children}
      </Label>
    </div>
  );
};

export default CheckboxWithLabel;
