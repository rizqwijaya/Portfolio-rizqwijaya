import { useReveal } from "../hooks.js";

export default function Services() {
  const ref = useReveal();
  const services = [
    {
      num: "01",
      icon: "🖥️",
      name: "SAP Basis Consulting",
      desc: "Installation, upgrade, migration, performance tuning, monitoring, and DR for SAP NetWeaver, S/4HANA, and HANA database landscapes.",
      tags: ["Install", "Migration", "HANA", "Tuning", "Monitoring"],
    },
    {
      num: "02",
      icon: "🎬",
      name: "Video Editing",
      desc: "Brand reels, talking-head edits, podcast video, and short-form social content with motion polish and clean sound design.",
      tags: ["Reels", "Podcast", "Short-form", "Color"],
    },
    {
      num: "03",
      icon: "🎨",
      name: "UI / UX Design",
      desc: "End-to-end product design — flows, wireframes, hi-fi mockups, and clickable prototypes. Comfortable across web, mobile, and SaaS dashboards.",
      tags: ["Flows", "Wireframe", "Hi-fi", "Prototype"],
    },
    {
      num: "04",
      icon: "💻",
      name: "Vibe Coding",
      desc: "Quick interactive prototypes, landing pages, internal tools, and motion-rich web experiences when you need something built fast and tasteful.",
      tags: ["Prototype", "Landing", "Tools", "Web"],
    },
  ];
  return (
    <section id="services" className="section">
      <div ref={ref} className="reveal services-head">
        <div>
          <div className="section-label">
            <span className="section-num">02</span> What I Do
          </div>
          <h2 className="services-title">
            Services &amp; <span className="italic-accent">capabilities.</span>
          </h2>
        </div>
      </div>
      <div className="services-grid">
        {services.map((s, i) => (
          <div
            key={s.num}
            className="service-card"
            data-hover={true}
            style={{ transitionDelay: i * 0.06 + "s" }}
          >
            <div className="service-card-num">{s.num}</div>
            <div className="service-card-icon">
              <span>{s.icon}</span>
            </div>
            <div className="service-card-name">{s.name}</div>
            <p className="service-card-desc">{s.desc}</p>
            <div className="service-card-tags">
              {s.tags.map((t) => (
                <span key={t} className="service-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
