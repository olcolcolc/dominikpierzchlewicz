import styled from "@emotion/styled";
import { NavbarLink } from "./NavbarLink";

const Wrapper = styled.ul<{ isOpen: boolean }>(({ theme, isOpen }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  width: "100vw",
  height: "100vh",
  fontFamily: `${theme.fonts.base}`,
  backgroundColor: `${theme.colors.background}`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2),
  zIndex: 9999,

  opacity: isOpen ? 1 : 0,
  visibility: isOpen ? "visible" : "hidden",
  transition: "opacity 0.5s ease, visibility 0.5s ease",
}));

type NavbarAltLinksWrapperProps = {
  isOpen: boolean;
  links: string[];
  onLinkClick: () => void;
};

export const NavbarLinksWrapper = ({
  isOpen,
  links,
  onLinkClick,
}: NavbarAltLinksWrapperProps) => {
  return (
    <Wrapper isOpen={isOpen}>
      {links.map((link) => (
        <NavbarLink key={link} to={link} onClick={onLinkClick}>
          {link}
        </NavbarLink>
      ))}
    </Wrapper>
  );
};
