import styled from "@emotion/styled";
import { Link, type LinkProps } from "react-router-dom";
import type { ReactNode } from "react";
import React from "react";

const LogoLink = styled(Link)(({ theme }) => ({
  fontSize: "4rem",
  height: "100%",
  fontFamily: theme.fonts.inter,
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

const LastName = styled.span({
  fontStyle: "italic",
  fontWeight: "bold",
});

type LogoProps = {
  firstName: string;
  lastName: string;
  children?: ReactNode;
} & LinkProps;

export const Logo = React.forwardRef<HTMLAnchorElement, LogoProps>(
  ({ firstName, lastName, children, ...props }, ref) => {
    return (
      <LogoLink {...props} ref={ref}>
        {firstName}
        <LastName>{lastName}</LastName>
        {children}
      </LogoLink>
    );
  }
);

Logo.displayName = "Logo";
