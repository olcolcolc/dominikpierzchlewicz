import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

const LogoWrapper = styled(Link)(({ theme }) => ({
  fontSize: "4rem",
  height: "100%",
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
  "@media (max-width: 700px)": {
    fontSize: "2.5rem",
    width: "400px",
  },
  "@media (max-width: 570px)": {
    fontSize: "2rem",
    width: "300px",
  },
}));

type LogoProps = {
  children: ReactNode;
};

export const Logo = ({ children }: LogoProps) => {
  return <LogoWrapper to="/">{children}</LogoWrapper>;
};
