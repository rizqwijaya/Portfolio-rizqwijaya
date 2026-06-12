import { useReveal } from "../hooks.js";

export default function Services() {
  const ref = useReveal({ repeat: true });
  const services = [
    {
      num: "01",
      icon: "⛓️",
      name: "Blockchain Development",
      desc: "Designing and building blockchain solutions end to end — network architecture, token standards, DeFi protocols, and integrations across EVM-compatible chains and Layer 2s.",
      tags: ["EVM", "Layer 2", "DeFi", "Tokenomics"],
    },
    {
      num: "02",
      icon: "📜",
      name: "Smart Contract Development",
      desc: "Secure, gas-efficient smart contracts in Solidity — ERC-20, ERC-721, and ERC-1155 standards, with thorough testing, auditing practices, and deployment pipelines.",
      tags: ["Solidity", "ERC-20", "NFT", "Security"],
    },
    {
      num: "03",
      icon: "🌐",
      name: "Web3 Development",
      desc: "Full-stack decentralized applications — wallet connections, on-chain reads and writes, and polished dApp frontends built with modern Web3 tooling.",
      tags: ["dApps", "Ethers.js", "Wagmi", "IPFS"],
    },
    {
      num: "04",
      icon: "🖥️",
      name: "SAP Basis Consulting",
      desc: "Installation, upgrade, migration, performance tuning, monitoring, and DR for SAP NetWeaver, S/4HANA, and HANA database landscapes.",
      tags: ["Install", "Migration", "HANA", "Tuning", "Monitoring"],
    },
  ];
  return (
    <section id="services" className="section">
      <div ref={ref} className="reveal reveal-anim">
        <div className="services-head">
          <div>
            <div className="section-label anim-left" style={{ "--d": "60ms" }}>
              <span className="section-num">02</span> What I Do
            </div>
            <h2 className="services-title anim-left" style={{ "--d": "220ms" }}>
              Services &amp; <span className="italic-accent">capabilities.</span>
            </h2>
          </div>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div
              key={s.num}
              className="service-card anim-up"
              data-hover={true}
              style={{ "--d": 380 + i * 140 + "ms" }}
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
      </div>
    </section>
  );
}
