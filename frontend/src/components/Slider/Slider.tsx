import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import type { SliderImage } from "../../types/slider";
import sliderImgData from "../../data/sliderImgData";
// import { fetchSliderImages } from "../../utils/fetchSliderImages";

const SliderWrapper = styled.div`
  width: 100%;
  z-index: 0;
  height: 100vh;
  overflow: hidden;
  position: relative;
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
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
`;

export const Slider = () => {
  const [images, setImages] = useState<SliderImage[]>([]);
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);

  useEffect(() => {
    setImages(sliderImgData);
    // fetchSliderImages().then(setImages);
  }, []);

  const loopedImages = images.length
    ? [images[images.length - 1], ...images, images[0]]
    : [];

  useEffect(() => {
    if (!images.length) return;
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
      setTransition(true);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  useEffect(() => {
    if (!images.length) return;

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
  }, [index, images]);

  return (
    <SliderWrapper>
      <Track translateX={-index * 100} transition={transition}>
        {loopedImages.map((img, i) => (
          <Slide
            key={i}
            style={{ backgroundImage: `url(${img.url})` }}
            aria-label={img.title}
          >
            <img src={img.url} alt={img.title} style={{ display: "none" }} />
          </Slide>
        ))}
      </Track>
    </SliderWrapper>
  );
};
