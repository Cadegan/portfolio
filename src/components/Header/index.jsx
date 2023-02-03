import "./header.css";

import React from "react";
// import { HashLink } from "react-router-hash-link";

const LandingPage = () => {
  return (
    <header>
      <div className="logo">
        <span className="firstLetter">J</span>
        <span>ean-charles</span>
      </div>
      {/* <nav>
        <HashLink smooth to="/#home">
          About
        </HashLink>

        <HashLink smooth to="/#services">
          Services
        </HashLink>

        <HashLink smooth to="/#testimonial">
          Testimonial
        </HashLink>
      </nav> */}
    </header>
  );
};
export default LandingPage;
