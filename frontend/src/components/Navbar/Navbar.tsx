import styled from "@emotion/styled";
import { Logo } from "./Logo";
import { NavbarLink } from "./NavbarLink";

const Wrapper = styled.nav`
  padding: ${({ theme }) => theme.spacing(2)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarLinksWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  align-items: center;
`;

export const Navbar = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo>Dominik</Logo>
        <Logo>Pierzchlewicz</Logo>
      </LogoWrapper>
      <NavbarLinksWrapper>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/projects">Projects</NavbarLink>
        <NavbarLink to="/contact">Contact</NavbarLink>
      </NavbarLinksWrapper>
    </Wrapper>
  );
};
