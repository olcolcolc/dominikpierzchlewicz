import styled from "@emotion/styled";
import { Logo } from "./Logo";
import { HamburgerMenu } from "./HamburgerMenu";

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

export const Navbar = () => {
  return (
    <Wrapper>
      <Logo>Dominik Pierzchlewicz</Logo>
      <HamburgerMenu />
    </Wrapper>
  );
};
