import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

const Wrapper = styled.div({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
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

const BioImageWrapper = styled.div<{ $isVisible: boolean }>(
  ({ $isVisible }) => ({
    position: "relative",
    width: "290px",
    overflow: "hidden",

    clipPath: $isVisible ? "inset(0 0 0 0)" : "inset(100% 0 0 0)",
    transition: "clip-path 0.4s cubic-bezier(0.4, 0, 0.2, 1)",

    [theme.media.mobileL]: {
      height: "380px",
    },
    [theme.media.mobileM]: {
      height: "300px",
    },
    [theme.media.mobileS]: {
      height: "240px",
    },
  })
);

const BioImage = styled.img({
  width: "100%",
  height: "100%",
  objectFit: "cover",

  "&:hover": {
    content: 'url("/dominikpierzchlewicz/images/kotek2.png")',
  },
});

const BioText = styled.div({
  color: "black",
  fontFamily: theme.fonts.dmSans,
  width: "50%",

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

const TextUpper = styled.p({
  fontSize: "1.3rem",
  lineHeight: 1.4,

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

const TextDown = styled.p({
  fontSize: "1.6rem",
  lineHeight: 1.4,

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <Wrapper>
      <BioImageWrapper $isVisible={isVisible}>
        <BioImage
          src="/dominikpierzchlewicz/images/kotek2 — kopia.png"
          alt="Portret architekta"
        />
      </BioImageWrapper>
      <BioText>
        <TextUpper>
          Architekt i doktorant Szkoły Doktorskiej Politechniki Wrocławskiej.
          Doświadczenie zawodowe zdobywał w renomowanych biurach
          architektonicznych w Polsce, Szwajcarii i Holandii. Założyciel
          pracowni projektowej Obieg.
        </TextUpper>
        <TextDown>
          Jego zainteresowania naukowe <br />i projektowe koncentrują się wokół
          zrównoważonego rozwoju oraz gospodarki cyrkularnej w architekturze.
        </TextDown>
      </BioText>
    </Wrapper>
  );
}
