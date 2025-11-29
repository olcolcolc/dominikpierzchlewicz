import styled from "@emotion/styled";
import { Link, type LinkProps } from "react-router-dom";
import type { ReactNode } from "react";
import React, { useEffect, useState } from "react";

const MIN_FONT_SIZE = 2; // rem
const MAX_FONT_SIZE = 4; // rem
const MAX_SCROLL = 1400; // px, po tylu scrolla mamy MIN_FONT_SIZE

const LogoLink = styled(Link)<{ $fontSize: number }>(
  ({ theme, $fontSize }) => ({
    fontSize: `${$fontSize}rem`,

    marginLeft: "-5px",
    fontFamily: theme.fonts.inter,
    color: "black",
    zIndex: 2,
    textDecoration: "none",
    ...theme.animations.hoverLift,
    mixBlendMode: "difference",
    display: "flex",
    gap: "0.2em",
    [theme.media.tablet]: {},
    [theme.media.mobileL]: {},
    [theme.media.mobileM]: {},
    [theme.media.mobileS]: {
      flexDirection: "column",
      textAlign: "left",
      alignItems: "flex-start",
      lineHeight: "1.6rem",
      marginLeft: "0px",
    },
  })
);

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
  fontSize: "1.1em",
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
    const [fontSize, setFontSize] = useState(MAX_FONT_SIZE);

    useEffect(() => {
      const handleScroll = () => {
        const scrollY = Math.min(window.scrollY || 0, MAX_SCROLL);
        const progress = scrollY / MAX_SCROLL; // 0 → 1

        const nextSize =
          MAX_FONT_SIZE - (MAX_FONT_SIZE - MIN_FONT_SIZE) * progress;

        setFontSize(nextSize);
      };

      handleScroll();

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <LogoLink {...props} ref={ref} $fontSize={fontSize}>
        <FirstName>{firstName}</FirstName>
        <LastName>{lastName}</LastName>
      </LogoLink>
    );
  }
);

Logo.displayName = "Logo";
