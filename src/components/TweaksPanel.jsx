import { useState, Fragment } from "react";
import { PALETTES } from "../palette.js";

export default function TweaksPanel(props) {
  const [open, setOpen] = useState(false);
  const { palette, setPalette, theme, setTheme, cursor, setCursor, onReplay } =
    props;

  return (
    <Fragment>
      <button
        className="tweaks-fab"
        onClick={() => setOpen(!open)}
        aria-label="Tweaks"
        title="Tweaks"
      >
        ✦
      </button>
      {open && (
        <div className="tweaks-panel">
          <div className="tweaks-head">
            <b>Tweaks</b>
            <button
              className="tweaks-x"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              ✕
            </button>
          </div>
          <div className="tweaks-body">
            <div className="tweaks-sect">Theme</div>
            <div className="tweaks-row">
              <span>Palette</span>
              <div className="tweaks-chips">
                {PALETTES.map((p, i) => {
                  const on = p[0] === palette[0] && p[1] === palette[1];
                  return (
                    <button
                      key={i}
                      className={"tweaks-chip" + (on ? " on" : "")}
                      style={{
                        background:
                          "linear-gradient(95deg," + p[0] + "," + p[1] + ")",
                      }}
                      onClick={() => setPalette(p)}
                      aria-label={p.join(", ")}
                    />
                  );
                })}
              </div>
            </div>
            <div className="tweaks-row">
              <span>Mode</span>
              <div className="tweaks-seg">
                {["dark", "light"].map((m) => (
                  <button
                    key={m}
                    className={"tweaks-seg-btn" + (theme === m ? " on" : "")}
                    onClick={() => setTheme(m)}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
            <div className="tweaks-sect">Interactions</div>
            <div className="tweaks-row">
              <span>Custom cursor</span>
              <button
                className="tweaks-toggle"
                data-on={cursor ? "1" : "0"}
                role="switch"
                aria-checked={!!cursor}
                onClick={() => setCursor(!cursor)}
              >
                <i />
              </button>
            </div>
            <div className="tweaks-sect">Replay</div>
            <button className="tweaks-btn" onClick={onReplay}>
              Replay loading screen
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
}
