// src/components/Navbar/Navbar.tsx
import styled from "@emotion/styled";
import { Logo } from "./Logo";
import { HamburgerMenu } from "./HamburgerMenu";
import { useEffect, useRef } from "react";

const Wrapper = styled.nav(({ theme }) => ({
  position: "fixed",
  height: "4rem",
  zIndex: 1002,
  width: "100%",
  paddingRight: theme.spacing(1.5),
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "transparent",
  [theme.media.tablet]: {
    height: "3rem",
  },
  [theme.media.mobileL]: {
    alignItems: "flex-start",
  },
}));

type NavbarProps = {
  onLogoWidthMeasured: (width: number) => void;
};

export const Navbar = ({ onLogoWidthMeasured }: NavbarProps) => {
  const logoRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const updateLogoWidth = () => {
      if (logoRef.current) {
        onLogoWidthMeasured(logoRef.current.offsetWidth);
      }
    };

    updateLogoWidth();

    window.addEventListener("resize", updateLogoWidth);

    return () => window.removeEventListener("resize", updateLogoWidth);
  }, [onLogoWidthMeasured]);

  return (
    <Wrapper>
      <Logo to="/" ref={logoRef}>
        Dominik Pierzchlewicz
      </Logo>
      <HamburgerMenu />
    </Wrapper>
  );
};
