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
  height: "100%",
  flexDirection: "row",
  padding: "0 2rem",
  alignItems: "flex-start",
  paddingTop: "10rem",
  [theme.media.tablet]: {
    padding: "0 1rem",
    flexDirection: "column",
    marginTop: "2rem",
  },
});

const LeftContent = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  paddingRight: "10rem",
  [theme.media.tablet]: {
    padding: "0 1rem",
    flexDirection: "column",
    marginTop: "2rem",
  },
});

const RightContent = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  [theme.media.tablet]: {
    padding: "0 1rem",
    flexDirection: "column",
    marginTop: "2rem",
  },
});

const NavbarPlaceholder = styled.div(() => ({
  width: "100%",
  padding: "3rem",
  // borderBottom: "2px solid black",
}));

const SectionWrapper = styled.div({
  width: "100%",
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
    <>
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
    </>
  );
};

export default MainContainer;
