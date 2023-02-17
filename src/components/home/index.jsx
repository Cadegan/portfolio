import { Button } from "@mui/material";
import profil from "../../assets/profil.jpg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Profile = () => {
  return (
    <section id="Home" className="home">
      <div className="catch-phrase">
        <h1>
          Hi , I am <span>Jean-Charles</span> <br /> Front-End Developper
        </h1>
        <p>
          I code Web Application and <br /> I love what I do
        </p>
        <div className="buttons">
          <Button
            variant="outlined"
            sx={{
              boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.03)",
              backgroundColor: "white",
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
        <div className="profil-img_wrapper">
          <img src={profil} alt="Profil" />
        </div>
        <div className="developper">
          <CheckCircleIcon
            sx={{ color: "#43597d", mx: 1, fontSize: 30 }}
            className="iAmFree-picto"
          ></CheckCircleIcon>
          <div className="textWrapper">
            <h4>Web Developper</h4>
          </div>
        </div>
        <div className="iAmFree">
          <CheckCircleIcon
            sx={{ color: "#FFA600", mx: 1, fontSize: 30 }}
            className="iAmFree-picto"
          ></CheckCircleIcon>
          <div className="textWrapper">
            <h4>Available</h4>
            <p>You can hire me now</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
