import { useEffect, useState } from "react";

export function useHideOnHalfOf(selector: string = "#hero-slider") {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const getThreshold = () => {
      const el = document.querySelector(selector) as HTMLElement | null;
      return (el?.getBoundingClientRect().height ?? window.innerHeight) / 2;
    };

    let ticking = false;

    const update = () => {
      const threshold = getThreshold();
      const scrolled = window.scrollY || window.pageYOffset || 0;
      setHidden(scrolled > threshold);
      ticking = false;
    };

    const onScrollOrResize = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [selector]);

  return hidden;
}
