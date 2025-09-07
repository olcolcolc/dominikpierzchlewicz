// src/components/MenuTitle/MenuTitle.tsx
import styled from "@emotion/styled";
import type { ReactNode } from "react";
import { useLogoWidth } from "../../context/LogoWidthContext";

const StyledMenuTitle = styled.div<{ $logoWidth: number | null }>(
  ({ theme, $logoWidth }) => {
    const oneRemInPx = 16;

    const calculatedLeft =
      $logoWidth !== null ? `${$logoWidth + oneRemInPx}px` : "20%";

    return {
      color: theme.colors.text,
      position: "absolute",
      left: calculatedLeft,
      height: "8rem",
      width: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "left",
      fontFamily: theme.fonts.base,
      fontSize: "7rem",
      fontWeight: "bold",
      whiteSpace: "nowrap",
      textTransform: "uppercase",
      zIndex: 10,
      background: "transparent",
      ...theme.animations.load,
      [theme.media.tablet]: {
        fontSize: "6rem",
        height: "6rem",
      },
      "@media (max-width: 1200px)": {
        fontSize: "5rem",
        height: "5rem",
      },
      "@media (max-width: 1100px)": {
        fontSize: "4rem",
        height: "4rem",
      },
      "@media (max-width: 960px)": {
        fontSize: "3.5rem",
        height: "3.5rem",
      },
      "@media (max-width: 700px)": {
        fontSize: "3rem",
        height: "3rem",
      },
      "@media (max-width: 605px)": {
        fontSize: "2.5rem",
        height: "2.5rem",
      },
      "@media (max-width: 520px)": {
        fontSize: "2rem",
        height: "2rem",
      },
      "@media (max-width: 470px)": {
        fontSize: "1.5rem",
        height: "1.5rem",
      },
    };
  }
);

type MenuTitleProps = {
  children: ReactNode;
};

export const MenuTitle = ({ children }: MenuTitleProps) => {
  const logoWidth = useLogoWidth();
  return <StyledMenuTitle $logoWidth={logoWidth}>{children}</StyledMenuTitle>;
};
