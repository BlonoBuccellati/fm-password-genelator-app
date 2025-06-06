import { cva, VariantProps } from "class-variance-authority";

import FillBox from "@/components/animation/fill-box";
import { cn } from "@/lib/utils";

import { StrengthType } from "../../types/password-generator";

export const strengthVarVariants = cva("", {
  variants: {
    color: {
      default: "bg-grey-800",
      "too weak!": "bg-red-500 outline-none",
      weak: "bg-orange-400 outline-none",
      medium: "bg-yellow-300 outline-none",
      strong: "bg-green-200 outline-none",
    } satisfies Record<StrengthType, string>,
    option: {
      outline: "outline-2 outline-grey-200 outline-offset-[-0.125rem]",
    },
    size: {
      noOutline: "w-0 h-0",
    },
  },
  defaultVariants: {
    color: "default",
  },
});
const StrengthBar = ({
  color,
}: { color: StrengthType } & VariantProps<typeof strengthVarVariants>) => {
  return (
    <div className="flex gap-100">
      {[...Array(4)].map((_, i) => {
        const defaultColor =
          (color === "too weak!" && i >= 1) ||
          (color === "weak" && i >= 2) ||
          (color === "medium" && i >= 3) ||
          color === "default";
        return (
          <div
            key={i}
            className={cn("my-[0.1875rem] h-[1.75rem] w-[0.625rem]")}
          >
            {defaultColor ? (
              <div
                className={cn(
                  "h-full w-full",
                  strengthVarVariants({ color: "default", option: "outline" }),
                )}
              />
            ) : (
              <FillBox
                // keyが変わるたびにレンダリング
                key={color}
                className={cn(strengthVarVariants({ color }))}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StrengthBar;
