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
  visibility: isOpen ? "visible" : "hidden", // <--- DODAJ TO!
  transition: "opacity 0.5s ease, visibility 0.5s ease", // <--- Transition też dla visibility
}));

const NavbarList = styled.ul`
  padding: 0;
`;

type NavbarAltLinksWrapperProps = {
  isOpen: boolean;
  links: string[];
};

export const NavbarAltLinksWrapper = ({
  isOpen,
  links,
}: NavbarAltLinksWrapperProps) => {
  return (
    <Wrapper isOpen={isOpen}>
      <NavbarList>
        {links.map((link) => (
          <NavbarAltLink key={link} to={link}>
            {link}
          </NavbarAltLink>
        ))}
      </NavbarList>
    </Wrapper>
  );
};
