// import "./App.css";
// import Header from "../components/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DesktopNav from "../components/Header/nav";
import Profile from "../components/home";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header></Header> */}
        <DesktopNav></DesktopNav>
        {/* <Routes>
          <Route exact path="/#home"></Route>
          <Route exact path="/#services"></Route>
          <Route exact path="/#testimonial"></Route>
        </Routes> */}
        <main>
          <Profile></Profile>
          <section id="home">
            <h1>About</h1>
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
