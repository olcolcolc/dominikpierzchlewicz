import { useState } from "react";
import styled from "@emotion/styled";
import { MenuTitle } from "../../components/MenuTitle/MenuTitle";
import { awardsData } from "../../data/awardsData";
import { theme } from "../../styles/theme";
import { useParallax } from "../../hooks/useParallax";

const Wrapper = styled.section({
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  paddingBottom: "4rem",

  [theme.media.mobileM]: {
    paddingBottom: "6rem",
  },
});

const ListWrapper = styled.ul<{ yOffset: number }>(({ yOffset }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  zIndex: 2,
  maxWidth: "900px",
  listStyle: "none",
  padding: 0,
  margin: 0,
  marginTop: "10rem",
  borderTop: "1px solid #A2A3A4",
  borderBottom: "1px solid #A2A3A4",
  transform: `translateY(${yOffset * -1}px)`,
  transition: "transform 0.2s ease-out",
  animation: "slideIn 3s ease forwards",
  "@keyframes slideIn": {
    to: {
      transform: `translateY(${yOffset * -1}px)`,
    },
  },
  [theme.media.mobileM]: {
    marginTop: "6.5rem",
  },
}));

const AwardItem = styled.li({
  display: "flex",
  padding: "1rem 2rem",
  flexDirection: "column",
  fontFamily: theme.fonts.dmSans,
  width: "100%",
  lineHeight: "1.8rem",
  justifyContent: "center",
  cursor: "cell",
  transition: "background-color 0.3s ease",
  borderBottom: "1px solid #A2A3A4",
  "&:last-of-type": {
    borderBottom: "none",
  },
  [theme.media.mobileM]: {
    padding: "0.5rem 1rem",
  },
});

const AwardTitle = styled.div({
  fontSize: "1.6rem",
  fontWeight: "bold",
  width: "100%",
  color: "black",
  textAlign: "left",
  [theme.media.mobileM]: {
    fontSize: "1.2rem",
    lineHeight: "1.4rem",
  },
  [theme.media.mobileS]: {
    fontSize: "1rem",
    lineHeight: "1.2rem",
  },
});

const AwardDistinction = styled.div({
  fontSize: "1.4rem",
  width: "100%",
  opacity: 0.7,
  whiteSpace: "pre-line",
  textAlign: "left",
  marginTop: "0.5rem",

  [theme.media.mobileM]: {
    fontSize: "1rem",
    lineHeight: "1.2rem",
  },
  [theme.media.mobileS]: {
    fontSize: "0.8rem",
    lineHeight: "1rem",
  },
});

const Collaboration = styled(AwardDistinction)({
  fontStyle: "italic",
});

const HoverImage = styled.img<{ x: number; y: number }>`
  position: fixed;
  height: 100px;
  opacity: 0.8;
  pointer-events: none;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  transform: translate(20px, 20px);
  z-index: 10;
`;

const Awards = () => {
  const [hoveredAward, setHoveredAward] = useState<null | { image: string }>(
    null
  );
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);
  const yOffset = useParallax(0.05);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    if (!hasMoved) setHasMoved(true);
  };

  return (
    <Wrapper onMouseMove={handleMouseMove}>
      <MenuTitle>Nagrody</MenuTitle>
      <ListWrapper
        yOffset={yOffset}
        role="list"
        aria-label="Lista nagród i wyróżnień"
      >
        {awardsData.map((award, index) => (
          <AwardItem
            key={index}
            role="listitem"
            aria-label={`${award.title}. ${award.distinction}`}
            onMouseEnter={() =>
              award.imageUrl && setHoveredAward({ image: award.imageUrl })
            }
            onMouseLeave={() => setHoveredAward(null)}
          >
            <AwardTitle>{award.title}</AwardTitle>
            <AwardDistinction>{award.distinction}</AwardDistinction>
            {award.collaboration && (
              <Collaboration>Współpraca: {award.collaboration}</Collaboration>
            )}
          </AwardItem>
        ))}
      </ListWrapper>

      {hoveredAward?.image && hasMoved && (
        <HoverImage
          src={hoveredAward.image}
          x={mousePosition.x}
          y={mousePosition.y}
          alt={
            awardsData.find((a) => a.imageUrl === hoveredAward.image)?.title ||
            ""
          }
          aria-hidden="true"
        />
      )}
    </Wrapper>
  );
};

export default Awards;
