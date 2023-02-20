// import "./App.css";
// import Header from "../components/Header";
// import Aos from "aos";
// import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import About from "../components/About";
import DesktopNav from "../components/Header";
import Profile from "../components/home";

function App() {
  // useEffect(() => {
  //   Aos.init();
  // });

  return (
    <>
      <BrowserRouter>
        <DesktopNav></DesktopNav>
        <main>
          <Profile></Profile>
          <About></About>
          <section id="services">
            <h1>Services</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero,
              nam! Iure officia aut esse tempore accusantium explicabo? Corporis
              deleniti ipsa fuga quas aut neque dicta nostrum laboriosam, iusto
              ullam minima est porro, totam saepe. Facilis aliquid praesentium,
              voluptates rem quibusdam sequi numquam illo eius adipisci eaque,
              necessitatibus consectetur, labore vero et ipsum. Officiis, ea
              vero. Praesentium, et. Enim, nostrum illo. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Vero, nam! Iure officia aut
              esse tempore accusantium explicabo? Corporis deleniti ipsa fuga
              quas aut neque dicta nostrum laboriosam, iusto ullam minima est
              porro, totam saepe. Facilis aliquid praesentium, voluptates rem
              quibusdam sequi numquam illo eius adipisci eaque, necessitatibus
              consectetur, labore vero et ipsum. Officiis, ea vero. Praesentium,
              et. Enim, nostrum illo.
            </p>
          </section>
          <section id="testimonial">
            <h1>Testimonial</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero,
              nam! Iure officia aut esse tempore accusantium explicabo? Corporis
              deleniti ipsa fuga quas aut neque dicta nostrum laboriosam, iusto
              ullam minima est porro, totam saepe. Facilis aliquid praesentium,
              voluptates rem quibusdam sequi numquam illo eius adipisci eaque,
              necessitatibus consectetur, labore vero et ipsum. Officiis, ea
              vero. Praesentium, et. Enim, nostrum illo. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Vero, nam! Iure officia aut
              esse tempore accusantium explicabo? Corporis deleniti ipsa fuga
              quas aut neque dicta nostrum laboriosam, iusto ullam minima est
              porro, totam saepe. Facilis aliquid praesentium, voluptates rem
              quibusdam sequi numquam illo eius adipisci eaque, necessitatibus
              consectetur, labore vero et ipsum. Officiis, ea vero. Praesentium,
              et. Enim, nostrum illo.
            </p>
          </section>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
