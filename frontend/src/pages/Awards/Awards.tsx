import { useState } from "react";
import styled from "@emotion/styled";
import { MenuTitle } from "../../components/MenuTitle/MenuTitle";
import { awardsData } from "../../data/awardsData";
import { theme } from "../../styles/theme";

const Wrapper = styled.section({
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  paddingBottom: "4rem",
});

const ListWrapper = styled.ul({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  zIndex: 2,
  maxWidth: "900px",
  listStyle: "none",
  padding: 0,
  margin: 0,
  marginTop: "2rem",
  borderTop: "1px solid black",
  borderBottom: "1px solid black",
  transform: "translateX(100%)",
  animation: "slideIn 3s ease forwards",
  "@keyframes slideIn": {
    to: {
      transform: "translateX(0)",
    },
  },
});

const AwardItem = styled.li({
  display: "flex",
  padding: "1rem 2rem",
  flexDirection: "column",
  fontFamily: theme.fonts.dmSans,
  width: "100%",
  lineHeight: "1.5rem",
  justifyContent: "center",
  cursor: "cell",
  transition: "background-color 0.3s ease",
  borderBottom: "1px solid black",
  "&:last-of-type": {
    borderBottom: "none",
  },
});

const AwardTitle = styled.div({
  fontSize: "1.6rem",
  fontWeight: "bold",
  width: "100%",
  color: "black",
  textAlign: "left",
});

const AwardDistinction = styled.div({
  fontSize: "1.4rem",
  width: "100%",
  opacity: 0.7,
  textAlign: "left",
  marginTop: "0.5rem",
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

function Awards() {
  const [hoveredAward, setHoveredAward] = useState<null | { image: string }>(
    null
  );
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    if (!hasMoved) setHasMoved(true);
  };

  return (
    <Wrapper onMouseMove={handleMouseMove}>
      <MenuTitle>Nagrody</MenuTitle>
      <ListWrapper>
        {awardsData.map((award, index) => (
          <AwardItem
            key={index}
            onMouseEnter={() => setHoveredAward({ image: award.imageUrl })}
            onMouseLeave={() => setHoveredAward(null)}
          >
            <AwardTitle>{award.title}</AwardTitle>
            <AwardDistinction>{award.distinction}</AwardDistinction>
          </AwardItem>
        ))}
      </ListWrapper>
      {hoveredAward?.image && hasMoved && (
        <HoverImage
          src={hoveredAward.image}
          x={mousePosition.x}
          y={mousePosition.y}
        />
      )}
    </Wrapper>
  );
}

export default Awards;
