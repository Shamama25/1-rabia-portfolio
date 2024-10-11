import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectOne from "./Details/ProjectOne";
import ProjectTwo from "./Details/ProjectTwo";
import ProjectThree from "./Details/ProjectThree";
import ProjectFour from "./Details/ProjectFour";
import ProjectFive from "./Details/ProjectFive";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <Skills />
                <About />
                <Work />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/project-one" element={<ProjectOne />} />
          <Route path="/project-two" element={<ProjectTwo />} />
          <Route path="/project-three" element={<ProjectThree />} />
          <Route path="/project-four" element={<ProjectFour />} />
          <Route path="/project-five" element={<ProjectFive />} />
        </Routes>
      </div>
    </Router>
  );
}
