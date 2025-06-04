import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

const LogoWrapper = styled(Link)(({ theme }) => ({
  fontSize: "4rem",
  fontWeight: "bold",
  fontFamily: theme.fonts.base,
  color: "black",
  textDecoration: "none",
  ...theme.animations.hoverLift,
  mixBlendMode: "difference",
  [theme.media.tablet]: {
    fontSize: "3rem",
  },
}));

type LogoProps = {
  children: ReactNode;
};

export const Logo = ({ children }: LogoProps) => {
  return <LogoWrapper to="/">{children}</LogoWrapper>;
};
