import { useReveal } from "../hooks.js";
import MagneticButton from "./MagneticButton.jsx";
import Lanyard from "./Lanyard.jsx";

export default function About() {
  const ref = useReveal();
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="about" className="section">
      <div ref={ref} className="reveal">
        <div className="section-label">
          <span className="section-num">01</span> About Me
        </div>
        <div className="about-grid">
          <div className="about-left">
            <h2 className="about-title">
              Engineer mindset. <br />
              <span className="italic-accent">Designer's eye.</span>
            </h2>
            <p className="about-body">
              I keep SAP landscapes running for enterprise teams, then shape{" "}
              <strong>video and interface design</strong> for brands, creators,
              and the projects I chase on my own time. The throughline is care
              for the details nobody asked for, but everybody feels.
            </p>
            <p className="about-body" style={{ marginTop: 16 }}>
              Got a system that needs steadying or a story that needs telling?{" "}
              <strong>Let's build something worth shipping.</strong> Reach out.
              I'd love to hear what you're working on.
            </p>
            <div className="about-actions" style={{ marginTop: 24 }}>
              <MagneticButton strength={0.2}>
                <a
                  href="#contact"
                  className="btn primary"
                  onClick={(e) => scrollTo(e, "contact")}
                >
                  Get in touch <span className="btn-arrow">→</span>
                </a>
              </MagneticButton>
            </div>
            <div className="about-stats">
              <div className="about-stat">
                <div className="about-stat-num">
                  3<sup>+</sup>
                </div>
                <div className="about-stat-label">Years Exp.</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-num">
                  15<sup>+</sup>
                </div>
                <div className="about-stat-label">Projects Shipped</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-num">
                  6<sup>+</sup>
                </div>
                <div className="about-stat-label">Clients Served</div>
              </div>
            </div>
          </div>
          <div className="about-right">
            <Lanyard position={[0, 0, 13]} fov={17} transparent />
          </div>
        </div>
      </div>
    </section>
  );
}
