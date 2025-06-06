import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

import { usePasswordGeneratorContext } from "../context/password-generator-context";

type SliderProps = React.ComponentProps<typeof Slider>;

export function CharacterSlider({ className, ...props }: SliderProps) {
  const { length, handlerValueChange } = usePasswordGeneratorContext();
  return (
    <div className={cn("space-y-clamp-100-to-200", className)}>
      <div className="flex items-center justify-between">
        <p className="typo-main text-grey-200">Character Length</p>
        <span className="typo-1 block text-green-200">{length}</span>
      </div>
      <Slider
        aria-label="character length"
        onValueChange={handlerValueChange}
        value={[length]}
        orientation="horizontal"
        defaultValue={[0]}
        max={64}
        step={1}
        className={cn("w-full")}
        {...props}
      />
    </div>
  );
}
