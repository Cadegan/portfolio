import { Button } from "@mui/material";
import "./_cards2.css";

const Card2 = ({ title, description, details, picture, gitHub, demo }) => {
  return (
    <div className="cards__item">
      <div className="card">
        {/* <p className="card__details_text">{details}</p> */}
        <div className="card__details_text">
          {details &&
            details.map((detail, index) => <p key={index}>{detail}</p>)}
        </div>

        <div
          className="card__image"
          src={picture}
          style={{ backgroundImage: `url(${picture})` }}
        ></div>
        <div className="card__content">
          <div className="card__title">{title}</div>
          <p className="card__description_text">{description}</p>
          <div className="button__wrapper">
            <Button
              variant="contained"
              color="warning"
              href={gitHub}
              target="_blank"
              sx={{
                boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.03)",
                backgroundColor: "#43597d",
                color: "#FFFFFF",
                "&:hover": {
                  backgroundColor: "#FFA600",
                },
              }}
            >
              Github
            </Button>
            <Button
              variant="outlined"
              href={demo}
              target="_blank"
              sx={{
                boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.03)",
                backgroundColor: "none",
                borderColor: "#43597d",
                color: "#43597d",
                "&:hover": {
                  color: "white",
                  borderColor: "#FFA600",
                  backgroundColor: "#FFA600",
                },
              }}
            >
              Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
