// import { theme } from "../../styles/theme";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { sections } from "../../data/sections";
import { NavbarLinksWrapper } from "../Navbar/NavbarLinksWrapper";
import Bio from "../../pages/Bio/Bio";

const Wrapper = styled.div({
  width: "100%",
  height: "100vh",
  display: "flex",
  marginTop: "10rem",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.media.tablet]: {
    padding: "0",
  },
});

const Navbar = styled.div({
  width: "100%",
  display: "flex",
  borderBottom: "1px solid black",
  height: "4rem",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  transform: "translateX(-100%)",
  animationName: "slideIn",
  animationDuration: "1s",
  animationFillMode: "forwards",
  animationTimeline: "view()", // scroll timeline
  animationRange: "entry 0% cover 40%", // od wejścia do 40% widoczności

  "@keyframes slideIn": {
    from: { transform: "translateX(-100%)", opacity: 0 },
    to: { transform: "translateX(0)", opacity: 1 },
  },

  "@media (prefers-reduced-motion: reduce)": {
    animation: "none",
    transform: "none",
    opacity: 1,
  },

  [theme.media.tablet]: { padding: "0" },
});

const SectionWrapper = styled.div({
  width: "100%",
  [theme.media.tablet]: {
    padding: "0",
  },
});

const MainContainer = () => {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Wrapper>
          <NavbarLinksWrapper
            variant="side"
            align="left"
            sideWidth="50rem"
            links={sections}
          />
          <SectionWrapper>
            <Bio></Bio>
          </SectionWrapper>
        </Wrapper>
      </main>
    </>
  );
};

export default MainContainer;
