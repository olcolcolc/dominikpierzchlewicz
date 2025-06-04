import { Link } from "react-scroll";
import styled from "@emotion/styled";

const StyledLink = styled(Link)(({ theme }) => ({
  fontSize: "2rem",
  textDecoration: "none",
  color: theme.colors.text,
  textTransform: "uppercase",
  cursor: "pointer",
  transition: "color 0.3s ease",
  "&:hover": {
    color: theme.colors.hover,
  },
}));

type NavbarAltLinkProps = {
  to: string;
  children: React.ReactNode;
};

export const NavbarAltLink = ({ to, children }: NavbarAltLinkProps) => {
  return (
    <StyledLink
      to={to}
      spy={true}
      smooth="easeInOutQuart"
      offset={-70}
      duration={1000}
    >
      {children}
    </StyledLink>
  );
};
