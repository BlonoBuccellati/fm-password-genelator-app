import { IconCopy } from "@/assets";
import { Input } from "@/components/ui/input";

// あとでbutton-with-iconのようにする
const TextFieldWithIcon = () => {
  return (
    <div className="relative">
      <Input placeholder="P4$5W0rD!" type="text" disabled className="w-full" />
      <IconCopy className="absolute top-1/2 right-200 -translate-y-1/2 hover:cursor-pointer" />
    </div>
  );
};

export default TextFieldWithIcon;
