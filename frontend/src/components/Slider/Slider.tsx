import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import type { PayloadSliderImage } from "../../interfaces/slider";

const SliderWrapper = styled.div`
  width: 100%;
  z-index: 0;
  height: 100vh;
  overflow: hidden;
  position: relative;
  margin-bottom: 4rem;
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Slider = () => {
  const [images, setImages] = useState<PayloadSliderImage[]>([]);
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);

  useEffect(() => {
    const fetchSliderImages = async () => {
      try {
        const apiUrl = `${
          import.meta.env.VITE_API_URL
        }/api/slider-images?sort=order`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setImages(data.docs);
      } catch (error) {
        console.error("Could not fetch slider images:", error);
      }
    };

    fetchSliderImages();
  }, []);

  const loopedImages = images.length
    ? [
        {
          ...images[images.length - 1],
          _uniqueKey: `prev_clone_${images[images.length - 1].id}`,
        },
        ...images.map((img) => ({ ...img, _uniqueKey: `original_${img.id}` })),
        { ...images[0], _uniqueKey: `next_clone_${images[0].id}` },
      ]
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
        {loopedImages.map((img) => (
          <Slide key={img._uniqueKey} aria-label={img.image.alt}>
            <StyledImg src={img.image.url} alt={img.image.alt} />
          </Slide>
        ))}
      </Track>
    </SliderWrapper>
  );
};
