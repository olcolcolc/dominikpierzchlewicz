import styled from "@emotion/styled";
import { Logo } from "../Navbar/Logo";
import { HamburgerMenu } from "./HamburgerMenu";

const Wrapper = styled.nav(({ theme }) => ({
  position: "fixed",
  zIndex: 1000,
  width: "100%",
  padding: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "transparent",
}));

export const NavbarAlt = () => {
  return (
    <Wrapper>
      <Logo>Dominik Pierzchlewicz</Logo>
      <HamburgerMenu />
    </Wrapper>
  );
};
