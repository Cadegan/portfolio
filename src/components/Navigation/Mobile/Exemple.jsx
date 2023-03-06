import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
// import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./HamburgerMenu";
import { Navigation } from "./Navigation";
import "./styles.css";

const sidebar = {
  closed: {
    backgroundColor: "#FFA600",
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "tween",
      stiffness: 400,
      damping: 40,
    },
  },
  open: (height = 100) => ({
    backgroundColor: "#43597d",
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "tween",
      stiffness: 20,
      restDelta: 2,
    },
  }),
};

export const Example = () => {
  const [isVisible, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  // const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isVisible ? "open" : "closed"}
      // custom={height}
      ref={containerRef}
      className="mobileNavContainer"
    >
      <MenuToggle toggle={toggleOpen} />
      <Navigation isVisible={isVisible} />
      <motion.div className="background" variants={sidebar} />
    </motion.nav>
  );
};
