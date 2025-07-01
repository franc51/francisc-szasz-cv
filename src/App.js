import "./App.css";
import Navigation from "./components/navigation/Navigation";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div>
      <Navigation />
      <Intro />
      <div className="main_container">
        <About />
        <Skills />
      </div>
      <hr></hr>
      <Projects />
    </div>
  );
}

export default App;
