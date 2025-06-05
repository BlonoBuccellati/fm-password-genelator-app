import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
type SliderProps = React.ComponentProps<typeof Slider>;
export function CharacterSlider({ className, ...props }: SliderProps) {
  // 状態管理する。
  return (
    <div className={cn(className)}>
      <div className="flex items-center justify-between">
        <p className="typo-4 text-grey-200">Character Length</p>
        <span className="typo-2 block text-green-200">10</span>
      </div>
      <Slider
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
