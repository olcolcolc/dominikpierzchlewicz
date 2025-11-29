import { ListDisplay } from "../../components/ListDisplay/ListDisplay";
import { awardsData } from "../../data/awardsData";
// import { theme } from "../../styles/theme";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

const Wrapper = styled.div({
  width: "100%",
  display: "flex",
  height: "auto",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  [theme.media.tablet]: {
    padding: "0",
  },
});

const ListWrapper = styled.div({
  paddingTop: "2rem",
  width: "100%",
  zIndex: 10,
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
      <ListWrapper>
        <ListDisplay data={awardsData} />
      </ListWrapper>
    </Wrapper>
  );
};

export default Awards;
