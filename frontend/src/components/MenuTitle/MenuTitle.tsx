import styled from "@emotion/styled";
import type { ReactNode } from "react";

const StyledMenuTitle = styled.div(({ theme }) => ({
  fontColor: "grey",
  position: "relative",
  left: "20%",
  height: "8rem",
  width: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: theme.fonts.base,
  fontSize: "8rem",
  fontWeight: "bold",
  color: theme.colors.text,
  whiteSpace: "nowrap",
  textTransform: "uppercase",
  zIndex: 10,
  background: "transparent",
  ...theme.animations.load,
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
    height: "2rem",
  },
  "@media (max-width: 370px)": {
    fontSize: "1.6rem",
    height: "1.6rem",
  },
}));

type MenuTitleProps = {
  children: ReactNode;
};

export const MenuTitle = ({ children }: MenuTitleProps) => {
  return <StyledMenuTitle>{children}</StyledMenuTitle>;
};
