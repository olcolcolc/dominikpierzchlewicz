import styled from "@emotion/styled";
import kotek from "../../assets/images/kotek.jpg";
import { MenuTitle } from "../../components/MenuTitle/MenuTitle";

const Wrapper = styled.section({
  position: "relative",
  width: "100%",
  minHeight: "200vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
});

const HoverText = styled.div(({ theme }) => ({
  mixBlendMode: "difference",
  ...theme.animations.hoverLift,
}));

const TextWrapper = styled.div({
  width: "90%",
  display: "flex",
  justifyContent: "flex-end",
  gap: "2rem",
});

const BioText = styled.div(({ theme }) => ({
  textTransform: "uppercase",
  fontSize: "2rem",
  fontFamily: theme.fonts.base,
  color: theme.colors.text,
  maxWidth: "600px",
}));

const ImageWrapper = styled.div({
  flex: "1",
  height: "500px",
  backgroundImage: `url(${kotek})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  transform: "translateX(-90%)",
  animation: "slideIn 2s forwards",
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
          Politechniki Wrocławskiej. Doświadczenie zawodowe zdobywał w
          renomowanych biurach architektonicznych w Polsce, Szwajcarii i
          Holandii. Jego zainteresowania naukowe i projektowe koncentrują się
          wokół gospodarki cyrkularnej w architekturze oraz zrównoważonego
          rozwoju środowiska zbudowanego.
        </BioText>
      </TextWrapper>
    </Wrapper>
  );
}

export default Bio;
