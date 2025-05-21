import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  fontFamily: theme.fonts.base,
  fontSize: "1rem",
  color: theme.colors.text,
  textDecoration: "none",
  padding: theme.spacing(1),
  ...theme.animations.hoverLift,

  "&.active": {
    color: theme.colors.hover,
    fontWeight: "bold",
  },

  "&:hover": {
    color: theme.colors.hover,
  },
}));

type NavbarLinkProps = {
  to: string;
  children: React.ReactNode;
};

export const NavbarLink = ({ to, children }: NavbarLinkProps) => {
  return <StyledNavLink to={to}>{children}</StyledNavLink>;
};
