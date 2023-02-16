import { Button } from "@mui/material";
import profil from "../../assets/profil.jpg";

const Profile = () => {
  return (
    <section id="Home" className="home">
      <div data-aos="fade-right" className="catch-phrase">
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
            variant="outlined"
            sx={{
              boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.03)",
              backgroundColor: "#43597d",
              borderColor: "#43597d",
              color: "#FFFFFF",
              "&:hover": {
                color: "#43597d",
                borderColor: "#43597d",
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
          <h4>Web Developper</h4>
        </div>
        <div className="iAmFree">
          <div className="pictoValid"></div>
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
