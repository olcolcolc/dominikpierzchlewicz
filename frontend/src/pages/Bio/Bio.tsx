import styled from "@emotion/styled";
import { MenuTitle } from "../../components/MenuTitle/MenuTitle";
import { theme } from "../../styles/theme";

const textDownWidth = "450px";

const Wrapper = styled.div({
  position: "relative",
  width: "100%",
  padding: "8rem 3rem 0 3rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  [theme.media.tablet]: {
    padding: "2rem 2rem",
    marginBottom: "0rem",
  },
  [theme.media.mobileM]: {
    padding: "1.5rem 1rem",
  },
});

const BioTextRow = styled.div({
  display: "flex",
  gap: "1rem",
  alignItems: "flex-end",
  width: "100%",
  justifyContent: "flex-end",
  [theme.media.mobileL]: {
    flexDirection: "column",
  },
});

const BioImgRow = styled.div({
  paddingTop: "2rem",
  display: "flex",
  alignItems: "flex-start",
  width: "100%",
  justifyContent: "flex-end",
});

const TextUpper = styled.div({
  position: "relative",
  top: "-8.5rem",
  width: "390px",
  fontFamily: theme.fonts.dmSans,
  textAlign: "justify",
  fontSize: "1.3rem",
  lineHeight: 1.2,
  animation: "fadeIn 1s ease forwards 0.3s",
  transition: "transform 0.2s ease-out",
  "@media (max-width: 1300px)": {
    paddingTop: "10rem",
  },
  [theme.media.tablet]: {
    width: "270px",
  },
  [theme.media.mobileL]: {
    width: "100%",
    top: "0rem",
    paddingTop: "1.5rem",
  },
  [theme.media.mobileM]: {
    width: "100%",
    top: "0rem",
    fontSize: "1rem",
  },
});

const TextDown = styled.div({
  position: "relative",
  top: "-1rem",
  width: textDownWidth,
  fontFamily: theme.fonts.dmSans,
  textAlign: "justify",
  flexDirection: "column",
  fontSize: "1.8rem",
  animation: "fadeIn 1s ease forwards 0.3s",
  transition: "transform 0.2s ease-out",
  "@media (max-width: 1300px)": {
    top: "-16rem",
  },
  [theme.media.tablet]: {
    top: "-20rem",
    width: "400px",
    fontSize: "1.5rem",
  },
  [theme.media.mobileL]: {
    width: "100%",
    top: "0rem",
    fontSize: "1.3rem",
  },
  [theme.media.mobileM]: {
    width: "100%",
    top: "0rem",
    fontSize: "1.2rem",
  },
});

const ImageWork = styled.img({
  opacity: 0.9,
  width: "320px",
  overflow: "hidden",
  zIndex: 1,
  filter: "saturate(60%)",

  "@media (max-width: 1300px)": {
    display: "none",
  },
});

const ImagePortrait = styled.img({
  width: "300px",
  paddingTop: "10rem",
  objectPosition: "center",
  opacity: 0.9,
  overflow: "hidden",
  zIndex: 1,
  filter: "saturate(60%)",

  "@media (max-width: 1300px)": {
    paddingTop: "9rem",
  },
  [theme.media.tablet]: {
    width: "260px",
    paddingTop: "5rem",
  },
  [theme.media.mobileL]: {
    display: "none",
  },
});

const ImageHorizontal = styled.img({
  width: "565px",
  opacity: 0.9,
  filter: "saturate(60%)",
  overflow: "hidden",
  zIndex: 1,

  [theme.media.tablet]: {
    width: "460px",
  },
  [theme.media.mobileL]: {
    height: "300px",
    width: "100%",
    objectFit: "cover",
    objectPosition: "bottom",
  },
  [theme.media.mobileM]: {
    height: "250px",
  },
  [theme.media.mobileS]: {
    height: "200px",
  },
});

const StyledLinksWrapper = styled.nav({
  width: textDownWidth,
  letterSpacing: "0.2em",
  fontSize: "1rem",
  paddingTop: "2rem",
  textTransform: "uppercase",
  display: "flex",
  justifyContent: "flex-end",
  flexDirection: "row",
  gap: "1.3rem",
  "@media (max-width: 1300px)": {
    position: "relative",
    top: "-7rem",
  },

  [theme.media.mobileL]: {
    top: "-0",
    fontSize: "0.9rem",
    letterSpacing: "0em",
  },
  [theme.media.mobileM]: {
    paddingTop: "2rem",
    fontSize: "0.8rem",
    gap: "1rem",
  },
  [theme.media.mobileS]: {
    paddingTop: "1.5rem",
    gap: "0.5rem",
    fontSize: "0.8rem",
  },
});

const StyledLinkItem = styled.a({
  color: "black",
  textDecoration: "none",
  fontFamily: theme.fonts.inter,
  transition: "color 0.3s ease",

  "&:hover": {
    color: "grey",
  },
});

export default function Bio() {
  return (
    <Wrapper>
      <MenuTitle>01 / bio</MenuTitle>
      <BioImgRow>
        <ImagePortrait
          src="/dominikpierzchlewicz/images/kotek2.png"
          alt="Portret architekta"
        />
        <ImageHorizontal
          src="/dominikpierzchlewicz/images/IMG_9099.jpg"
          alt="Portret architekta"
        />
        <ImageWork
          src="/dominikpierzchlewicz/images/kotek.jpg"
          alt="Portret architekta"
        />
      </BioImgRow>
      <BioTextRow>
        <TextUpper>
          Architekt i doktorant Szkoły Doktorskiej Politechniki Wrocławskiej.
          Doświadczenie zawodowe zdobywał w renomowanych biurach
          architektonicznych w Polsce, Szwajcarii i Holandii. Założyciel
          pracowni projektowej Obieg.
        </TextUpper>
        <TextDown>
          Jego zainteresowania naukowe i projektowe koncentrują się wokół
          zrównoważonego rozwoju oraz gospodarki cyrkularnej w architekturze.
        </TextDown>
      </BioTextRow>
      <BioTextRow>
        <StyledLinksWrapper aria-label="Linki do publikacji">
          <StyledLinkItem
            href="https://www.mdpi.com/2071-1050/17/17/7580"
            target="_blank"
            rel="noopener noreferrer"
            title="Praca naukowa"
            aria-label="mdpi – otwiera się w nowej karcie"
          >
            mdpi
          </StyledLinkItem>
          /
          <StyledLinkItem
            href="https://www.vogue.pl/a/konkurs-projekt-lazienki-dla-wspolnego-dobra"
            target="_blank"
            rel="noopener noreferrer"
            title="Artykuł w Vogue"
            aria-label="Artykuł w Vogue – otwiera się w nowej karcie"
          >
            VOGUE
          </StyledLinkItem>
          /
          <StyledLinkItem
            href="https://afasiaarchzine.com/2025/04/house-staniszow-piotr-brzoza-xm-architekten-karol-lacki-dominik-pierzchlewicz/"
            target="_blank"
            rel="noopener noreferrer"
            title="Publikacja w Afasia"
            aria-label="Afasia – otwiera się w nowej karcie"
          >
            afasia
          </StyledLinkItem>
          /
          <StyledLinkItem
            href="https://www.propertydesign.pl/wywiady/109/zwyciezcy_konkursu_kolo_zatriumfowala_prostota_i_subtelny_dialog_z_historia,40142.html"
            target="_blank"
            rel="noopener noreferrer"
            title="Wywiad w PropertyDesign"
            aria-label="PropertyDesign – otwiera się w nowej karcie"
          >
            propertydesign
          </StyledLinkItem>
        </StyledLinksWrapper>
      </BioTextRow>
    </Wrapper>
  );
}
