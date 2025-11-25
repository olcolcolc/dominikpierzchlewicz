import styled from "@emotion/styled";
// import { Link } from "react-scroll";
import React from "react";

const StyledLink = styled.div<{ $isActive: boolean }>(({ theme }) => ({
  fontSize: "5rem",
  display: "inline-flex",
  alignItems: "flex-end",
  gridTemplateColumns: "3.5ch 1fr",
  columnGap: "0.75rem",
  textDecoration: "none",
  color: "black",
  gap: "0.75rem",
  minHeight: "44px",
  width: "100%",
  fontFamily: theme.fonts.dmSans,
  cursor: "pointer",
  position: "relative",
  transition: "color 0.3s ease, font-family 0.8s ease, outline-color 0.2s ease",
  "&:focus-visible": {
    outline: "none",
  },

  "&:hover [data-title], &:focus-visible [data-title], &>span.active-title": {
    fontFamily: theme.fonts.pixel,
    transition: "opacity 0.8s ease",
  },
  "&:hover [data-title]::after, &:focus-visible [data-title]::after, &>span.active-title::after":
    {
      content: '"?"',
      opacity: 1,
    },
  "@media (prefers-reduced-motion: reduce)": { transition: "none" },
}));

const NumberSpan = styled.span(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1rem",
  minWidth: "3rem",
  paddingBottom: "0.9rem",
  [theme.media.mobileL]: { paddingBottom: "0.5rem" },
}));

const Title = styled.span(({ theme }) => ({
  letterSpacing: "-0.05em",
  lineHeight: "5.5rem",
  transition: "font-family 1s ease, opacity 0.8s ease",
  "&:hover, &:focus-visible": {
    fontFamily: theme.fonts.pixel,
  },
  "&::after": {
    content: '""',
    transition: "opacity 0.3s ease",
    marginLeft: "0.3rem",
    opacity: 0,
  },
  "@media (prefers-reduced-motion: reduce)": { transition: "none" },
  [theme.media.tablet]: { fontSize: "4rem", lineHeight: "4rem" },
  [theme.media.mobileL]: { fontSize: "3rem", lineHeight: "3rem" },
}));

type NavbarAltLinkProps = {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  index: number;
  isActiveProp: boolean;
};

export const NavbarLink = ({
  children,
  onClick,
  index,
  isActiveProp,
}: NavbarAltLinkProps) => {
  const formattedIndex = String(index).padStart(2, "0");

  const onKeyDown: React.KeyboardEventHandler = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      (e.currentTarget as HTMLElement).click();
    }
  };

  return (
    <StyledLink
      $isActive={isActiveProp}
      tabIndex={0}
      role="button"
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      <NumberSpan aria-hidden="true">{formattedIndex} /</NumberSpan>
      <Title data-title className={isActiveProp ? "active-title" : ""}>
        {children}
      </Title>
    </StyledLink>
  );
};
