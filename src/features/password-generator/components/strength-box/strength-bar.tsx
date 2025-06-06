import { cva, VariantProps } from "class-variance-authority";

import FillBox from "@/components/animation/fill-box";
import { cn } from "@/lib/utils";

import { StrengthType } from "../../types/password-generator";

export const strengthVarVariants = cva("", {
  variants: {
    color: {
      default: "bg-grey-800 outline-2 outline-offset-[-2px]",
      "too weak!": "bg-red-500",
      weak: "bg-orange-400 outline-none",
      medium: "bg-yellow-300 outline-none",
      strong: "bg-green-200",
    } satisfies Record<StrengthType, string>,
    defaultOption: {
      outline: "outline-grey-200 block h-[28px] w-[10px]",
    },
  },
  defaultVariants: {
    color: "medium",
  },
});
const StrengthBar = ({
  color,
}: { color: StrengthType } & VariantProps<typeof strengthVarVariants>) => {
  return (
    <div className="flex gap-100">
      {[...Array(4)].map((_, i) => (
        // span
        <div
          key={i}
          className={cn(
            "outline-grey-200 block h-[28px] w-[10px]",
            strengthVarVariants({ color: "default" }),
          )}
        >
          <FillBox
            // keyが変わるたびにレンダリング
            key={color}
            className={cn(
              // "block h-[28px] w-[10px]",
              strengthVarVariants({ color }),
              color === "too weak!" &&
                (i === 1 || i === 2 || i == 3) &&
                strengthVarVariants({ color: "default" }),
              color === "weak" &&
                (i === 2 || i == 3) &&
                strengthVarVariants({ color: "default" }),
              color === "medium" &&
                i === 3 &&
                strengthVarVariants({ color: "default" }),
            )}
          />
        </div>
      ))}
    </div>
  );
};

export default StrengthBar;
