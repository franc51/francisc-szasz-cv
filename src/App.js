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
              <Intro />
              <div className="main_container">
                <About />
                <Skills />
              </div>
              <hr />
              <Projects />
              <hr />
              <Testimonials />
              <hr />
              <Faq />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
