import Heading from "../Heading";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("/src/data/logo", false, /\.(png|jpe?g|svg)$/)
);

const Experiences = () => {
  return (
    <section className="skills" id="skills">
      <Heading titleName={"Skills"} />
      <div className="skillsContainer">
        {images.map((image, index) => (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div>
      {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> */}
    </section>
  );
};

export default Experiences;
