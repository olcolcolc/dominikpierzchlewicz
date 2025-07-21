import { ListDisplay } from "../../components/ListDisplay/ListDisplay";
import { MenuTitle } from "../../components/MenuTitle/MenuTitle";
import { projectsData } from "../../data/projectsData";
import { theme } from "../../styles/theme";
import styled from "@emotion/styled";

const Wrapper = styled.div({
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "4rem 2rem",
  justifyContent: "flex-start",
  [theme.media.tablet]: {
    padding: "0",
  },
});

const ListWrapper = styled.div({
  width: "100%",
  maxWidth: "1300px",
  marginTop: "19rem",
  [theme.media.tablet]: {
    marginTop: "13rem",
  },
  [theme.media.mobileL]: {
    marginTop: "11rem",
  },
  [theme.media.mobileM]: {
    marginTop: "10rem",
  },
  [theme.media.mobileS]: {
    marginTop: "12rem",
  },
});

const Projects = () => {
  return (
    <Wrapper>
      <MenuTitle>Projekty</MenuTitle>
      <ListWrapper>
        <ListDisplay data={projectsData} />
      </ListWrapper>
    </Wrapper>
  );
};

export default Projects;
