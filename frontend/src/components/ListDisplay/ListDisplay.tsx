import { useState } from "react";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { useParallax } from "../../hooks/useParallax";
import { GalleryItemContent } from "./GalleryItemContent";
import type { GalleryItem, ImageItem } from "./types";
import { ImageHoverItem } from "./HoveredImage";

const Wrapper = styled.div({
  position: "relative",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
});

const ListWrapper = styled.ul<{ yOffset: number }>(({ yOffset }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  zIndex: 2,
  listStyle: "none",
  padding: 0,
  margin: 0,
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
}));

const ItemWrapper = styled.li<{ isExpandable: boolean }>(
  ({ isExpandable }) => ({
    display: "flex",
    padding: "1rem 2rem",
    flexDirection: "column",
    fontFamily: theme.fonts.dmSans,
    width: "100%",
    justifyContent: "center",
    borderBottom: "1px solid #A2A3A4",
    cursor: isExpandable ? "pointer" : "cell",
    transition: "background-color 0.3s ease",
    "&:last-of-type": { borderBottom: "none" },
    backgroundColor: "transparent",
    "&:hover": {},
    [theme.media.mobileM]: {
      padding: "0.8rem 1rem",
    },
  })
);

const ItemTitle = styled.div({
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

const Description = styled.div({
  fontSize: "1.4rem",
  marginTop: "0.5rem",
  whiteSpace: "pre-line",
  opacity: "0.8",
  [theme.media.mobileM]: {
    fontSize: "1rem",
    lineHeight: "1.2rem",
  },
  [theme.media.mobileS]: {
    fontSize: "0.8rem",
    lineHeight: "1rem",
  },
});

const Collaboration = styled(Description)({
  fontStyle: "italic",
  opacity: "0.6",
});

const AnimatedContentWrapper = styled.div<{ isExpanded: boolean }>(
  ({ isExpanded }) => ({
    overflow: "hidden",
    maxHeight: isExpanded ? "2000px" : "0px",
    transition: "max-height 0.9s ease",
    willChange: "max-height",
  })
);

type Props = {
  data: (ImageItem | GalleryItem)[];
};

export const ListDisplay = ({ data }: Props) => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [hasMoved, setHasMoved] = useState(false);

  const yOffset = useParallax(0.1);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    if (!hasMoved) setHasMoved(true);
  };

  const toggleExpand = (index: number) => {
    if (expandedIndex !== null) {
      setExpandedIndex(null);
      setTimeout(() => {
        setExpandedIndex(index);
      }, 400);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <Wrapper onMouseMove={handleMouseMove}>
      <ListWrapper yOffset={yOffset}>
        {data.map((item, index) => {
          const isGallery = "gallery" in item && Array.isArray(item.gallery);
          const isExpanded = expandedIndex === index;

          return (
            <ItemWrapper
              key={index}
              isExpandable={isGallery}
              onClick={() => isGallery && toggleExpand(index)}
              onMouseEnter={() => {
                if (!isGallery && "imageUrl" in item && item.imageUrl) {
                  setHoveredImage(item.imageUrl);
                }
              }}
              onMouseLeave={() => {
                if (!isGallery) setHoveredImage(null);
              }}
            >
              <ItemTitle>{item.title}</ItemTitle>
              {"description" in item && item.description && (
                <Description>{item.description}</Description>
              )}
              {"collaboration" in item && item.collaboration && (
                <Collaboration>Współpraca: {item.collaboration}</Collaboration>
              )}
              {isGallery && (
                <AnimatedContentWrapper isExpanded={isExpanded}>
                  <GalleryItemContent item={item as GalleryItem} />
                </AnimatedContentWrapper>
              )}
            </ItemWrapper>
          );
        })}
      </ListWrapper>

      {hoveredImage && hasMoved && (
        <ImageHoverItem
          src={hoveredImage}
          x={mousePosition.x}
          y={mousePosition.y}
        />
      )}
    </Wrapper>
  );
};
