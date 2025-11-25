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
          <NavbarLinksWrapper
            variant="side"
            align="left"
            sideWidth="50rem"
            links={sections}
            onLinkClick={handleLinkClick}
            activeLink={activeSection}
          />
          <SectionWrapper>
            {sectionComponents[activeSection] || <Bio />}
          </SectionWrapper>
        </Wrapper>
      </main>
    </>
  );
};

export default MainContainer;
