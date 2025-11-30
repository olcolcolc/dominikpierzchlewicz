import React, { useState } from "react";
import styled from "@emotion/styled";
import { projectsData } from "../../data/projectsData";
import { theme } from "../../styles/theme";
import { ProjectModal } from "./ProjectModal";

const OVERLAY_TITLE = "2rem";
const GAP = "0.7rem";

const Wrapper = styled.div({
  display: "block",
  overflow: "hidden",
  [theme.media.tablet]: {
    padding: "0",
  },
});

const ColumnsWrapper = styled.div({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  columnGap: GAP,
  marginBottom: "-2rem",
  [theme.media.mobileM]: {
    gridTemplateColumns: "1fr",
    rowGap: "1.2rem",
  },
});

const LeftColumn = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: GAP,
  "& > div:last-child": {
    height: `calc(22rem - ${OVERLAY_TITLE})`,
  },
});

const RightColumn = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: GAP,
  transform: `translateY(-${OVERLAY_TITLE})`,
});

const Card = styled.div({
  position: "relative",
  height: "22rem",
  aspectRatio: "1 / 1",
  overflow: "hidden",
  cursor: "pointer",

  "&:hover .title": {
    opacity: 1,
  },
});

const Image = styled.img({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  transition: "transform 0.6s ease",
  position: "relative",
  zIndex: 2,
});

const TitleInside = styled.div({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: theme.colors.hover,
  fontFamily: theme.fonts.martian,
  fontStyle: "italic",
  fontWeight: "bold",
  fontSize: "4rem",
  letterSpacing: "0.00001em",
  opacity: 0,
  pointerEvents: "none",
  transition: "opacity",
  zIndex: 5,
});

type Project = (typeof projectsData)[number];

const Projects = () => {
  const leftProjects = projectsData.filter((_, index) => index % 2 === 0);
  const rightProjects = projectsData.filter((_, index) => index % 2 !== 0);

  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const handleCardClick = (project: Project) => {
    setActiveProject(project);
  };

  const handleCloseModal = () => setActiveProject(null);

  return (
    <>
      <Wrapper>
        <ColumnsWrapper>
          <LeftColumn>
            {leftProjects.map((project) => {
              const cover = project.gallery[0];
              if (!cover) return null;

              return (
                <Card
                  key={project.title}
                  onClick={() => handleCardClick(project)}
                >
                  <Image src={cover} alt={project.title} />
                  <TitleInside className="title">{project.title}</TitleInside>
                </Card>
              );
            })}
          </LeftColumn>

          <RightColumn>
            {rightProjects.map((project) => {
              const cover = project.gallery[0];
              if (!cover) return null;

              return (
                <Card
                  key={project.title}
                  onClick={() => handleCardClick(project)}
                >
                  <Image src={cover} alt={project.title} />
                  <TitleInside className="title">{project.title}</TitleInside>
                </Card>
              );
            })}
          </RightColumn>
        </ColumnsWrapper>
      </Wrapper>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Projects;
