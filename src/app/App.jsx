import { BrowserRouter } from "react-router-dom";
import About from "../components/About";
import Skills from "../components/Skills";
import DesktopMenu from "../components/Navigation/Desktop";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import { MobileMenu } from "../components/Navigation/Mobile";

function App() {
  return (
    <>
      <BrowserRouter>
        <DesktopMenu></DesktopMenu>
        <MobileMenu></MobileMenu>
        <main>
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
