import styled from "@emotion/styled";
import { NavbarLink } from "./NavbarLink";

type Variant = "overlay" | "side";

type NavbarLinksWrapperProps = {
  isOpen?: boolean;
  links: string[];
  onLinkClick?: (linkName: string) => void;
  activeLink?: string | null;
  ariaLabel?: string;
  menuId?: string;
  variant?: Variant;
  align?: "left" | "right";
  sideWidth?: string;
};

const Wrapper = styled.nav<{
  variant: Variant;
  isOpen?: boolean;
  sideWidth: string;
  align: "left" | "right";
}>(({ theme, variant, isOpen, sideWidth, align }) => {
  const isOverlay = variant === "overlay";

  if (isOverlay) {
    return {
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
    };
  }

  return {
    top: 0,
    width: sideWidth,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    zIndex: 20,
    opacity: 1,
    visibility: "visible",
    ...(align === "right" ? { marginLeft: "auto" } : {}),
  };
});

export const Ul = styled.ul<{ variant: Variant }>(({ variant }) => ({
  listStyle: "none",
  margin: 0,
  padding: variant === "overlay" ? 0 : "1rem 0 1rem 1rem",
  marginLeft: variant === "overlay" ? "30%" : 0,
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  width: "100%",
}));

export const NavbarLinksWrapper = ({
  variant = "overlay",
  align = "left",
  sideWidth = "400px",
  isOpen = false,
  links,
  onLinkClick = () => {},
  activeLink = null,
  ariaLabel = "Primary",
  menuId = "primary-navigation",
}: NavbarLinksWrapperProps) => {
  const isOverlay = variant === "overlay";

  const ariaHidden = isOverlay ? !isOpen : false;
  const hidden = isOverlay ? !isOpen : false;

  return (
    <Wrapper
      id={menuId}
      variant={variant}
      isOpen={isOpen}
      sideWidth={sideWidth}
      align={align}
      role="navigation"
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      hidden={hidden}
    >
      {(!isOverlay || isOpen) && (
        <Ul variant={variant}>
          {links.map((link, index) => (
            <li key={link}>
              <NavbarLink
                to={link}
                onClick={() => onLinkClick(link)}
                index={index + 1}
                isActiveProp={activeLink === link}
              >
                {link}
              </NavbarLink>
            </li>
          ))}
        </Ul>
      )}
    </Wrapper>
  );
};
