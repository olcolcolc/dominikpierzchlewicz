import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { sections } from "../../data/sections";
import { NavbarLinksWrapper } from "../Navbar/NavbarLinksWrapper";
import Bio from "../../pages/Bio/Bio";
import { Contact } from "../../pages/Contact/Contact";
import Projects from "../../pages/Projects/Projects";
import Awards from "../../pages/Awards/Awards";
import { useState } from "react";
import React from "react";

const NAVBAR_HEIGHT = "5rem";

const Wrapper = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  overflow: "hidden",
  alignItems: "center",
  [theme.media.tablet]: {
    padding: "0 1rem",
    flexDirection: "column",
    marginTop: "2rem",
  },
});

const Content = styled.div({
  display: "flex",
  maxWidth: "1600px",
  zIndex: "100000",
  width: "100%",
  flex: 1,
  minHeight: 0,
  flexDirection: "row",
  padding: "0 2rem",
  alignItems: "center",
  marginTop: `-${NAVBAR_HEIGHT}`,

  [theme.media.tablet]: {
    padding: "0 1rem",
    flexDirection: "column",
    marginTop: "2rem",
  },
});
//ja zrobić ze jak myszka jest na project wrapper to niech scroll bedzie tylko tej sekcji a nie calej strony, a jak poza tą sekcją to żeby scrollowalo strone
const LeftContent = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  paddingRight: "8rem",
  [theme.media.tablet]: {
    padding: "0 1rem",
    flexDirection: "column",
    marginTop: "2rem",
  },
});

const RightContent = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  height: "100%",
  flex: 1,
  minHeight: 0,
  overflowY: "auto",
  overflowX: "hidden",
  zIndex: "100000",
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  transform: "translateZ(0)",
  "&::-webkit-scrollbar": {
    display: "none",
  },

  [theme.media.tablet]: {
    padding: "0 1rem",
    flexDirection: "column",
    marginTop: "2rem",
  },
});

const NavbarPlaceholder = styled.div(() => ({
  width: "100%",
  height: NAVBAR_HEIGHT,
  zIndex: "-1",
}));

const SectionWrapper = styled.div({
  width: "100%",
  flex: 1,
  [theme.media.tablet]: {
    padding: "0",
  },
});

const sectionComponents: Record<string, React.ReactNode> = {
  bio: <Bio />,
  projekty: <Projects />,
  wzmianki: <Awards />,
  kontakt: <Contact />,
};

const MainContainer = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleLinkClick = (linkName: string) => {
    setActiveSection(linkName);
  };

  return (
    <main>
      <Wrapper>
        <NavbarPlaceholder />
        <Content>
          <LeftContent>
            <NavbarLinksWrapper
              variant="side"
              align="left"
              links={sections}
              onLinkClick={handleLinkClick}
              activeLink={activeSection}
            />
          </LeftContent>
          <RightContent>
            <SectionWrapper>
              {activeSection ? sectionComponents[activeSection] : <Bio />}
            </SectionWrapper>
          </RightContent>
        </Content>
      </Wrapper>
    </main>
  );
};

export default MainContainer;
