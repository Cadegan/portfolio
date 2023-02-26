import { useEffect, useState } from "react";
import Heading from "../Heading";
import ActionAreaCard from "./Card";
import axios from "axios";
// import mokedData from "/projects.json";

const Projects = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/projects.json");
        const data = await response.data;
        setData(data.project);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <section className="projects">
      <Heading titleName={"My projects"}></Heading>
      <div className="projectsContainer">
        {data &&
          data.map(({ id, title, description, picture, gitHub, demo }) => (
            <ActionAreaCard
              id={id}
              key={id}
              title={title}
              description={description}
              picture={picture}
              gitHub={gitHub}
              demo={demo}
            ></ActionAreaCard>
          ))}
      </div>

      <p>
        https://github.com/Cadegan/portfolio.git
        (https://cadegan.github.io/portfolio/)
        https://github.com/Cadegan/projet14-Wealth_Health_modal.git
        (https://cadegan.github.io/projet14-Wealth_Health_modal)
        https://github.com/Cadegan/p13-bank.git
        https://github.com/Cadegan/sportsee.git https://github.com/Cadegan/kassa
        (https://cadegan.github.io/kassa)
        https://github.com/Cadegan/P11-front-end-search-engine.git
        (https://cadegan.github.io/P11-front-end-search-engine/)
        https://github.com/Cadegan/Front-End-Fisheye.git
        (https://cadegan.github.io/Front-End-Fisheye/index.html)
        https://github.com/Cadegan/JeanCharlesMaurice_4_GameOn-website-FR.git
        (https://cadegan.github.io/JeanCharlesMaurice_4_GameOn-website-FR/)
        https://github.com/Cadegan/JeanCharlesMaurice_3_02122021.git
        (https://cadegan.github.io/JeanCharlesMaurice_3_02122021/)
        https://github.com/Cadegan/projet2.git
        (https://cadegan.github.io/projet2/)
      </p>
    </section>
  );
};

export default Projects;
