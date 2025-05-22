import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import sliderImgData from "../../data/sliderImgData";

const CarouselWrapper = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  overflow: hidden;
  position: absolute;
`;

const Track = styled.div<{ translateX: number; transition: boolean }>`
  display: flex;
  transform: translateX(${(props) => props.translateX}%);
  transition: ${(props) =>
    props.transition ? "transform 1s ease-in-out" : "none"};
  will-change: transform;
`;

const Slide = styled.div`
  flex-shrink: 0;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
`;

export const Carousel = () => {
  const images = sliderImgData;
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);

  const loopedImages = [images[images.length - 1], ...images, images[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
      setTransition(true);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === images.length + 1) {
      const timer = setTimeout(() => {
        setTransition(false);
        setIndex(1);
      }, 1000);
      return () => clearTimeout(timer);
    }
    if (index === 0) {
      const timer = setTimeout(() => {
        setTransition(false);
        setIndex(images.length);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [index]);
  console.log("Loaded images:", sliderImgData);

  return (
    <CarouselWrapper>
      <Track translateX={-index * 100} transition={transition}>
        {loopedImages.map((img, i) => (
          <Slide
            key={i}
            style={{ backgroundImage: `url(${img.url})` }}
            aria-label={img.alt}
            title={img.title}
          />
        ))}
      </Track>
    </CarouselWrapper>
  );
};
