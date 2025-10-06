import styled from "@emotion/styled";
import { MenuTitle } from "../../components/MenuTitle/MenuTitle";
import { theme } from "../../styles/theme";

const Wrapper = styled.div({
  position: "relative",
  width: "100%",
  padding: "8rem 3rem 0 3rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
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

const ImageFrame = styled.div({
  position: "relative",
  width: "100%",
  overflow: "hidden",
  marginTop: "2rem",

  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    background:
      "radial-gradient(120% 120% at 50% 50%, rgba(0,0,0,0) 60%, rgba(0,0,0,.08) 100%)",
    mixBlendMode: "multiply",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    opacity: 0.25,
    backgroundImage:
      "url(\"data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'>\
  <filter id='g'>\
    <feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/>\
    <feColorMatrix type='saturate' values='0'/>\
  </filter>\
  <rect width='100%' height='100%' filter='url(%23g)'/>\
</svg>\")",
    backgroundSize: "140px 140px",
  },
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

const ImageHorizontal = styled.img({
  width: "100%",
  objectFit: "cover",
  filter:
    "saturate(1.1) contrast(0.95) brightness(1.02) invert(10%) sepia(10%)",
  display: "block",
  zIndex: 1,
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

const OverlayText = styled.div({
  position: "absolute",
  bottom: "5rem",
  left: "1rem",
  width: "100%",
  color: "black",
  textAlign: "justify",
  fontFamily: "Georgia, serif",
  lineHeight: 1.3,
  mixBlendMode: "multiply",
  filter: "contrast(0.95) brightness(1.05)",
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
  marginBottom: "1rem",
  width: "470px",
  textAlign: "justify",
  fontFamily: "Georgia, serif",
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
  textAlign: "justify",
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

const StyledLinksWrapper = styled.nav({
  letterSpacing: "0.2em",
  fontSize: "1rem",
  paddingTop: "2rem",
  textTransform: "uppercase",
  display: "flex",
  justifyContent: "center",
  gap: "1.3rem",
  width: "100%",
  [theme.media.tablet]: {
    fontSize: "0.9rem",
  },
  [theme.media.mobileM]: {
    fontSize: "0.8rem",
    gap: "1rem",
  },
});

const StyledLinkItem = styled.a({
  color: "black",
  textDecoration: "none",
  fontFamily: "Georgia, serif",
  filter: "contrast(0.95) brightness(1.05)",
  transition: "color 0.3s ease",
  "&:hover": {
    color: "grey",
  },
});

export default function Bio() {
  return (
    <Wrapper>
      <MenuTitle>01 / bio</MenuTitle>

      <ImageFrame>
        <ImageHorizontal
          src="/dominikpierzchlewicz/images/IMG_9099.jpg"
          alt="Portret architekta"
        />
        <OverlayText>
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
          <StyledLinksWrapper aria-label="Linki do publikacji">
            <StyledLinkItem
              href="https://www.mdpi.com/2071-1050/17/17/7580"
              target="_blank"
              rel="noopener noreferrer"
              title="Praca naukowa"
            >
              mdpi
            </StyledLinkItem>
            /
            <StyledLinkItem
              href="https://www.vogue.pl/a/konkurs-projekt-lazienki-dla-wspolnego-dobra"
              target="_blank"
              rel="noopener noreferrer"
              title="Artykuł w Vogue"
            >
              VOGUE
            </StyledLinkItem>
            /
            <StyledLinkItem
              href="https://afasiaarchzine.com/2025/04/house-staniszow-piotr-brzoza-xm-architekten-karol-lacki-dominik-pierzchlewicz/"
              target="_blank"
              rel="noopener noreferrer"
              title="Publikacja w Afasia"
            >
              afasia
            </StyledLinkItem>
            /
            <StyledLinkItem
              href="https://www.propertydesign.pl/wywiady/109/zwyciezcy_konkursu_kolo_zatriumfowala_prostota_i_subtelny_dialog_z_historia,40142.html"
              target="_blank"
              rel="noopener noreferrer"
              title="Wywiad w PropertyDesign"
            >
              propertydesign
            </StyledLinkItem>
          </StyledLinksWrapper>
        </OverlayText>
      </ImageFrame>
    </Wrapper>
  );
}
