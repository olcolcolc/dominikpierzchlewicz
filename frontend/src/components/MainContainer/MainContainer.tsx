import styled from "@emotion/styled";
import { getNavbarHeightStyles, theme, type Theme } from "../../styles/theme";
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
  padding: "0 2rem",
  height: "100hv",
  [theme.media.tablet]: {
    padding: "0 1rem",
    flexDirection: "column",
    marginTop: "2rem",
  },
});

const Content = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  paddingTop: "2rem",
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
  height: "auto",
  paddingRight: "10rem",
  [theme.media.tablet]: {
    padding: "0 1rem",
    flexDirection: "column",
    marginTop: "2rem",
  },
});

const RightContent = styled.div({
  position: "relative",
  top: 0,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  height: "100%",
  [theme.media.tablet]: {
    padding: "0 1rem",
    flexDirection: "column",
    marginTop: "2rem",
  },
});

const NavbarPlaceholder = styled.div(({ theme }: { theme: Theme }) => ({
  ...getNavbarHeightStyles(theme),
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
  const [activeSection, setActiveSection] = useState(sections[0]);

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
                {sectionComponents[activeSection] || <Bio />}
              </SectionWrapper>
            </RightContent>
          </Content>
        </Wrapper>
      </main>
    </>
  );
};

export default MainContainer;
