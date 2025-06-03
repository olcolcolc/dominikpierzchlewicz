import styled from "@emotion/styled";
import type { ReactNode } from "react";

const MenuTitleWrapper = styled.div(({ theme }) => ({
  fontFamily: theme.fonts.base,
  fontSize: "2rem",
  fontWeight: "bold",
  color: theme.colors.text,
  whiteSpace: "nowrap",
  letterSpacing: "0.2rem",
  textTransform: "uppercase",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  zIndex: 20,
  height: "3rem",
  background: "transparent",
  transition: "all 0.3s ease-in-out",
  minWidth: "0",
  boxSizing: "border-box",
  overflowX: "hidden",
}));

type MenuTitleProps = {
  children: ReactNode;
};

export const MenuTitle = ({ children }: MenuTitleProps) => {
  return <MenuTitleWrapper>{children}</MenuTitleWrapper>;
};
