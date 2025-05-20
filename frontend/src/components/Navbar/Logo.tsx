import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

const LogoWrapper = styled(Link)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: "bold",
  fontFamily: theme.fonts.base,
  color: theme.colors.text,
  textDecoration: "none",
  ...theme.animations.hoverLift,
}));

type LogoProps = {
  children: ReactNode;
};

export const Logo = ({ children }: LogoProps) => {
  return <LogoWrapper to="/">{children}</LogoWrapper>;
};
