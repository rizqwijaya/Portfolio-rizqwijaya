import { useState, useEffect, Fragment } from "react";
import { useTheme } from "./hooks.js";
import { PALETTES, applyPalette } from "./palette.js";
import CustomCursor from "./components/CustomCursor.jsx";
import Loader from "./components/Loader.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Work from "./components/Work.jsx";
import ProjectModal from "./components/ProjectModal.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useTheme();
  const [project, setProject] = useState(null);

  useEffect(() => {
    applyPalette(PALETTES[0]);
  }, []);

  return (
    <Fragment>
      <CustomCursor enabled={true} />
      {loading && <Loader onDone={() => setLoading(false)} />}
      <div className={"app" + (!loading ? " ready" : "")}>
        <Header theme={theme} setTheme={setTheme} />
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Work onOpen={setProject} />
        <Testimonials />
        <Contact />
        <Footer />
        <ProjectModal
          project={project}
          onClose={() => setProject(null)}
        />
      </div>
    </Fragment>
  );
}
