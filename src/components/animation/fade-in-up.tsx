import { motion, MotionProps } from "motion/react";

const FadeInUp = ({
  children,
  initial = { y: 20, opacity: 0 },
  animate = { y: 0, opacity: 1 },
  transition = { duration: 0.5, ease: "easeOut" },
  ...rest
}: MotionProps) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default FadeInUp;
