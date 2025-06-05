import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

import { StrengthType } from "../types/password-generator";

export const strengthVarVariants = cva("", {
  variants: {
    color: {
      default: "bg-grey-800 outline-2 outline-offset-[-2px] outline-grey-200",
      "too weak!": "bg-red-500",
      weak: "bg-orange-400",
      medium: "bg-yellow-300",
      strong: "bg-green-200",
    } satisfies Record<StrengthType["resultStrength"], string>,
  },
  defaultVariants: {
    color: "medium",
  },
});
const StrengthBar = ({
  color,
}: { color: StrengthType["resultStrength"] } & VariantProps<
  typeof strengthVarVariants
>) => {
  return (
    <div className="flex gap-100">
      {[...Array(4)].map((_, i) => (
        <span
          key={i}
          className={cn(
            "block h-[28px] w-[10px]",
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
      ))}
    </div>
  );
};

export default StrengthBar;
