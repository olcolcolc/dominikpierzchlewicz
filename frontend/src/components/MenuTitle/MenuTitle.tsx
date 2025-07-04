import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import type { ReactNode } from "react";

// Invisible marker element to track when the title becomes sticky
const Marker = styled.div`
  height: 1px;
`;

const StyledMenuTitle = styled.div<{
  isSticky: boolean;
  isDarkBackground?: boolean;
}>(({ theme, isSticky, isDarkBackground }) => ({
  position: "sticky",
  top: 0,
  height: "8rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: theme.fonts.base,
  fontSize: "8rem",
  fontWeight: "bold",
  color: isSticky && isDarkBackground ? "#fff" : theme.colors.text,
  whiteSpace: "nowrap",
  textTransform: "uppercase",
  fontStyle: "italic",
  zIndex: 4,
  background: "transparent",
  transform: "translate(47%, 0%)",
  ...theme.animations.load,
  mixBlendMode: isSticky ? "difference" : "normal", // Apply mix-blend-mode when sticky
  [theme.media.tablet]: {
    fontSize: "7rem",
    height: "7rem",
    transform: "translate(40%, 0%)",
  },
  "@media (max-width: 1100px)": {
    fontSize: "5rem",
    height: "5rem",
    transform: "translate(55%, 0%)",
  },
  "@media (max-width: 945px)": {
    fontSize: "3rem",
    height: "4rem",
    transform: "translate(96%, 0%)",
  },
  "@media (max-width: 810px)": {
    transform: "translate(80%, 0%)",
  },
  "@media (max-width: 700px)": {
    transform: "translate(50%, 0%)",
  },
  "@media (max-width: 560px)": {
    fontSize: "2rem",
    height: "3rem",
  },
  "@media (max-width: 400px)": {
    fontSize: "1.5rem",
    height: "3rem",
  },
}));

type MenuTitleProps = {
  children: ReactNode;
  isDarkBackground?: boolean;
};

export const MenuTitle = ({ children, isDarkBackground }: MenuTitleProps) => {
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
      <StyledMenuTitle isSticky={isSticky} isDarkBackground={isDarkBackground}>
        {children}
      </StyledMenuTitle>
    </>
  );
};
