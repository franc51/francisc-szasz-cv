import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Testimonials from "./components/testimonials/Testimonials";
import Faq from "./components/faq/Faq";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Reveal from "./Reveal";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/*"
          element={
            <>
              <Navigation />
              <Reveal>
                <Intro />
              </Reveal>
              <div className="main_container">
                <Reveal>
                  <About />
                </Reveal>
                <Reveal>
                  <Skills />
                </Reveal>
              </div>
              <hr />
              <Reveal>
                <Projects />
              </Reveal>
              <hr />
              <Reveal>
                <Testimonials />
              </Reveal>
              <hr />
              <Reveal>
                <Faq />
              </Reveal>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
