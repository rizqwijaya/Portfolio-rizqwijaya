import { useState, useEffect, useRef } from "react";

/* IntersectionObserver reveal-on-scroll */
export function useReveal(opts) {
  opts = opts || {};
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("in");
            io.unobserve(el);
          }
        });
      },
      {
        threshold: opts.threshold || 0.15,
        rootMargin: opts.rootMargin || "0px 0px -10% 0px",
      }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

/* Scrollspy — active section id by scroll position */
export function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.4;
      let cur = ids[0];
      for (let i = 0; i < ids.length; i++) {
        const el = document.getElementById(ids[i]);
        if (!el) continue;
        if (el.offsetTop <= y) cur = ids[i];
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids.join(",")]);
  return active;
}

/* Persisted dark/light theme on <html data-theme> */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("portfolio-theme") || "dark";
    } catch (e) {
      return "dark";
    }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch (e) {}
  }, [theme]);
  return [theme, setTheme];
}
