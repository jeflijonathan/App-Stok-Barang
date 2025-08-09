import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface AppearZoomInProps {
  children: React.ReactNode;
  className?: string;
  trigger?: boolean;
  duration?: number;
  delay?: number;
  scaleFrom?: number;
}

const AppearZoomIn = ({
  children,
  className,
  trigger = true,
  duration = 0.3,
  delay = 0,
  scaleFrom = 0.95,
}: AppearZoomInProps) => {
  return (
    <AnimatePresence>
      {trigger && (
        <motion.div
          className={className}
          initial={{ scale: scaleFrom, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: { duration, delay, ease: "easeOut" },
          }}
          exit={{
            scale: scaleFrom,
            opacity: 0,
            transition: { duration, ease: "easeIn" },
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AppearZoomIn;
