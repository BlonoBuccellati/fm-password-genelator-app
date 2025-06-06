"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";

import { cn } from "@/lib/utils";

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max],
  );

  const handlePointerUp = (e: React.PointerEvent<HTMLSpanElement>) => {
    e.currentTarget.blur();
  };

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "data-[orientation=horizontal]:h-[28 relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50",
        className,
      )}
      {...props}
    >
      {/* 棒 */}
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "bg-grey-850 relative grow overflow-hidden data-[orientation=horizontal]:h-100 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-200",
        )}
      >
        {/* 左側の棒 */}
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "absolute bg-green-200 data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full",
          )}
        />
      </SliderPrimitive.Track>
      {/* 玉 */}
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="bg-grey-200 hover:bg-grey-850 block size-[1.75rem] shrink-0 rounded-full shadow-sm hover:cursor-pointer hover:ring-2 hover:ring-green-200 active:ring-2 active:ring-green-200"
          onPointerUp={handlePointerUp}
        />
      ))}
    </SliderPrimitive.Root>
  );
}

export { Slider };
