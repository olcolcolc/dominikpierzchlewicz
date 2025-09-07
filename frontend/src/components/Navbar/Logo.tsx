import styled from "@emotion/styled";
import { Link, type LinkProps } from "react-router-dom";
import type { ReactNode } from "react";
import React from "react";

const LogoLink = styled(Link)(({ theme }) => ({
  fontSize: "4rem",
  height: "100%",
  fontWeight: "bold",
  fontFamily: theme.fonts.base,
  color: "black",
  zIndex: 2,
  textDecoration: "none",
  ...theme.animations.hoverLift,
  mixBlendMode: "difference",
  display: "inline-block",
  [theme.media.tablet]: {
    fontSize: "3rem",
  },
  "@media (max-width: 930px)": {
    fontSize: "2.5rem",
    width: "260px",
  },
  "@media (max-width: 570px)": {
    fontSize: "2rem",
    width: "210px",
  },
  "@media (max-width: 470px)": {
    fontSize: "1.2rem",
    width: "150px",
  },
}));

type LogoProps = {
  children: ReactNode;
} & LinkProps;

export const Logo = React.forwardRef<HTMLAnchorElement, LogoProps>(
  ({ children, ...props }, ref) => {
    return (
      <LogoLink {...props} ref={ref}>
        {children}
      </LogoLink>
    );
  }
);

Logo.displayName = "Logo";
