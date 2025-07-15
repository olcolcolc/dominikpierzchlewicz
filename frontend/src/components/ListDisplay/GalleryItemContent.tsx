import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import type { GalleryItem } from "./types";
import { theme } from "../../styles/theme";

const GalleryWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 1rem;
  overflow: hidden;
`;

const ScrollContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  padding-bottom: 0.5rem;
  overflow-x: scroll;
  scroll-behavior: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const GalleryImage = styled.img({
  height: "400px",
  objectFit: "cover",
  flexShrink: 0,

  [theme.media.mobileM]: {
    height: "300px",
  },
});

type Props = {
  item: GalleryItem;
};

export const GalleryItemContent = ({ item }: Props) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const [loadedCount, setLoadedCount] = useState(0);

  const handleImageLoad = () => {
    setLoadedCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedCount < item.gallery.length) return;

    const container = scrollRef.current;
    if (!container) return;

    const children = Array.from(container.children) as HTMLElement[];
    const totalWidth = children.reduce((acc, child) => {
      const style = getComputedStyle(child);
      const width = child.clientWidth;
      const marginRight = parseFloat(style.marginRight || "0");
      return acc + width + marginRight;
    }, 0);

    const containerWidth = container.clientWidth;

    if (totalWidth > containerWidth) {
      children.forEach((child) => {
        const clone = child.cloneNode(true);
        container.appendChild(clone);
      });

      const scrollSpeed = 0.3;

      const scrollStep = () => {
        if (!container) return;
        container.scrollLeft += scrollSpeed;

        if (container.scrollLeft >= totalWidth) {
          container.scrollLeft = 0;
        }

        animationRef.current = requestAnimationFrame(scrollStep);
      };

      animationRef.current = requestAnimationFrame(scrollStep);
    }

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [loadedCount, item.gallery]);

  return (
    <GalleryWrapper>
      <ScrollContainer ref={scrollRef}>
        {item.gallery.map((img, i) => (
          <GalleryImage
            key={i}
            src={img}
            onLoad={handleImageLoad}
            alt={`${item.title} ${i + 1}`}
            aria-label={item.ariaLabel}
          />
        ))}
      </ScrollContainer>
    </GalleryWrapper>
  );
};
