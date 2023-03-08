import { cubicBezier, motion, useScroll, useTransform } from "framer-motion";
import Heading from "../Heading";
import profil from "../../assets/profil.jpg";
import { Button } from "@mui/material";
import { useRef } from "react";

const motionAboutWrapper = {
  hidden: {
    y: 0,
    opacity: 0,
  },
  visible: {
    y: -40,
    opacity: 1,
    transition: {
      duration: 1,
      ease: cubicBezier(0.17, 0.55, 0.55, 1),
    },
  },
};

const motionProfilImgWrapper = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: [0, 0, 0.58, 1] },
  },
};

const About = () => {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0.1, 1], ["20%", "-20%"]);

  return (
    <section className="about" id="about">
      <Heading titleName={"About me"}></Heading>
      <motion.div
        className="about_wrapper"
        ref={ref}
        variants={motionAboutWrapper}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.25,
          margin: "0px 0px 0px 0px",
        }}
      >
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
            href="mailto:jeancharlesmaurice@gmail.com"
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
      </motion.div>
    </section>
  );
};

export default About;
