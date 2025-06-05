import { Link } from "react-scroll";
import styled from "@emotion/styled";

const StyledLink = styled(Link)(({ theme }) => ({
  fontSize: "5rem",
  textDecoration: "none",
  textTransform: "capitalize",
  color: theme.colors.text,
  cursor: "pointer",
  transition: "color 0.3s ease",
  "&:hover": {
    color: theme.colors.hover,
  },
}));

type NavbarAltLinkProps = {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export const NavbarAltLink = ({
  to,
  children,
  onClick,
}: NavbarAltLinkProps) => {
  return (
    <StyledLink
      to={to}
      spy={true}
      smooth="easeInOutQuart"
      offset={0}
      duration={500}
      onClick={onClick}
    >
      {children}
    </StyledLink>
  );
};
