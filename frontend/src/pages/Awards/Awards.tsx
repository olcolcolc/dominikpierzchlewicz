import { ListDisplay } from "../../components/ListDisplay/ListDisplay";
import { MenuTitle } from "../../components/MenuTitle/MenuTitle";
import { awardsData } from "../../data/awardsData";
// import { theme } from "../../styles/theme";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

const Wrapper = styled.div({
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100rem",
  justifyContent: "flex-start",
  marginTop: "-6rem",
  [theme.media.tablet]: {
    marginTop: "-6rem",
  },
});

const ListWrapper = styled.div({
  paddingTop: "25rem",
  width: "100%",
  zIndex: 10,
  maxWidth: "900px",
  [theme.media.tablet]: {
    paddingTop: "16rem",
  },
  [theme.media.mobileM]: {
    paddingTop: "13rem",
  },
  [theme.media.mobileS]: {
    paddingTop: "15rem",
  },
});

const Awards = () => {
  return (
    <Wrapper>
      <MenuTitle>Nagrody</MenuTitle>
      <ListWrapper>
        <ListDisplay data={awardsData} />;
      </ListWrapper>
    </Wrapper>
  );
};

export default Awards;
