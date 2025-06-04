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
  width: "90%",
  display: "flex",
  justifyContent: "flex-end",
  gap: "2rem",
  ...theme.animations.load,
});

const BioText = styled.div(({ theme }) => ({
  textTransform: "uppercase",
  fontSize: "2rem",
  fontFamily: theme.fonts.base,
  color: theme.colors.text,
  maxWidth: "600px",
  ...theme.animations.load,
}));

const ImageWrapper = styled.div({
  flex: "1",
  height: "500px",
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
});

function Bio() {
  return (
    <Wrapper>
      <MenuTitle>Bio</MenuTitle>
      <TextWrapper>
        <ImageWrapper />
        <BioText>
          <HoverText>Architekt</HoverText> i doktorant Szkoły Doktorskiej
          Politechniki Wrocławskiej. <br />
          Doświadczenie zawodowe zdobywał w renomowanych biurach
          architektonicznych w Polsce, Szwajcarii i Holandii. <br />
          Jego zainteresowania naukowe <br />i projektowe koncentrują się wokół
          <HoverText>&nbsp;gospodarki cyrkularnej</HoverText> w architekturze
          oraz zrównoważonego rozwoju środowiska zbudowanego.
        </BioText>
      </TextWrapper>
    </Wrapper>
  );
}

export default Bio;
