import { useState, useEffect, useRef } from "react";
import MagneticButton from "./MagneticButton.jsx";
import SkillPanel from "./SkillPanel.jsx";

const HEADLINES = [
  "An SAP Basis Consultant.",
  "User Management.",
  "SAP Transport.",
  "SAP System Installation.",
];

const TYPE_MS = 65; // delay between typing each character
const ERASE_MS = 32; // delay between erasing each character
const HOLD_MS = 2000; // pause once the full phrase is typed
const GAP_MS = 350; // pause after erase, before the next phrase

export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Typewriter: type the phrase one char at a time L→R, hold, erase it
  // back, then move to the next phrase and loop.
  const [idx, setIdx] = useState(0);
  const [count, setCount] = useState(0); // visible char count
  const [typing, setTyping] = useState(true); // true=typing, false=erasing
  const timer = useRef(null);

  useEffect(() => {
    const full = HEADLINES[idx];
    if (typing) {
      if (count < full.length) {
        timer.current = setTimeout(() => setCount((c) => c + 1), TYPE_MS);
      } else {
        // fully typed → hold, then start erasing
        timer.current = setTimeout(() => setTyping(false), HOLD_MS);
      }
    } else {
      if (count > 0) {
        timer.current = setTimeout(() => setCount((c) => c - 1), ERASE_MS);
      } else {
        // erased → brief gap, then next phrase types in
        timer.current = setTimeout(() => {
          setIdx((i) => (i + 1) % HEADLINES.length);
          setTyping(true);
        }, GAP_MS);
      }
    }
    return () => clearTimeout(timer.current);
  }, [idx, count, typing]);

  const shown = HEADLINES[idx].slice(0, count);
  return (
    <section id="home" className="section hero">
      <div className="hero-tag">
        <span className="hero-tag-dot" />
        Based in Jakarta, Indonesia · Open for Work
      </div>
      <div className="hero-grid">
        <div className="hero-left">
          <h1 className="hero-title hero-title-rotator">
            <span className="hero-type-line" aria-label={HEADLINES[idx]}>
              <span className="hero-type-text" aria-hidden="true">
                {shown}
              </span>
            </span>
          </h1>
          <p className="hero-sub">
            I'm <strong>Rizq Wijaya</strong>. By day, I keep enterprise systems
            running as an SAP Basis consultant. By craft, I edit videos that move
            people and design interfaces that just feel right.
          </p>
          <div className="hero-actions">
            <MagneticButton strength={0.2}>
              <a
                href="#work"
                className="btn primary"
                onClick={(e) => scrollTo(e, "work")}
              >
                View Work <span className="btn-arrow">→</span>
              </a>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <a
                href="#contact"
                className="btn ghost"
                onClick={(e) => scrollTo(e, "contact")}
              >
                Let's Talk
              </a>
            </MagneticButton>
          </div>
        </div>
        <div className="hero-right">
          <SkillPanel />
        </div>
      </div>
    </section>
  );
}
