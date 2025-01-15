import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";

import "./App.css";

import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext, useEffect } from "react";
import { themeContext } from "./Context";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Aos from "aos";
import "aos/dist/aos.css";
import Projects from "./components/Projects/Projects";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "#030712" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Skills />
      <About />

      {/* <Portfolio /> */}
      <Projects />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
