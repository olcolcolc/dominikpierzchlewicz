import styled from "@emotion/styled";
import { Logo } from "../Navbar/Logo";
import { HamburgerMenu } from "./HamburgerMenu";

const Wrapper = styled.nav(({ theme }) => ({
  position: "sticky",
  top: 0,
  zIndex: 1000,
  padding: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const NavbarAlt = () => {
  return (
    <Wrapper>
      <Logo>Dominik Pierzchlewicz</Logo>
      <HamburgerMenu />
    </Wrapper>
  );
};
