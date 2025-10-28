import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

const Wrapper = styled.div({
  width: "100%",
  display: "flex",
  height: "100vh",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "flex-start",
  animation: "fadeIn 1s ease forwards",
  [theme.media.tablet]: {
    padding: "2rem",
  },
  [theme.media.mobileM]: {
    padding: "1.5rem 1rem",
  },
  "@keyframes fadeIn": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
});
const BioImage = styled.img({
  zIndex: -10,
  height: "380px",

  [theme.media.mobileL]: {
    height: "380px",
    objectPosition: "center",
  },
  [theme.media.mobileM]: {
    height: "300px",
  },
  [theme.media.mobileS]: {
    height: "240px",
  },
});

const BioText = styled.div({
  color: "black",
  fontFamily: theme.fonts.archia,
  lineHeight: 1.3,
  animation: "fadeIn 1.5s ease forwards 0.5s",
  zIndex: 2,

  [theme.media.tablet]: {
    right: "2rem",
    bottom: "3rem",
  },
  [theme.media.mobileL]: {
    bottom: "1rem",
  },
  [theme.media.mobileM]: {
    paddingRight: "2rem",
  },
});

const OverlayUpper = styled.p({
  fontSize: "1.3rem",
  lineHeight: 1.4,
  width: "470px",
  filter: "contrast(0.95) brightness(1.05)",

  [theme.media.tablet]: {
    fontSize: "1rem",
    width: "400px",
  },
  [theme.media.mobileL]: {
    fontSize: "1rem",
    width: "350px",
  },
  [theme.media.mobileM]: {
    fontSize: "0.95rem",
    width: "100%",
  },
});

const OverlayDown = styled.p({
  fontSize: "1.6rem",
  lineHeight: 1.4,
  width: "470px",
  fontFamily: "Georgia, serif",
  filter: "contrast(0.95) brightness(1.05)",

  [theme.media.tablet]: {
    fontSize: "1.3rem",
    width: "350px",
  },
  [theme.media.mobileL]: {
    fontSize: "1.2rem",
  },
  [theme.media.mobileM]: {
    fontSize: "1.1rem",
    width: "100%",
  },
});

export default function Bio() {
  return (
    <Wrapper>
      <>
        <BioImage
          src="/dominikpierzchlewicz/images/kotek2 — kopia.png"
          alt="Portret architekta"
        />
        <BioText>
          <OverlayUpper>
            Architekt i doktorant Szkoły Doktorskiej Politechniki Wrocławskiej.
            Doświadczenie zawodowe zdobywał w renomowanych biurach
            architektonicznych w Polsce, Szwajcarii i Holandii. Założyciel
            pracowni projektowej Obieg.
          </OverlayUpper>
          <OverlayDown>
            Jego zainteresowania naukowe i projektowe koncentrują się wokół
            zrównoważonego rozwoju oraz gospodarki cyrkularnej w architekturze.
          </OverlayDown>
        </BioText>
      </>
    </Wrapper>
  );
}
