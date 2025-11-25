import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { sections } from "../../data/sections";
import { NavbarLinksWrapper } from "../Navbar/NavbarLinksWrapper";
import Bio from "../../pages/Bio/Bio";

const Wrapper = styled.div({
  width: "100%",
  height: "900px",
  display: "flex",
  marginTop: "5rem",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  [theme.media.tablet]: {
    padding: "0",
  },
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
