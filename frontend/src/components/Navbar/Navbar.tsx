import styled from "@emotion/styled";
import { Logo } from "./Logo";
import { NavbarLinksWrapper } from "./NavbarLinksWrapper";

const Wrapper = styled.nav(({ theme }) => ({
  position: "sticky",
  top: 0,
  zIndex: 1000,
  padding: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.media.mobileS]: {
    top: 10,
  },
}));

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Navbar = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo>Dominik Pierzchlewicz</Logo>
      </LogoWrapper>
      <NavbarLinksWrapper />
    </Wrapper>
  );
};
