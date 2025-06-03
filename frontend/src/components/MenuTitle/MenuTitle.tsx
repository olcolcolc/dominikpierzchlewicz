import styled from "@emotion/styled";
import type { ReactNode } from "react";

const StyledMenuTitle = styled.div(({ theme }) => ({
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
  transition: "all 0.3s ease-in-out",
  transform: "translate(50%, -30%)",
}));

type MenuTitleProps = {
  children: ReactNode;
};

export const MenuTitle = ({ children }: MenuTitleProps) => {
  return <StyledMenuTitle>{children}</StyledMenuTitle>;
};
