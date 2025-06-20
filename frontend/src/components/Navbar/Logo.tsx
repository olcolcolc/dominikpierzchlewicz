import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

const LogoWrapper = styled(Link)(({ theme }) => ({
  fontSize: "4rem",
  fontWeight: "bold",
  fontFamily: theme.fonts.base,
  color: "black",
  zIndex: 2,
  textDecoration: "none",
  ...theme.animations.hoverLift,
  mixBlendMode: "difference",
  [theme.media.tablet]: {
    fontSize: "3rem",
  },
  "@media (max-width: 930px)": {
    width: "500px",
  },
}));

type LogoProps = {
  children: ReactNode;
};

export const Logo = ({ children }: LogoProps) => {
  return <LogoWrapper to="/">{children}</LogoWrapper>;
};
