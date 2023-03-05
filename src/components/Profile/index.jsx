import { Button } from "@mui/material";
import profil from "../../assets/profil.jpg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion } from "framer-motion";

const Profile = () => {
  const mentionCatchPhraseH1 = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.3, ease: [0, 0, 0.58, 1] },
    },
  };

  const motionCatchPhraseSpan = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delay: 1.5, ease: [0, 0, 0.58, 1] },
    },
  };

  const motionDevelopper = {
    hidden: { x: 30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, delay: 0.3, ease: [0, 0, 0.58, 1] },
    },
  };

  const motionIAmFree = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.5, ease: [0, 0, 0.58, 1] },
    },
  };

  const motionProfilImgWrapper = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, delay: 0.1, ease: [0, 0, 0.58, 1] },
    },
  };

  function downloadFile() {
    const fileUrl = "";
    const fileName = "CV.pdf";
    const element = document.createElement("a");
    element.href = fileUrl;
    element.download = fileName;
    element.target = "_blank";
    document.body.appendChild(element);
    element.click();
  }

  return (
    <section id="home" className="home">
      <div className="catch-phrase">
        <motion.h1
          variants={mentionCatchPhraseH1}
          initial="hidden"
          animate="visible"
          transition="transition"
        >
          Hi , I am{" "}
          <motion.span
            variants={motionCatchPhraseSpan}
            initial="hidden"
            animate="visible"
          >
            Jean-Charles
          </motion.span>
          <br /> Front-End Developper
        </motion.h1>
        <p>
          I code Web Application and <br /> I love what I do
        </p>
        <div className="homeButtons">
          <Button
            onClick={downloadFile}
            target="_blank"
            variant="outlined"
            sx={{
              boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.03)",
              backgroundColor: "none",
              borderColor: "#43597d",
              color: "#43597d",
              "&:hover": {
                color: "white",
                borderColor: "#43597d",
                backgroundColor: "#43597d",
              },
            }}
          >
            Download CV
          </Button>
          <Button
            href="mailto:jeancharlesmaurice@gmail.com"
            variant="contained"
            color="warning"
            sx={{
              boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.03)",
              backgroundColor: "#43597d",
              color: "#FFFFFF",
              "&:hover": {
                backgroundColor: "#FFA600",
              },
            }}
          >
            Hire me now
          </Button>
        </div>
      </div>
      <div className="profil">
        <motion.div
          className="profil-img_wrapper"
          variants={motionProfilImgWrapper}
          initial="hidden"
          animate="visible"
        >
          <img src={profil} alt="Profil" />
        </motion.div>
        <motion.div
          className="developper"
          variants={motionDevelopper}
          initial="hidden"
          animate="visible"
          transition="transition"
        >
          <CheckCircleIcon
            sx={{ color: "#43597d", mx: 1, fontSize: 30 }}
            className="iAmFree-picto"
          ></CheckCircleIcon>
          <div className="textWrapper">
            <h4>Web Developper</h4>
          </div>
        </motion.div>
        <motion.div
          className="iAmFree"
          variants={motionIAmFree}
          initial="hidden"
          animate="visible"
          transition="transition"
        >
          <CheckCircleIcon
            sx={{ color: "#FFA600", mx: 1, fontSize: 30 }}
            className="iAmFree-picto"
          ></CheckCircleIcon>
          <div className="textWrapper">
            <h4>Available</h4>
            <p>You can hire me now</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;
