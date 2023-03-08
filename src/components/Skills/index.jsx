import Heading from "../Heading";
import { motion } from "framer-motion";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("/src/data/logo", false, /\.(png|jpe?g|svg)$/)
);

const skillsContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.15,
    },
  },
};

const skill = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Experiences = () => {
  return (
    <section className="skills" id="skills">
      <Heading titleName={"Skills"} />
      <motion.div
        className="skillsContainer"
        // className="container"
        variants={skillsContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25, margin: "0px 0px 0px 0px" }}
      >
        {images.map((image, index) => (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <motion.img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className="skill"
            variants={skill}
          />
        ))}
      </motion.div>
      {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> */}
    </section>
  );
};

export default Experiences;
