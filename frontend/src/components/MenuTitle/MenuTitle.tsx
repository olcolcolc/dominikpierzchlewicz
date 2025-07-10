import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import type { ReactNode } from "react";

// Invisible marker element to track when the title becomes sticky
const Marker = styled.div`
  height: 1px;
`;

const StyledMenuTitle = styled.div<{
  isSticky: boolean;
}>(({ theme, isSticky }) => ({
  position: "sticky",
  top: "-6.5px",
  left: "48%",
  height: "8rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: theme.fonts.base,
  fontSize: "8rem",
  fontWeight: "bold",
  color: isSticky ? theme.colors.textLight : theme.colors.text,
  whiteSpace: "nowrap",
  textTransform: "uppercase",
  fontStyle: "italic",
  zIndex: 1,
  background: "transparent",
  ...theme.animations.load,
  mixBlendMode: isSticky ? "difference" : "normal", // Apply mix-blend-mode when sticky
  [theme.media.tablet]: {
    fontSize: "6rem",
    height: "6rem",
    top: "-3px",
  },
  "@media (max-width: 1100px)": {
    fontSize: "4.5rem",
    height: "4.5rem",
    left: "55%",
    top: 0,
  },
  "@media (max-width: 960px)": {
    fontSize: "4rem",
    height: "4rem",
    left: "56%",
  },
  "@media (max-width: 890px)": {
    left: "50%",
  },
  "@media (max-width: 770px)": {
    left: "45%",
  },
  "@media (max-width: 700px)": {
    fontSize: "3rem",
    height: "3rem",
  },
  "@media (max-width: 570px)": {
    fontSize: "2rem",
    height: "2.3rem",
  },
  "@media (max-width: 370px)": {
    fontSize: "1.6rem",
  },
}));

type MenuTitleProps = {
  children: ReactNode;
};

export const MenuTitle = ({ children }: MenuTitleProps) => {
  const markerRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const currentMarker = markerRef.current;

    if (!currentMarker) return;

    // Create an IntersectionObserver to track the marker visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting); // If the marker is not visible, the title is sticky
      },
      {
        root: null,
        threshold: 0,
      }
    );

    observer.observe(currentMarker);

    return () => {
      observer.disconnect(); // Clean up the observer on unmount
    };
  }, []);

  return (
    <>
      {/* Marker positioned just before the title to track its sticky state */}
      <Marker ref={markerRef} />
      <StyledMenuTitle isSticky={isSticky}>{children}</StyledMenuTitle>
    </>
  );
};
