import styled from "@emotion/styled";
import { Logo } from "../Navbar/Logo";
import { HamburgerMenu } from "./HamburgerMenu";

const Wrapper = styled.nav(({ theme }) => ({
  position: "fixed",
  zIndex: 1002,
  width: "100%",
  paddingRight: theme.spacing(1.5),
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  backgroundColor: "transparent",
  [theme.media.mobileL]: {
    alignItems: "flex-start",
  },
}));

export const NavbarAlt = () => {
  return (
    <Wrapper>
      <Logo>Dominik Pierzchlewicz</Logo>
      <HamburgerMenu />
    </Wrapper>
  );
};
