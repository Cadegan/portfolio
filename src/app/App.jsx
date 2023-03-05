import { BrowserRouter } from "react-router-dom";
import About from "../components/About";
import Skills from "../components/Skills";
import DesktopNav from "../components/Navigation";
import Profile from "../components/home";
import Projects from "../components/Projects";
import { Example } from "../components/Navigation/Mobile/Exemple";

function App() {
  return (
    <>
      <BrowserRouter>
        <DesktopNav></DesktopNav>

        <main>
          <Example></Example>
          <Profile></Profile>
          <About></About>
          <Skills></Skills>
          <Projects></Projects>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
