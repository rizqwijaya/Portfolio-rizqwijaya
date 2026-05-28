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
import TweaksPanel from "./components/TweaksPanel.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useTheme();
  const [project, setProject] = useState(null);
  const [palette, setPaletteState] = useState(() => {
    try {
      const raw = localStorage.getItem("portfolio-palette");
      if (raw) {
        const v = JSON.parse(raw);
        if (Array.isArray(v) && v.length >= 2) return v;
      }
    } catch (e) {}
    return PALETTES[0];
  });
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    applyPalette(palette);
    try {
      localStorage.setItem("portfolio-palette", JSON.stringify(palette));
    } catch (e) {}
  }, [palette]);

  return (
    <Fragment>
      <CustomCursor enabled={cursor} />
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
        <TweaksPanel
          palette={palette}
          setPalette={setPaletteState}
          theme={theme}
          setTheme={setTheme}
          cursor={cursor}
          setCursor={setCursor}
          onReplay={() => setLoading(true)}
        />
      </div>
    </Fragment>
  );
}
