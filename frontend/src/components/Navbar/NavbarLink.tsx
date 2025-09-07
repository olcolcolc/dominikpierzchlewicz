import { Link } from "react-scroll";
import styled from "@emotion/styled";

const StyledLink = styled(Link)(({ theme }) => ({
  fontSize: "5rem",
  textDecoration: "none",
  color: "black",
  letterSpacing: "-0.05em",
  fontFamily: `${theme.fonts.dmSans}`,
  cursor: "pointer",
  transition: "color 0.3s ease",
  "&:hover": {
    color: theme.colors.hover,
  },
  [theme.media.mobileL]: {
    fontSize: "5rem",
  },
}));

const NumberSpan = styled.span({
  fontWeight: "bold",
});

type NavbarAltLinkProps = {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  index: number;
};

export const NavbarLink = ({
  to,
  children,
  onClick,
  index,
}: NavbarAltLinkProps) => {
  const formattedIndex = String(index).padStart(2, "0");

  return (
    <StyledLink
      to={to}
      spy={true}
      smooth="easeInOutQuart"
      offset={0}
      duration={500}
      onClick={onClick}
    >
      <NumberSpan>{formattedIndex} / </NumberSpan>
      {children}
    </StyledLink>
  );
};
