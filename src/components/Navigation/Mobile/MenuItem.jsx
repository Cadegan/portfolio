import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ icon, text, isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.li
          variants={variants}
          key={icon}
          initial={{
            y: 50,
            opacity: 0,
          }}
          exit={{
            y: 50,
            opacity: 0,
            transition: {
              y: { stiffness: 1000 },
            },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="icon-placeholder">
            <img src={icon} alt="" />
          </div>
          <div className="text-placeholder">{text}</div>
        </motion.li>
      )}
    </AnimatePresence>
  );
};
