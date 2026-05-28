export default function WorkArt(props) {
  const kind = props.kind;
  if (kind === "sap") {
    return (
      <div className="art-svg">
        <svg
          viewBox="0 0 200 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <rect x="10" y="20" width="80" height="80" rx="4" />
          <rect x="110" y="20" width="80" height="80" rx="4" />
          <line x1="90" y1="60" x2="110" y2="60" />
          <circle cx="50" cy="50" r="3" fill="currentColor" />
          <circle cx="50" cy="70" r="3" fill="currentColor" />
          <line x1="60" y1="50" x2="80" y2="50" />
          <line x1="60" y1="70" x2="80" y2="70" />
          <circle cx="150" cy="50" r="3" fill="currentColor" />
          <circle cx="150" cy="70" r="3" fill="currentColor" />
          <line x1="120" y1="50" x2="140" y2="50" />
          <line x1="120" y1="70" x2="140" y2="70" />
        </svg>
      </div>
    );
  }
  if (kind === "video") {
    return (
      <div className="art-svg">
        <svg
          viewBox="0 0 200 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <rect x="20" y="30" width="160" height="60" rx="4" />
          <polygon
            points="92,50 92,70 112,60"
            fill="currentColor"
            stroke="none"
          />
          <line
            x1="20"
            y1="100"
            x2="180"
            y2="100"
            strokeDasharray="2 4"
          />
          <rect
            x="30"
            y="105"
            width="20"
            height="6"
            fill="currentColor"
            stroke="none"
            opacity="0.6"
          />
          <rect
            x="55"
            y="105"
            width="40"
            height="6"
            fill="currentColor"
            stroke="none"
            opacity="0.4"
          />
          <rect
            x="100"
            y="105"
            width="15"
            height="6"
            fill="currentColor"
            stroke="none"
            opacity="0.6"
          />
          <rect
            x="120"
            y="105"
            width="50"
            height="6"
            fill="currentColor"
            stroke="none"
            opacity="0.4"
          />
        </svg>
      </div>
    );
  }
  if (kind === "uiux") {
    return (
      <div className="art-svg">
        <svg
          viewBox="0 0 200 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <rect x="20" y="15" width="60" height="90" rx="6" />
          <rect x="90" y="15" width="90" height="90" rx="6" />
          <circle cx="50" cy="35" r="8" />
          <line x1="30" y1="55" x2="70" y2="55" />
          <line x1="30" y1="65" x2="60" y2="65" />
          <rect
            x="30"
            y="78"
            width="40"
            height="14"
            rx="3"
            fill="currentColor"
            stroke="none"
          />
          <line x1="100" y1="25" x2="170" y2="25" strokeWidth="2" />
          <line x1="100" y1="35" x2="150" y2="35" />
          <rect x="100" y="50" width="30" height="30" rx="3" />
          <rect x="135" y="50" width="30" height="30" rx="3" />
          <line x1="100" y1="90" x2="170" y2="90" />
        </svg>
      </div>
    );
  }
  if (kind === "motion") {
    return (
      <div className="art-svg">
        <svg
          viewBox="0 0 200 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <circle cx="100" cy="60" r="40" />
          <circle cx="100" cy="60" r="28" opacity="0.6" />
          <circle cx="100" cy="60" r="16" opacity="0.4" />
          <path d="M 60 60 Q 100 20, 140 60 Q 100 100, 60 60" />
          <circle
            cx="100"
            cy="60"
            r="3"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      </div>
    );
  }
  return null;
}
