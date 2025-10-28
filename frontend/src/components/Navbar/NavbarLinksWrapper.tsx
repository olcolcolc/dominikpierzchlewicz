import styled from "@emotion/styled";
import { NavbarLink } from "./NavbarLink";

const Wrapper = styled.nav<{ isOpen: boolean }>(({ theme, isOpen }) => ({
  position: "fixed",
  inset: 0,
  margin: 0,
  padding: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: theme.colors.background,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  zIndex: 9999,
  opacity: isOpen ? 1 : 0,
  visibility: isOpen ? "visible" : "hidden",
  pointerEvents: isOpen ? "auto" : "none",
  transition: "opacity 0.5s ease, visibility 0.5s ease",

  "@media (prefers-reduced-motion: reduce)": {
    transition: "none",
  },
}));

const Ul = styled.ul({
  listStyle: "none",
  margin: 0,
  padding: 0,
  marginLeft: "30%",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

type NavbarAltLinksWrapperProps = {
  isOpen: boolean;
  links: string[];
  onLinkClick: () => void;
  ariaLabel?: string;
  menuId?: string;
};

export const NavbarLinksWrapper = ({
  isOpen,
  links,
  onLinkClick,
  ariaLabel = "Primary",
  menuId = "primary-navigation",
}: NavbarAltLinksWrapperProps) => {
  return (
    <Wrapper
      id={menuId}
      isOpen={isOpen}
      role="navigation"
      aria-label={ariaLabel}
      aria-hidden={!isOpen}
      hidden={!isOpen}
    >
      {isOpen && (
        <Ul>
          {links.map((link, index) => (
            <li key={link}>
              <NavbarLink to={link} onClick={onLinkClick} index={index + 1}>
                {link}
              </NavbarLink>
            </li>
          ))}
        </Ul>
      )}
    </Wrapper>
  );
};
