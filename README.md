# Rizq Wijaya — Portfolio

Vite + React 18. Migrated from a single CDN/`React.createElement` file to a
JSX component tree.

## Scripts

```bash
npm install      # install deps (once)
npm run dev      # dev server with HMR
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Structure

```
index.html            Vite entry, loads /src/main.jsx
public/assets/         Static assets, served at /assets/...
src/
  main.jsx             ReactDOM root + styles import
  App.jsx              App tree (loader, sections, modal, tweaks)
  styles.css           Global stylesheet (unchanged)
  hooks.js             useReveal, useScrollSpy, useTheme
  palette.js           PALETTES + applyPalette
  components/           One file per component
```

## Importing a ReactBits component

ReactBits is **copy-in**, not a runtime npm package. Steps:

1. **Find the component** at https://reactbits.dev — open it, pick the
   **JS + CSS** (or JS + Tailwind) variant. This project uses plain CSS, not
   Tailwind, so prefer the CSS variant.

2. **Add it** — two options:
   - **CLI (recommended):**
     ```bash
     npx jsrepo add https://reactbits.dev/<variant>/<ComponentName>
     ```
     jsrepo writes the component into `src/` automatically.
   - **Manual:** create `src/components/<Name>.jsx`, paste the component
     source, paste any companion CSS into its own file and `import` it from
     the component.

3. **Install peer deps** the component needs. Check the component's
   "Dependencies" tab. Common ones:
   ```bash
   npm install gsap                       # GSAP-based animations
   npm install motion                     # Framer Motion / motion
   npm install three @react-three/fiber   # 3D / WebGL components
   ```

4. **Use it** — import into any component:
   ```jsx
   import SplitText from "./components/SplitText.jsx";
   // ...
   <SplitText text="Systems." />
   ```

5. `npm run dev` and verify. `npm run build` to confirm it compiles.

### Notes

- Asset paths are absolute from `public/`: `/assets/<file>`.
- Inline CSS-variable styles use string keys: `style={{ "--tx": "4px" }}`.
- The old no-JSX `app.js` was removed; everything lives in `src/components/`.
