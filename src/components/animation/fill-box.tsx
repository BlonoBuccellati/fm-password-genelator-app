import { motion, MotionProps } from "motion/react";

const FillBox = ({
  children,
  className,
  ...props
}: MotionProps & { className: string }) => {
  return (
    <motion.div
      className={className}
      initial={{ height: "0%" }}
      animate={{ height: "100%" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ originY: 0 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FillBox;
