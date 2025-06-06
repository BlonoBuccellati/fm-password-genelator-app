"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as React from "react";

import { IconCheck } from "@/assets";
import { cn } from "@/lib/utils";

import FadeInUp from "../animation/fade-in-up";

function Checkbox({
  hasAnimation,
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root> & {
  hasAnimation: boolean;
}) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "outline-grey-200 size-[1.25rem] shrink-0 outline-2 outline-offset-[-0.125rem] hover:cursor-pointer data-[state=checked]:bg-green-200 data-[state=checked]:outline-none",
        className,
      )}
      {...props}
    >
      {/* 未チェック以外の状態（チェック状態と、中立の状態以外）にレンダリングされる。 */}
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current"
      >
        {hasAnimation ? (
          <FadeInUp transition={{ duration: 0.1, ease: "easeOut" }}>
            <IconCheck />
          </FadeInUp>
        ) : (
          <IconCheck />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
