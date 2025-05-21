import styled from "@emotion/styled";
import { NavbarLink } from "./NavbarLink";

export const Wrapper = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const NavbarLinksWrapper = () => {
  return (
    <Wrapper>
      <NavbarLink to="/bio">Bio</NavbarLink>
      <NavbarLink to="/projects">Projekty</NavbarLink>
      <NavbarLink to="/awards">Nagrody</NavbarLink>
      {/* <NavbarLink to="/publications">Publikacje</NavbarLink> */}
      <NavbarLink to="/contact">Kontakt</NavbarLink>
    </Wrapper>
  );
};
