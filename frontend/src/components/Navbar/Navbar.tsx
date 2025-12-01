import styled from "@emotion/styled";
import { useState } from "react";
import { Logo } from "./Logo";
import { HamburgerMenu } from "./HamburgerMenu";
import { useHideOnHalfOf } from "../../hooks/useHideOnHalfOf";
import { NavbarLinksWrapper } from "./NavbarLinksWrapper";
import { sections } from "../../data/sections";
import { getNavbarHeightStyles } from "../../styles/theme";

const Wrapper = styled.nav(({ theme }) => ({
  ...getNavbarHeightStyles(theme),
  position: "fixed",
  zIndex: 99999999,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "transparent",
  [theme.media.mobileL]: { padding: "0 0.7rem" },
  [theme.media.mobileS]: {
    padding: "0.5rem 0.5rem 0 0.5rem",
    alignItems: "flex-start",
  },
}));

const LogoWrapper = styled.div<{ isOpen: boolean }>(({ isOpen }) => ({
  zIndex: 1,
  opacity: isOpen ? 0 : 1,
  visibility: isOpen ? "hidden" : "visible",
  transition: "opacity 0.3s ease, visibility 0.3s ease",
}));

const Hideable = styled.div<{ hidden: boolean }>(({ hidden }) => {
  const jellyCurve = `linear(
    0, 0.01, 0.04, 0.09, 0.16, 0.25, 0.36 15%, 0.48, 0.62, 0.78, 0.9, 1,
    0.96 35%, 0.94, 0.93, 0.94, 0.96, 0.98, 1
  )`;

  return {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    backfaceVisibility: "hidden",
    transformOrigin: "top center",
    willChange: "transform",
    zIndex: 100000,

    transform: hidden ? "translateY(-300%)" : "translateY(0)",
    transitionProperty: "transform",
    transitionDuration: "0.7s",
    transitionTimingFunction: jellyCurve,

    pointerEvents: hidden ? "none" : "auto",

    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
      transform: hidden ? "translateY(-200%)" : "translateY(0)",
    },
  };
});

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen((prev) => !prev);
  const handleClose = () => setOpen(false);

  const hideBurger = useHideOnHalfOf("#hero-slider");
  return (
    <>
      <Wrapper>
        <LogoWrapper isOpen={open}>
          <Logo to="/" firstName="Dominik" lastName="Pierzchlewicz" />
        </LogoWrapper>{" "}
        <Hideable hidden={hideBurger}>
          <HamburgerMenu open={open} onToggle={handleToggle} />
        </Hideable>
      </Wrapper>
      <NavbarLinksWrapper
        isOpen={open}
        links={sections}
        onLinkClick={handleClose}
      />
    </>
  );
};
