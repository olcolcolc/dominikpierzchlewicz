import { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { motion, useSpring, useTransform } from "framer-motion";

const ParallaxWrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 500px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ParallaxBackground = styled(motion.div)`
  background-color: #ffffff;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  z-index: 0;
`;

const ParallaxContent = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 4rem 1rem;
`;

interface ParallaxSectionProps {
  children: React.ReactNode;
  id?: string;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  id,
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  const scrollY = useSpring(0, { damping: 20, stiffness: 100 });
  const yOffset = useTransform(scrollY, (value) => value * 0.2);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;
      const sectionTop = scrollTop + rect.top;
      const distance = scrollTop - sectionTop + window.innerHeight / 2;

      scrollY.set(distance);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <ParallaxWrapper id={id} ref={sectionRef}>
      <ParallaxBackground style={{ y: yOffset }} />
      <ParallaxContent>{children}</ParallaxContent>
    </ParallaxWrapper>
  );
};
