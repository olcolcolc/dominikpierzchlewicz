import styled from "@emotion/styled";
import { Logo } from "./Logo";

const Wrapper = styled.nav`
  padding: ${({ theme }) => theme.spacing(2)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Navbar = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo>Dominik</Logo>
        <Logo>Pierzchlewicz</Logo>
      </LogoWrapper>
    </Wrapper>
  );
};
