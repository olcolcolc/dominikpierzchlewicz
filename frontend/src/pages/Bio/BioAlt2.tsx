import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { MenuTitle } from "../../components/MenuTitle/MenuTitle";

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  background-color: white;
  padding: 8rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }
  @media (max-width: 440px) {
    padding: 4rem 2rem;
  }
`;

const BioRow = styled.div(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "flex-start",
  maxWidth: "1300px",
  width: "100%",
  margin: "6rem 0",
  justifyContent: "flex-start",

  [theme.media.mobileL]: {
    flexDirection: "column",
  },

  [theme.media.mobileS]: {
    margin: "1rem 0",
  },
}));

const Text = styled.div<{ yOffset: number }>(({ yOffset, theme }) => ({
  zIndex: 2,
  width: "65%",
  marginLeft: "auto",
  marginRight: "1rem",
  fontFamily: theme.fonts.dmSans,
  fontSize: "2.7rem",
  lineHeight: 1.2,
  opacity: 0,
  animation: "fadeIn 1s ease forwards 0.3s",
  marginTop: "6rem",
  transform: `translateY(${yOffset * -1}px)`,
  transition: "transform 0.2s ease-out",

  [theme.media.tablet]: {
    fontSize: "1.9rem",
  },
  [theme.media.mobileL]: {
    fontSize: "1.5rem",
    marginTop: "2rem",
  },
  [theme.media.mobileM]: {
    fontSize: "1.2rem",
  },
  [theme.media.mobileS]: {
    width: "100%",
  },
}));

const ImageTop = styled.img(({ theme }) => ({
  position: "absolute",
  top: "-3rem",
  left: "0rem",
  maxWidth: "40%",
  objectPosition: "center",
  opacity: 0.8,
  overflow: "hidden",
  zIndex: 1,

  [theme.media.mobileS]: {
    position: "static",
    marginTop: "2rem",
    opacity: 1,
    width: "100%",
    maxWidth: "100%",
    height: "auto",
  },
}));

const StyledLinksWrapper = styled.nav(({ theme }) => ({
  width: "100%",
  fontSize: "1.4rem",
  maxWidth: "1200px",
  paddingTop: "3rem",
  display: "flex",
  textAlign: "center",
  justifyContent: "center",
  flexDirection: "row",
  gap: "2rem",
  flexWrap: "wrap",

  [theme.media.tablet]: {
    gap: "0.5rem",
    fontSize: "1.5rem",
  },
  [theme.media.mobileL]: {
    fontSize: "1rem",
  },
  [theme.media.mobileM]: {
    paddingTop: "2rem",
    fontSize: "0.8rem",
  },
  [theme.media.mobileS]: {
    width: "100%",
  },
}));

const StyledLinkItem = styled.a(({ theme }) => ({
  color: "black",
  textDecoration: "none",
  fontFamily: theme.fonts.inter,
  position: "relative",
  transition: "color 0.3s ease",

  "&:hover": {
    color: "grey",
  },
}));

function useScrollParallax(intensity: number = 0.2) {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * intensity);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [intensity]);

  return offset;
}

export default function Bio() {
  const yOffset = useScrollParallax(0.05);

  return (
    <Wrapper>
      <MenuTitle>Bio</MenuTitle>

      <BioRow>
        <Text yOffset={yOffset}>
          {" "}
          Architekt i doktorant Szkoły Doktorskiej Politechniki Wrocławskiej.
          Doświadczenie zawodowe zdobywał w renomowanych biurach
          architektonicznych w Polsce, Szwajcarii i Holandii. Założyciel
          pracowni projektowej Obieg. Jego zainteresowania naukowe i projektowe
          koncentrują się wokół zrównoważonego rozwoju oraz gospodarki
          cyrkularnej w architekturze.
          <StyledLinksWrapper aria-label="Linki do publikacji">
            <StyledLinkItem
              href="https://www.vogue.pl/a/konkurs-projekt-lazienki-dla-wspolnego-dobra"
              target="_blank"
              rel="noopener noreferrer"
              title="Artykuł w Vogue"
              aria-label="Artykuł w Vogue – otwiera się w nowej karcie"
            >
              VOGUE
            </StyledLinkItem>
            |
            <StyledLinkItem
              href="https://afasiaarchzine.com/2025/04/house-staniszow-piotr-brzoza-xm-architekten-karol-lacki-dominik-pierzchlewicz/"
              target="_blank"
              rel="noopener noreferrer"
              title="Publikacja w Afasia"
              aria-label="Afasia – otwiera się w nowej karcie"
            >
              afasia
            </StyledLinkItem>
            |
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
        </Text>
        <ImageTop
          src="/dominikpierzchlewicz/images/kotek.jpg"
          alt="Portret architekta"
        />
      </BioRow>
    </Wrapper>
  );
}
