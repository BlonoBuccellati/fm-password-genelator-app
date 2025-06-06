import { motion, MotionProps } from "motion/react";

import { cn } from "@/lib/utils";

const FillBox = ({
  className,
  ...props
}: MotionProps & { className: string }) => {
  return (
    <motion.div
      className={cn("h-full w-full", className)}
      style={{ originY: 1 }}
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      {...props}
    />
  );
};

export default FillBox;
