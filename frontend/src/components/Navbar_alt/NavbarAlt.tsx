import styled from "@emotion/styled";
import { Logo } from "../Navbar/Logo";
import { NavbarLink } from "../Navbar/NavbarLink";

const Wrapper = styled.nav(({ theme }) => ({
  position: "sticky",
  top: 0,
  zIndex: 1000,
  padding: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

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

export const NavbarAlt = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo>Dominik Pierzchlewicz</Logo>
      </LogoWrapper>
      <NavbarLinksWrapper>
        <NavbarLink to="/bio">Bio</NavbarLink>
        <NavbarLink to="/projects">Projekty</NavbarLink>
        <NavbarLink to="/awards">Nagrody</NavbarLink>
        {/* <NavbarLink to="/publications">Publikacje</NavbarLink> */}
        <NavbarLink to="/contact">Kontakt</NavbarLink>
      </NavbarLinksWrapper>
    </Wrapper>
  );
};
