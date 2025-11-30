import styled from "@emotion/styled";
import { projectsData } from "../../data/projectsData";
import { theme } from "../../styles/theme";

const OVERLAY_TITLE = "2rem";
const GAP = "0.7rem";
// const BORDER = `4px solid ${theme.colors.hover}`;

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

  // "&:hover": {
  //   borderTop: BORDER,
  // },

  // "&:hover img": {
  //   transition: "transform 0.6s ease",
  //   transform: `translateY(-${OVERLAY_TITLE})`,
  // },

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
  fontFamily: theme.fonts.dmSans,
  fontStyle: "italic",
  fontWeight: "bold",
  fontSize: "5.2rem",
  letterSpacing: "0.00001em",
  opacity: 0,
  pointerEvents: "none",
  transition: "opacity",
  zIndex: 5,
});

const Projects = () => {
  const leftProjects = projectsData.filter((_, index) => index % 2 === 0);
  const rightProjects = projectsData.filter((_, index) => index % 2 !== 0);

  return (
    <Wrapper>
      <ColumnsWrapper>
        <LeftColumn>
          {leftProjects.map((project) => {
            const cover = project.gallery[0];
            if (!cover) return null;

            return (
              <Card key={project.title}>
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
              <Card key={project.title}>
                <Image src={cover} alt={project.title} />
                <TitleInside className="title">{project.title}</TitleInside>
              </Card>
            );
          })}
        </RightColumn>
      </ColumnsWrapper>
    </Wrapper>
  );
};

export default Projects;
