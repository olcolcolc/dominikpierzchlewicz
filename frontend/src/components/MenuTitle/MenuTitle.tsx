import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import type { ReactNode } from "react";

// Invisible marker element to track when the title becomes sticky
const Marker = styled.div`
  height: 1px;
`;

const StyledMenuTitle = styled.div<{ isSticky: boolean }>(
  ({ theme, isSticky }) => ({
    position: "sticky",
    top: 0,
    height: "10rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: theme.fonts.base,
    fontSize: "8rem",
    fontWeight: "bold",
    color: theme.colors.text,
    whiteSpace: "nowrap",
    letterSpacing: "0.2rem",
    textTransform: "uppercase",
    fontStyle: "italic",
    zIndex: 100,
    background: "transparent",
    transform: "translate(50%, -30%)",
    ...theme.animations.load,
    mixBlendMode: isSticky ? "difference" : "normal", // Apply mix-blend-mode when sticky
    transition: "mix-blend-mode 0.3s ease",

    [theme.media.mobileL]: {
      fontSize: "7rem",
    },
    [theme.media.mobileS]: {
      fontSize: "5rem",
    },
  })
);

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
