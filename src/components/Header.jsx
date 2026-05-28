import { useScrollSpy } from "../hooks.js";
import MagneticButton from "./MagneticButton.jsx";

export default function Header(props) {
  const { theme, setTheme } = props;
  const active = useScrollSpy(["home", "about", "services", "work", "contact"]);
  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" },
  ];
  const onJump = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const moon = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
  const sun = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );

  return (
    <nav className="nav">
      <a
        href="#home"
        className="nav-brand"
        onClick={(e) => onJump(e, "home")}
      >
        <span className="nav-brand-dot" />
        Rizq Wijaya
      </a>
      <div className="nav-links">
        {links.map((l) => (
          <a
            key={l.id}
            href={"#" + l.id}
            className={"nav-link" + (active === l.id ? " active" : "")}
            onClick={(e) => onJump(e, l.id)}
          >
            {l.label}
          </a>
        ))}
      </div>
      <div className="nav-right">
        <button
          className="theme-toggle"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
          title={theme === "dark" ? "Switch to light" : "Switch to dark"}
        >
          {theme === "dark" ? moon : sun}
        </button>
        <MagneticButton strength={0.3}>
          <a
            href="#contact"
            className="btn primary"
            onClick={(e) => onJump(e, "contact")}
          >
            Hire Me <span className="btn-arrow">→</span>
          </a>
        </MagneticButton>
      </div>
    </nav>
  );
}
