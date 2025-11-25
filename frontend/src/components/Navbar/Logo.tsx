import styled from "@emotion/styled";
import { Link, type LinkProps } from "react-router-dom";
import type { ReactNode } from "react";
import React from "react";

const LogoLink = styled(Link)(({ theme }) => ({
  fontSize: "4rem",
  marginLeft: "-5px",
  fontFamily: theme.fonts.inter,
  color: "black",
  zIndex: 2,
  textDecoration: "none",
  ...theme.animations.hoverLift,
  mixBlendMode: "difference",
  display: "flex",
  gap: "0.2em",
  [theme.media.tablet]: {
    fontSize: "3rem",
  },
  [theme.media.mobileL]: {
    fontSize: "2.5rem",
  },
  [theme.media.mobileM]: {
    fontSize: "2rem",
  },
  [theme.media.mobileS]: {
    flexDirection: "column",
    textAlign: "left",
    fontSize: "2rem",
    alignItems: "flex-start",
    lineHeight: "1.6rem",
    marginLeft: "0px",
  },
}));

const FirstName = styled.span(({ theme }) => ({
  letterSpacing: "-0.05em",
  marginBottom: "1rem",
  [theme.media.mobileS]: {
    marginLeft: "-2px",
  },
}));

const LastName = styled.span(({ theme }) => ({
  fontStyle: "italic",
  fontWeight: "bold",
  fontFamily: "'Invasion2000', sans-serif",
  fontSize: "4.4rem",
  marginTop: "-0.1rem",
  [theme.media.mobileL]: {
    marginLeft: "-0.3rem",
  },
  [theme.media.mobileS]: {
    marginLeft: "-2px",
  },
}));

type LogoProps = {
  firstName: string;
  lastName: string;
  children?: ReactNode;
} & LinkProps;

export const Logo = React.forwardRef<HTMLAnchorElement, LogoProps>(
  ({ firstName, lastName, ...props }, ref) => {
    return (
      <LogoLink {...props} ref={ref}>
        <FirstName>{firstName}</FirstName>
        <LastName>{lastName}</LastName>
      </LogoLink>
    );
  }
);

Logo.displayName = "Logo";
