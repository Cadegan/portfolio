import { BrowserRouter } from "react-router-dom";
import About from "../components/About";
import Experiences from "../components/Experiences";
import DesktopNav from "../components/Header";
import Profile from "../components/home";
import Projects from "../components/Projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <DesktopNav></DesktopNav>
        <main>
          <Profile></Profile>
          <About></About>
          <Experiences></Experiences>
          <Projects></Projects>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
