import styled from "@emotion/styled";
import { NavbarAltLink } from "./NavbarAltLink";

const Wrapper = styled.div<{ isOpen: boolean }>(({ theme, isOpen }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: `${theme.colors.background}`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2),
  zIndex: 9999,

  opacity: isOpen ? 1 : 0,
  pointerEvents: isOpen ? "auto" : "none",
  transition: "opacity 0.5s ease",
}));

type Props = {
  isOpen: boolean;
};

export const NavbarAltLinksWrapper = ({ isOpen }: Props) => {
  return (
    <Wrapper isOpen={isOpen}>
      <NavbarAltLink to="/bio">Bio</NavbarAltLink>
      <NavbarAltLink to="/projects">Projekty</NavbarAltLink>
      <NavbarAltLink to="/awards">Nagrody</NavbarAltLink>
      <NavbarAltLink to="/contact">Kontakt</NavbarAltLink>
    </Wrapper>
  );
};
