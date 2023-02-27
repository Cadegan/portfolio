import { Button } from "@mui/material";
import "./_cards2.css";

const Card2 = ({ title, description, details, picture, gitHub, demo }) => {
  return (
    <li className="cards__item">
      <div className="card">
        <p className="card__details_text">
          hgsvdfghsvvhgsvhfgvshgfvshgvfhgsvfhgsvfhgsvdfhgdfhgvshgvfhgsdf
        </p>
        {/* <div className="card__details">
          <p className="card_details_text">
            hgsvdfghsvvhgsvhfgvshgfvshgvfhgsvfhgsvfhgsvdfhgdfhgvshgvfhgsdf
          </p>
        </div> */}
        <div
          className="card__image"
          src={picture}
          style={{ backgroundImage: `url(${picture})` }}
        ></div>
        <div className="card__content">
          <div className="card__title">{title}</div>
          <p className="card__text">{description}</p>
          <div className="button__wrapper">
            <Button size="small" color="primary" href={gitHub} target="_blank">
              Github
            </Button>
            <Button size="small" color="primary" href={demo} target="_blank">
              Demo
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card2;
