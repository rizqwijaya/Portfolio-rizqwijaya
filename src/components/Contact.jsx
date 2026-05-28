import { useReveal } from "../hooks.js";

export default function Contact() {
  const ref = useReveal();
  const socials = [
    {
      icon: "✉",
      label: "Email",
      val: "mrizqwijaya@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=mrizqwijaya@gmail.com",
    },
    {
      icon: "◎",
      label: "Instagram",
      val: "@rizq.wijaya",
      href: "https://instagram.com/rizq.wijaya",
    },
    {
      icon: "✆",
      label: "WhatsApp",
      val: "+62 822-4580-5586",
      href: "https://wa.me/6282245805586",
    },
    {
      icon: "in",
      label: "LinkedIn",
      val: "/in/rizqwijaya",
      href: "https://www.linkedin.com/in/rizqwijaya/",
    },
  ];

  return (
    <section id="contact" className="contact">
      <div ref={ref} className="reveal contact-grid">
        <div className="contact-left">
          <div className="section-label">
            <span className="section-num">05</span> Get In Touch
          </div>
          <h2 className="contact-title">
            Have a project? <br />
            <span className="italic-accent">Let's talk.</span>
          </h2>
          <div className="contact-socials">
            {socials.map((s) => (
              <a
                key={s.label}
                className="contact-social"
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="contact-social-icon">{s.icon}</span>
                <span className="contact-social-text">
                  <span className="contact-social-label">{s.label}</span>
                  <span className="contact-social-val">{s.val}</span>
                </span>
                <span className="contact-social-arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
