import { motion, cubicBezier } from "framer-motion";

const headingVariants = {
  hidden: {
    opacity: 0,
    // x: -50,
  },
  visible: {
    opacity: 1,
    // x: 0,
    transition: {
      duration: 0.3,
      delay: 0.4,
      ease: cubicBezier(0.17, 0.55, 0.55, 1),
    },
  },
};

const beforeVariant = {
  hidden: {
    x: -80,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 0.6,
    transition: { duration: 0.4, ease: cubicBezier(0.17, 0.55, 0.55, 1) },
  },
};

const afterVariant = {
  hidden: {
    x: 80,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 0.6,
    transition: { duration: 0.4, ease: cubicBezier(0.17, 0.55, 0.55, 1) },
  },
};

const Heading = ({ titleName }) => {
  return (
    <div className="heading-wrapper">
      <motion.div
        className="heading__before"
        variants={beforeVariant}
        initial="hidden"
        animate="visible"
      />
      <motion.div
        className="heading__text"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        <h1>{titleName}</h1>
      </motion.div>
      <motion.div
        className="heading__after"
        variants={afterVariant}
        initial="hidden"
        animate="visible"
      />
    </div>
  );
};

export default Heading;
