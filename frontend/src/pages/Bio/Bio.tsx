import { useState } from "react";
import styled from "@emotion/styled";
import { MenuTitle } from "../../components/MenuTitle/MenuTitle";
import { theme } from "../../styles/theme";

const Wrapper = styled.section({
  position: "relative",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "4rem 0",
});

const TextWrapper = styled.div({
  display: "flex",
  flexDirection: "row",
  paddingRight: "5rem",
  paddingTop: "2rem",
  gap: 30,
  maxHeight: "500px",
  [theme.media.mobileL]: {
    width: "100%",
    flexDirection: "column",
    gap: 0,
    marginTop: "1rem",
    paddingRight: "2rem",
  },
  [theme.media.mobileM]: {
    paddingRight: "2.5rem",
    marginTop: "0.3rem",
  },
});

const BioText = styled.div({
  fontSize: "2rem",
  width: "90%",
  fontFamily: theme.fonts.archia,
  color: theme.colors.text,
  opacity: 0,
  animation: "fadeIn 1s ease forwards 0.5s",

  "@keyframes fadeIn": {
    to: {
      opacity: 1,
    },
  },

  [theme.media.tablet]: {
    fontSize: "1.5rem",
    width: "100%",
    paddingTop: "1rem",
    paddingLeft: "1rem",
  },
  [theme.media.mobileL]: {
    paddingLeft: "2rem",
  },
});

const StyledImage = styled.img<{ isLoaded: boolean }>(({ isLoaded }) => ({
  width: "100%",
  maxWidth: "500px",
  height: "auto",
  objectFit: "cover",
  transform: isLoaded ? "translateX(0)" : "translateX(-90%)",
  transition: "transform 1.5s ease, opacity 0.6s ease",

  [theme.media.tablet]: {
    height: "200px",
  },
}));

function Bio() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Wrapper>
      <MenuTitle>Bio</MenuTitle>
      <TextWrapper>
        <StyledImage
          src="/dominikpierzchlewicz/images/kotek.jpg"
          alt="Portret architekta"
          loading="eager"
          isLoaded={isLoaded}
          onLoad={() => setIsLoaded(true)}
        />
        <BioText>
          Architekt i doktorant Szkoły Doktorskiej Politechniki Wrocławskiej.
          Doświadczenie zawodowe zdobywał w renomowanych biurach&nbsp;
          architektonicznych w Polsce, Szwajcarii i Holandii. Jego
          zainteresowania naukowe i projektowe koncentrują się wokół&nbsp;
          gospodarki cyrkularnej w architekturze oraz zrównoważonego rozwoju
          środowiska zbudowanego.
        </BioText>
      </TextWrapper>
    </Wrapper>
  );
}

export default Bio;
