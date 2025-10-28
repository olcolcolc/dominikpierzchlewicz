import styled from "@emotion/styled";
import { Logo } from "./Logo";
import { HamburgerMenu } from "./HamburgerMenu";

const Wrapper = styled.nav(({ theme }) => ({
  position: "fixed",
  height: "5rem",
  // maxWidth: "1600px",
  padding: "4rem 3rem",
  zIndex: 1002,
  width: "100%",
  // border: "black solid",
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

export const Navbar = () => {
  return (
    <Wrapper>
      <Logo to="/" firstName="Dominik" lastName="Pierzchlewicz" />
      <HamburgerMenu />
    </Wrapper>
  );
};
