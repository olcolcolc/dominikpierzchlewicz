// src/hooks/useParallax.ts
import { useEffect, useState } from "react";

export const useParallax = (offset = 0.5) => {
  const [yOffset, setYOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setYOffset(window.scrollY * offset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return yOffset;
};
