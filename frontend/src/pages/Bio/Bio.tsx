import styled from "@emotion/styled";
import { MenuTitle } from "../../components/MenuTitle/MenuTitle";
import { theme } from "../../styles/theme";

const Wrapper = styled.section({
  position: "relative",
  width: "100%",
  minHeight: "200vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
});

const HoverText = styled.span(({ theme }) => ({
  display: "inline-block",
  ...theme.animations.hoverLift,
}));

const TextWrapper = styled.div({
  display: "flex",
  flexDirection: "row",
  paddingRight: "5rem",
  gap: 30,
  height: "50rem",

  ...theme.animations.load,
  [theme.media.tablet]: {
    width: "100%",
    flexDirection: "column",
    gap: 0,
    marginTop: "-3rem",
    paddingRight: "4rem",
  },
  [theme.media.mobileL]: {
    paddingRight: "2.5rem",
    marginTop: "-1rem",
  },
});

const BioText = styled.div(({ theme }) => ({
  fontSize: "2rem",
  width: "90%",
  fontFamily: theme.fonts.base,
  color: theme.colors.text,
  ...theme.animations.load,
  [theme.media.tablet]: {
    fontSize: "1.5rem",
    width: "100%",
    paddingTop: "1rem",
    paddingLeft: "3rem",
  },
  [theme.media.mobileL]: {
    paddingLeft: "2rem",
  },
}));

const ImageWrapper = styled.div({
  width: "100%",
  backgroundImage: `url("/dominikpierzchlewicz/images/kotek.jpg")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  transform: "translateX(-90%)",
  animation: "slideIn 4s forwards",

  "@keyframes slideIn": {
    to: {
      transform: "translateX(0)",
    },
  },
  [theme.media.tablet]: {
    height: "200px",
  },
});

function Bio() {
  return (
    <Wrapper>
      <MenuTitle>Bio</MenuTitle>
      <TextWrapper>
        <ImageWrapper />
        <BioText>
          <HoverText>Architekt</HoverText> i doktorant Szkoły Doktorskiej
          Politechniki Wrocławskiej. Doświadczenie zawodowe zdobywał w
          renomowanych biurach
          <HoverText>architektonicznych</HoverText> w Polsce, Szwajcarii i
          Holandii. Jego zainteresowania naukowe i projektowe koncentrują się
          wokół&nbsp;
          <HoverText>gospodarki cyrkularnej</HoverText> w architekturze oraz
          zrównoważonego rozwoju <HoverText>środowiska zbudowanego.</HoverText>
        </BioText>
      </TextWrapper>
    </Wrapper>
  );
}

export default Bio;
