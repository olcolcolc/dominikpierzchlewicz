import styled from "@emotion/styled";
import { projectsData } from "../../data/projectsData";
import { theme } from "../../styles/theme";

const Wrapper = styled.div({
  width: "100%",
  display: "block",
  [theme.media.tablet]: {
    padding: "0",
  },
});

const Grid = styled.div({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1rem",

  [theme.media.mobileM]: {
    gridTemplateColumns: "1fr",
    gap: "1.2rem",
  },
});

const Card = styled.div({
  position: "relative",
  width: "100%",
  aspectRatio: "1 / 1",
  overflow: "hidden",
  cursor: "pointer",
  "&:hover img": {
    transition: "transform 0.6s ease",
    transform: "translateY(-3rem) ",
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
});

const Overlay = styled.div({
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  padding: "0.8rem 1rem",
  backgroundColor: "white",
  transform: "translateY(100%)",
  transition: "transform 0.6s ease",
  display: "flex",
  flexDirection: "column",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  fontFamily: theme.fonts.inter,
  fontSize: "0.8rem",
});

const Title = styled.span({
  fontWeight: 600,
});

const Projects = () => {
  console.log("projectsData:", projectsData);

  return (
    <Wrapper>
      <Grid>
        {projectsData.map((project) => {
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
      </Grid>
    </Wrapper>
  );
};

export default Projects;
