import styled from "@emotion/styled";
import { MenuTitle } from "../../components/MenuTitle/MenuTitle";
import { theme } from "../../styles/theme";
import img1 from "../../assets/images/1gotowy.jpg";

const Wrapper = styled.section({
  position: "relative",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "4rem 0",
});

// const TextWrapper = styled.div({
//   width: "100%",
//   maxWidth: "1100px",
//   padding: "2rem",
//   overflow: "hidden", // Ważne dla float, aby kontener obejmował floatujące dzieci

//   [theme.media.tablet]: {
//     fontSize: "1.5rem",
//   },
//   [theme.media.mobileL]: {
//     fontSize: "1.3rem",
//   },
//   [theme.media.mobileM]: {
//     fontSize: "1rem",
//   },
// });

const StyledImage = styled.img({
  float: "left",
  maxWidth: "20%",
  marginRight: "1rem",
  objectFit: "cover",
  transition: "transform 1s ease",
  [theme.media.mobileM]: {
    maxWidth: "50%",
  },
  [theme.media.mobileS]: {
    float: "none",
    width: "100%",
    maxWidth: "100%",
    marginRight: 0,
  },
});

const StyledImageX = styled.img(({ theme }) => ({
  float: "left", // Ten float jest zbędny
  maxWidth: "40%", // Oryginalny maxWidth
  marginRight: "1rem", // Oryginalny marginRight
  objectFit: "cover",
  transition: "transform 1s ease, opacity 0.5s ease",

  [theme.media.mobileM]: {
    maxWidth: "50%",
  },
  [theme.media.mobileS]: {
    float: "none",
    width: "100%",
    maxWidth: "100%",
    marginRight: 0,
  },
}));

const BioContainer = styled.div({
  opacity: 0,
  padding: "0 1rem",
  fontFamily: theme.fonts.inter,
  fontSize: "16px",
  maxWidth: "1100px",
  overflow: "hidden",
  animation: "fadeIn 1s ease forwards 0.5s",
  lineHeight: 1, // Dodano lineHeight, bo go brakowało w oryginalnym BioText

  "@keyframes fadeIn": {
    to: {
      opacity: 1,
    },
  },
});

function Bio() {
  // Usunięto isLoaded i setIsLoaded stany, bo nie są już potrzebne

  const fullContentText = `
    Architekt i doktorant Szkoły Doktorskiej Politechniki Wrocławskiej.
    Doświadczenie zawodowe zdobywał w renomowanych biurach
    architektonicznych w Polsce, Szwajcarii i Holandii. Jego
    zainteresowania naukowe i projektowe koncentrują się wokół gospodarki
    cyrkularnej w architekturze oraz zrównoważonego rozwoju środowiska
    zbudowanego.Architekt i doktorant Szkoły Doktorskiej Politechniki
    Wrocławskiej. Doświadczenie zawodowe zdobywał w renomowanych biurach
    architektonicznych w Polsce, Szwajcarii i Holandii. Jego
    zainteresowania naukowe i projektowe koncentrują się wokół gospodarki
    cyrkularnej w architekturze oraz zrównoważonego rozwoju środowiska
    zbudowanego.Architekt i doktorant Szkoły Doktorskiej Politechniki
    Wrocławskiej. Doświadczenie zawodowe zdobywał w renomowanych biurach
    architektonicznych w Polsce, Szwajcarii i Holandii. Jego
    zainteresowania naukowe i projektowe koncentrują się wokół gospodarki
    cyrkularnej w architekturze oraz zrównoważonego rozwoju środowiska
    zbudowanego.Architekt i doktorant Szkoły Doktorskiej Politechniki
    Wrocławskiej. Doświadczenie zawodowe zdobywał w renomowanych biurach
    architektonicznych w Polsce, Szwajcarii i Holandii. Jego
    zainteresowania naukowe i projektowe koncentrują się wokół gospodarki
    cyrkularnej w architekturze oraz zrównoważonego rozwoju środowiska
    zbudowanego. Lorem, ipsum dolor sit amet consectetur adipisicing.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
    possimus! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Dicta eligendi suscipit aspernatur quaerat aut cupiditate dolorum rem
    repellat aliquam excepturi!
    `;

  return (
    <Wrapper>
      <MenuTitle>Bio</MenuTitle>
      {/* <TextWrapper> */}
      <BioContainer>
        <StyledImage
          src="/dominikpierzchlewicz/images/kotek.jpg"
          alt="Portret architekta"
          loading="eager"
        />
        {fullContentText.split("\n\n").map((paragraph, index) => (
          <div key={index}>{paragraph.trim()}</div>
        ))}
      </BioContainer>
      <BioContainer>
        <StyledImageX src={img1} alt="Drugie zdjęcie architektoniczne" />
        {fullContentText.split("\n\n").map((paragraph, index) => (
          <div key={index}>{paragraph.trim()}</div>
        ))}
      </BioContainer>
      {/* </TextWrapper> */}
    </Wrapper>
  );
}

export default Bio;
