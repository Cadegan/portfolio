import { Button } from "@mui/material";
import profil from "../../assets/profil.jpg";

const Profile = () => {
  return (
    <section id="Home" className="home">
      <div className="catch-phrase">
        <h1>
          Hi , I am Jean-Charles <br /> <span>Front-End Developper</span>
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
        <img src={profil} alt="" srcset="" />
        <div className="developper">
          <div>
            <h4>Web Developper</h4>
            <p>Creatives Websites for you </p>
          </div>
        </div>
        <div className="freelancer">
          <div>
            <h4>Freelancer</h4>
            <p>You can hire me now</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;