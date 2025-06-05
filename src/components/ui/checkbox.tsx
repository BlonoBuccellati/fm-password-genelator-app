"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as React from "react";

import { IconCheck } from "@/assets";
import { cn } from "@/lib/utils";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "outline-grey-200 size-[20px] shrink-0 outline-2 outline-offset-[-2px] hover:cursor-pointer data-[state=checked]:bg-green-200 data-[state=checked]:outline-none",
        className,
      )}
      {...props}
    >
      {/* 未チェック以外の状態（チェック状態と、中立の状態以外）にレンダリングされる。 */}
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current"
      >
        <IconCheck />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
