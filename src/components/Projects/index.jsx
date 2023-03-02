import { useEffect, useState } from "react";
import Heading from "../Heading";
import axios from "axios";
import Card2 from "./Card2";
// import mokedData from "/projects.json";

const Projects = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        // const response = await axios.get("/projects.json");
        const response = await axios.get(
          "https://cadegan.github.io/Data/projects.json"
        );
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
    <section className="projects" id="projects">
      <Heading titleName={"My projects"}></Heading>
      <ul className="cards">
        {data &&
          data
            .map(
              ({ id, title, description, details, picture, gitHub, demo }) => (
                <Card2
                  id={id}
                  key={id}
                  title={title}
                  details={details}
                  description={description}
                  picture={picture}
                  gitHub={gitHub}
                  demo={demo}
                ></Card2>
              )
            )
            .reverse()}
      </ul>
    </section>
  );
};

export default Projects;
