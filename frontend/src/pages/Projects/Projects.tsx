import styled from "@emotion/styled";
import { projectsData } from "../../data/projectsData";
import { theme } from "../../styles/theme";

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
  "& > div:last-child .overlay": {
    padding: `${GAP} 0`,
  },
});

const RightColumn = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: GAP,
  transform: `translateY(-${OVERLAY_TITLE})`,
  "& > div:last-child .overlay": {
    padding: `${GAP} 0`,
  },
});

const Card = styled.div({
  position: "relative",
  height: "22rem",
  aspectRatio: "1 / 1",
  overflow: "hidden",
  cursor: "pointer",

  "&:hover img": {
    transition: "transform 0.6s ease",
    transform: `translateY(-${OVERLAY_TITLE})`,
  },

  "&:hover .overlay": {
    transform: "translateY(0)",
  },
});

const Image = styled.img({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  transition: "transform 0.6s ease",
  "&:hover ": {
    border: "red solid 2px",
  },
});

const Overlay = styled.div({
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "white",
  transform: "translateY(100%)",
  transition: "transform 0.6s ease",
  display: "flex",
  flexDirection: "column",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  fontFamily: theme.fonts.dmSans,
  fontSize: "1rem",
});

const Title = styled.span({
  fontWeight: 600,
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
                <Overlay className="overlay">
                  <Title>{project.title}</Title>
                </Overlay>
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
                <Overlay className="overlay">
                  <Title>{project.title}</Title>
                </Overlay>
              </Card>
            );
          })}
        </RightColumn>
      </ColumnsWrapper>
    </Wrapper>
  );
};

export default Projects;
