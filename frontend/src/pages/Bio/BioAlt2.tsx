import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { MenuTitle } from "../../components/MenuTitle/MenuTitle";
import { theme } from "../../styles/theme";

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

const BioRow = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  max-width: 1300px;
  width: 100%;
  margin: 6rem 0;
  justify-content: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 440px) {
    margin: 1rem 0;
  }
`;

const Text = styled.div<{ yOffset: number }>`
  z-index: 2;
  width: 65%;
  margin-left: auto;
  margin-right: 1rem;
  font-family: ${theme.fonts.heading};
  font-size: 2.7rem;
  line-height: 1.2;
  opacity: 0;
  animation: fadeIn 1s ease forwards 0.3s;
  margin-top: 6rem;
  transform: translateY(${({ yOffset }) => yOffset * -1}px);
  transition: transform 0.2s ease-out;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  @media (max-width: 1100px) {
    font-size: 1.9rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: 1rem;
    transform: none !important;
  }

  @media (max-width: 440px) {
    font-size: 1.2rem;
    width: 100%;
    transform: none !important;
  }
`;

const ImageTop = styled.img`
  position: absolute;
  top: -3rem;
  left: 0rem;
  max-width: 40%;
  object-position: center;
  opacity: 0.8;
  overflow: hidden;
  z-index: 1;
  @media (max-width: 440px) {
    position: static;
    margin-top: 2rem;
    opacity: 1;
    width: 100%;
    max-width: 100%;
    height: auto;
  }
`;

const LinksWrapper = styled.ul`
  width: 100%;
  max-width: 1200px;
  padding: 4rem 0 0;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
  @media (max-width: 768px) {
    font-size: 1rem;
    gap: 0.2rem;
    padding: 2rem 0 0;
  }
`;

const LinkItem = styled.a`
  color: black;
  text-decoration: none;
  font-family: ${theme.fonts.inter};
  font-size: 1.4rem;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

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
          <LinksWrapper>
            <LinkItem
              href="https://www.vogue.pl/a/konkurs-projekt-lazienki-dla-wspolnego-dobra"
              target="_blank"
              rel="noopener noreferrer"
            >
              VOGUE |
            </LinkItem>
            <LinkItem
              href="https://afasiaarchzine.com/2025/04/house-staniszow-piotr-brzoza-xm-architekten-karol-lacki-dominik-pierzchlewicz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              afasia |
            </LinkItem>
            <LinkItem
              href="https://www.propertydesign.pl/wywiady/109/zwyciezcy_konkursu_kolo_zatriumfowala_prostota_i_subtelny_dialog_z_historia,40142.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              propertydesign
            </LinkItem>
          </LinksWrapper>
        </Text>
        <ImageTop
          src="/dominikpierzchlewicz/images/kotek.jpg"
          alt="Portret architekta"
        />
      </BioRow>
    </Wrapper>
  );
}
