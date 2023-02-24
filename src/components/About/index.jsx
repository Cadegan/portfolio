import { motion, useScroll, useTransform } from "framer-motion";
import Heading from "../Heading";
import profil from "../../assets/profil.jpg";
import { Button } from "@mui/material";
import { useRef } from "react";

const motionProfilImgWrapper = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, delay: 0.1, ease: [0, 0, 0.58, 1] },
  },
};

const About = () => {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // let y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section id="about">
      <Heading titleName={"About me"}></Heading>
      <div className="about_wrapper" ref={ref}>
        <div
          className="about-img_wrapper"
          variants={motionProfilImgWrapper}
          initial="hidden"
          animate="visible"
        >
          <img src={profil} alt="Profil" />
        </div>
        <motion.div
          className="about-speech"
          style={{
            y: textY,
          }}
        >
          <h1>Developing With a Passion</h1>
          <p>
            With 11 years of experience in administration/HR and IT fields, I
            have had the opportunity to manage various web development projects
            that have strengthened my passion for this sector and fueled my
            determination to pursue a career in this field.
          </p>
          <Button
            variant="contained"
            color="warning"
            sx={{
              boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.03)",
              backgroundColor: "#FFA600",
              m: 2,
            }}
          >
            Contact me
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

//

// import {
//   motion,
//   cubicBezier,
//   useScroll,
//   useTransform,
//   useMotionValue,
// } from "framer-motion";
// import Heading from "../Heading";
// import profil from "../../assets/profil.jpg";
// import { Button } from "@mui/material";

// const motionProfilImgWrapper = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { duration: 0.3, delay: 0.1, ease: [0, 0, 0.58, 1] },
//   },
// };

// const cardVariants = {
//   offscreen: {
//     y: 300,
//   },
//   onscreen: {
//     y: 50,
//     rotate: -10,
//     transition: {
//       type: "spring",
//       bounce: 0.4,
//       duration: 0.8,
//     },
//   },
// };

// const About = () => {
//   const { scrollY } = useScroll();
//   const y1 = useMotionValue(0);
//   const y2 = useTransform(scrollY, [0, 1000], [0, -150]);

//   return (
//     <section id="about">
//       <Heading titleName={"About me"}></Heading>
//       <div
//         className="about_wrapper"
//         variants={cardVariants}
//         initial="offscreen"
//         whileinview="onscreen"
//         viewport={{ once: true, amount: 0.8 }}
//       >
//         <motion.div
//           className="box"
//           // style={{ y: y1, x: -50 }}
//         />
//         {/* <motion.div
//           className="box"
//           style={{ y: y2, x: 50, background: "salmon" }}
//         /> */}
//         {/* <motion.div
//           className="box"
//           style={{ y: y2, background: "blue" }}
//           // whileInView={{ y: y2, background: "blue" }}
//           viewport={{ amount: 1, margin: "-50px" }}
//           // viewport={{ once: true, amount: 0.5, margin: "0px 0px 0px 0px" }}
//         /> */}
//         <motion.div
//           className="about-img_wrapper"
//           variants={motionProfilImgWrapper}
//           initial="hidden"
//           animate="visible"
//         >
//           <img src={profil} alt="Profil" />
//         </motion.div>
//         <motion.div className="about-speech">
//           <h1>Developing With a Passion</h1>
//           <p>
//             With 11 years of experience in administration/HR and IT fields, I
//             have had the opportunity to manage various web development projects
//             that have strengthened my passion for this sector and fueled my
//             determination to pursue a career in this field.
//           </p>
//           <Button
//             variant="contained"
//             color="warning"
//             sx={{
//               boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.03)",
//               backgroundColor: "#FFA600",
//               m: 2,
//             }}
//           >
//             Contact me
//           </Button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;
