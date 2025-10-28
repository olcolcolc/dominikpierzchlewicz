import { Link } from "react-scroll";
import styled from "@emotion/styled";
import { useState } from "react";

const StyledLink = styled(Link)(({ theme }) => ({
  fontSize: "5rem",
  display: "inline-flex",
  alignItems: "flex-end",
  textDecoration: "none",
  color: "black",
  minHeight: "44px",
  width: "100%",
  fontFamily: theme.fonts.dmSans,
  cursor: "pointer",
  position: "relative",
  transition: "color 0.3s ease, font-family 0.3s ease, outline-color 0.2s ease",
  "&:focus-visible": {
    outline: "none",
  },
  "&:hover [data-title], &:focus-visible [data-title]": {
    fontFamily: theme.fonts.pixel,
    transition: "opacity 0.3s ease",
  },
  "&:hover [data-title]::after, &:focus-visible [data-title]::after": {
    content: '"?"',
    opacity: 1,
  },
  "@media (prefers-reduced-motion: reduce)": { transition: "none" },
}));

const NumberSpan = styled.span(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1rem",
  paddingBottom: "0.8rem",
  paddingRight: "1rem",
  [theme.media.mobileL]: { paddingBottom: "0.5rem" },
}));

const Title = styled.span(({ theme }) => ({
  letterSpacing: "-0.05em",
  lineHeight: "5.5rem",
  transition: "font-family 0.8s ease, opacity 0.8s ease",
  "&:hover, &:focus-visible": {
    fontFamily: theme.fonts.pixel,
    transition: "opacity 0.3s ease",
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
};

export const NavbarLink = ({
  to,
  children,
  onClick,
  index,
}: NavbarAltLinkProps) => {
  const [isActive, setIsActive] = useState(false);
  const formattedIndex = String(index).padStart(2, "0");

  const onKeyDown: React.KeyboardEventHandler = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      (e.currentTarget as HTMLElement).click();
    }
  };

  return (
    <StyledLink
      to={to}
      spy={true}
      smooth="easeInOutQuart"
      offset={0}
      duration={500}
      onClick={onClick}
      tabIndex={0}
      role="link"
      aria-current={isActive ? "location" : undefined}
      onSetActive={() => setIsActive(true)}
      onSetInactive={() => setIsActive(false)}
      onKeyDown={onKeyDown}
    >
      <NumberSpan aria-hidden="true">{formattedIndex} /</NumberSpan>
      <Title data-title>{children}</Title>
    </StyledLink>
  );
};
