import { Fragment } from "react";

export default function Marquee() {
  const items = [
    { name: "SAP Basis", sub: "User Management · Database · Troubleshooting" },
    { name: "Video Editing", sub: "Premiere · Social Media · Motion" },
    { name: "UI / UX Design", sub: "User Flow · Wireframe · Prototype" },
    { name: "Vibe Coding", sub: "Web · Tools · Automation" },
  ];
  const loop = items.concat(items, items);
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((t, i) => (
          <Fragment key={i}>
            <span className="marquee-item">{t.name}</span>
            <span className="marquee-dot" />
            <span className="marquee-item outline">{t.sub}</span>
            <span className="marquee-dot" />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
