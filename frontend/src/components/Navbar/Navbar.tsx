import styled from "@emotion/styled";
import { Logo } from "./Logo";
import { HamburgerMenu } from "./HamburgerMenu";
import { useEffect, useRef } from "react";

const Wrapper = styled.nav(({ theme }) => ({
  position: "fixed",
  height: "5rem",
  padding: "0rem 1rem 0 1rem",
  zIndex: 1002,
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "transparent",
  [theme.media.tablet]: {
    height: "4rem",
  },
  [theme.media.mobileL]: {
    height: "3rem",
    padding: "0 0.7rem 0 0.7rem",
  },
  [theme.media.mobileS]: {
    padding: "0.5rem 0.5rem 0 0.5rem",
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
      <Logo to="/" firstName="Dominik" lastName="Pierzchlewicz" />
      <HamburgerMenu />
    </Wrapper>
  );
};
