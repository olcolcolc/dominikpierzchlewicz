import { ListDisplay } from "../../components/ListDisplay/ListDisplay";
import { projectsData } from "../../data/projectsData";
import { theme } from "../../styles/theme";
import styled from "@emotion/styled";

const Wrapper = styled.div({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  [theme.media.tablet]: {
    padding: "0",
  },
});

const ListWrapper = styled.div({
  width: "100%",
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
      <ListWrapper>
        <ListDisplay data={projectsData} />
      </ListWrapper>
    </Wrapper>
  );
};

export default Projects;
