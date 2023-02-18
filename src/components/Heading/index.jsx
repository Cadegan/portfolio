const Heading = ({ titleName }) => {
  return (
    <>
      <div className="headingBefore"></div>
      <h2 className="heading">{titleName}</h2>
      <div className="headingAfter"></div>
    </>
  );
};

export default Heading;
