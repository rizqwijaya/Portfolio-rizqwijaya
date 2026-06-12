import { useReveal } from "../hooks.js";
import WorkArt from "./WorkArt.jsx";

export default function Work(props) {
  const onOpen = props.onOpen;
  const ref = useReveal({ repeat: true });
  const projects = [
    {
      id: "sap-migration",
      name: "BRIFIRST - SAP Basis Operations & Administration",
      cat: "SAP Basis · 2023–2024",
      tag: "SAP S/4HANA",
      yr: "2023–24",
      art: "sap",
      cover: "/assets/SAP Project BRIFIRST.png",
      size: "large",
      desc: "Handled day-to-day SAP Basis operations for the BRIFIRST landscape at Bank BRI, including user and authorization management, transport request handling, batch job monitoring, and deployment across development, QA, and production systems.",
      year: "Nov 2023 – Nov 2024",
      tools: "SAP S/4HANA · BMC Control-M · SAP Fiori · SAP HANA",
      duration: "12 months",
      tags: ["S/4HANA", "BMC Control-M", "SAP Fiori", "User Management"],
    },
    {
      id: "sap-basis-consultant",
      name: "PT SISI - SAP Basis Consultant",
      cat: "SAP Basis · Enterprise Infrastructure · 2025",
      tag: "SAP ECC",
      yr: "2025",
      art: "motion",
      cover: "/assets/SAP ECC PT SISI.jpg",
      size: "med-r",
      desc: "Comprehensive end-to-end SAP Basis Consulting and system management to ensure high availability, security, and optimal performance of enterprise SAP environments (ERP, ECC, and Oracle).",
      year: "Feb 2025 – May 2025",
      tools: "SAP GUI · SAP ECC · Oracle Database",
      duration: "4 months",
      tags: ["Basis Consulting", "System Monitoring", "Landscape Config"],
    },
  ];
  return (
    <section id="work" className="section">
      <div ref={ref} className="reveal reveal-anim">
        <div className="work-head">
          <div>
            <div className="section-label anim-left" style={{ "--d": "60ms" }}>
              <span className="section-num">03</span> Selected Work
            </div>
            <h2 className="work-title anim-left" style={{ "--d": "220ms" }}>
              Things I've <span className="italic-accent">shipped.</span>
            </h2>
          </div>
        </div>
        <div className="work-grid">
          {projects.map((p, i) => (
            <button
              key={p.id}
              className={"work-card anim-up " + p.size}
              style={{ "--d": 320 + i * 200 + "ms" }}
              onClick={() => onOpen(p)}
            >
            <div className="work-art">
              {p.cover ? (
                <img className="work-art-cover" src={p.cover} alt={p.name} />
              ) : (
                <>
                  <div className={"work-art-fill art-" + p.art} />
                  <WorkArt kind={p.art} />
                </>
              )}
            </div>
            <div className="work-tag-top">{p.tag}</div>
            <div className="work-year-chip">{p.yr}</div>
            <div className="work-meta">
              <div className="work-meta-main">
                <div className="work-name">{p.name}</div>
                <div className="work-cat">{p.cat}</div>
                <div className="work-reveal">
                  <p className="work-desc">{p.desc}</p>
                  <div className="work-chips">
                    {p.tags.map((t) => (
                      <span key={t} className="work-chip">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="work-open-hint">Open case study</span>
                </div>
              </div>
              <div className="work-arrow">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </div>
          </button>
        ))}
        </div>
        <a
          className="work-banner anim-up"
          style={{ "--d": "720ms" }}
          href="https://github.com/rizqwijaya"
          target="_blank"
          rel="noopener noreferrer"
          data-hover={true}
        >
          <span className="work-banner-text">
            <span className="work-banner-label">
              Want the full picture?
            </span>
            <span className="work-banner-big">
              Explore more builds on <strong>GitHub</strong>
            </span>
          </span>
          <span className="work-banner-arrow" aria-hidden="true">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
