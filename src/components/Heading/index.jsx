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
      delay: 0.6,
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
    transition: { duration: 0.6, ease: cubicBezier(0.17, 0.55, 0.55, 1) },
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
    transition: { duration: 0.6, ease: cubicBezier(0.17, 0.55, 0.55, 1) },
  },
};

const Heading = ({ titleName }) => {
  return (
    <div className="heading-wrapper">
      <motion.div
        className="heading__before"
        variants={beforeVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5, margin: "0px 0px -100px 0px" }}
      />
      <motion.div
        className="heading__text"
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5, margin: "0px 0px -120px 0px" }}
      >
        <h1>{titleName}</h1>
      </motion.div>
      <motion.div
        className="heading__after"
        variants={afterVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5, margin: "0px 0px -100px 0px" }}
      />
    </div>
  );
};

export default Heading;

//v1

// import { motion, cubicBezier, useInView } from "framer-motion";
// import { useEffect, useRef } from "react";

// const headingVariants = {
//   hidden: {
//     opacity: 0,
//     // x: -50,
//   },
//   visible: {
//     opacity: 1,
//     // x: 0,
//     transition: {
//       duration: 0.3,
//       delay: 0.6,
//       ease: cubicBezier(0.17, 0.55, 0.55, 1),
//     },
//   },
// };

// const beforeVariant = {
//   hidden: {
//     x: -80,
//     opacity: 0,
//   },
//   visible: {
//     x: 0,
//     opacity: 0.6,
//     transition: { duration: 0.6, ease: cubicBezier(0.17, 0.55, 0.55, 1) },
//   },
// };

// const afterVariant = {
//   hidden: {
//     x: 80,
//     opacity: 0,
//   },
//   visible: {
//     x: 0,
//     opacity: 0.6,
//     transition: { duration: 0.6, ease: cubicBezier(0.17, 0.55, 0.55, 1) },
//   },
// };

// const Heading = ({ titleName }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, {
//     margin: "0px 0px -100px 0px",
//     amount: 0.5,
//   });

//   useEffect(() => {
//     console.log("Element is in view: ", isInView);
//   }, [isInView]);

//   return (
//     <div className="heading-wrapper" ref={ref}>
//       <motion.div
//         className="heading__before"
//         variants={beforeVariant}
//         initial={!isInView && "hidden"}
//         whileInView={isInView && "visible"}
//         // viewport={{ once: true, amount: 0.9 }}
//       />
//       <motion.div
//         className="heading__text"
//         variants={headingVariants}
//         initial={!isInView && "hidden"}
//         whileInView={isInView && "visible"}
//         // viewport={{ once: true, amount: 0.9 }}
//       >
//         <h1>{titleName}</h1>
//       </motion.div>
//       <motion.div
//         className="heading__after"
//         variants={afterVariant}
//         initial={!isInView && "hidden"}
//         whileInView={isInView && "visible"}
//         // viewport={{ once: true, amount: 0.9 }}
//       />
//     </div>
//   );
// };

// export default Heading;
