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
`;

const BioRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  margin: 6rem 0;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Text = styled.div`
  flex: 1;
  font-family: ${theme.fonts.inter};
  font-size: 3.5rem;
  line-height: 1.2;
  opacity: 0;
  animation: fadeIn 1s ease forwards 0.3s;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
  @media (max-width: 1000px) {
    font-size: 1.9rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ImageBottom = styled.img<{ yOffset: number }>`
  width: 300px;
  height: auto;
  transform: translateY(${({ yOffset }) => yOffset}px);
  transition: transform 0.2s ease-out;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ImageTop = styled.img<{ yOffset: number }>`
  width: 300px;
  height: auto;
  transform: translateY(${({ yOffset }) => yOffset}px);
  transition: transform 0.2s ease-out;
  @media (max-width: 768px) {
    transform: none !important;
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
  const yOffset = useScrollParallax(0.1);

  return (
    <Wrapper>
      <MenuTitle>Bio</MenuTitle>

      <BioRow>
        <Text>
          Architekt i doktorant Szkoły Doktorskiej Politechniki Wrocławskiej.
          Doświadczenie zawodowe zdobywał w renomowanych biurach
          architektonicznych w Polsce, Szwajcarii i Holandii.
        </Text>
        <ImageTop
          src="/dominikpierzchlewicz/images/kotek.jpg"
          alt="Portret architekta"
          yOffset={yOffset}
        />
      </BioRow>

      <BioRow>
        <ImageBottom
          src="/dominikpierzchlewicz/images/kotek.jpg"
          alt="Portret architekta"
          yOffset={-yOffset}
        />
        <Text>
          Założyciel pracowni projektowej Obieg. Jego zainteresowania naukowe i
          projektowe koncentrują się wokół zrównoważonego rozwoju oraz
          gospodarki cyrkularnej w architekturze.
        </Text>
      </BioRow>
    </Wrapper>
  );
}
