import { useEffect, useState } from "react";
import styled from "@emotion/styled";

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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;
`;

const imageModules = import.meta.glob(
  "../../assets/images/slider/*.{jpg,jpeg,png}",
  {
    eager: true,
    import: "default",
  }
);

const images = Object.entries(imageModules).map(([path, src]) => ({
  src: src as string,
  alt:
    path
      .split("/")
      .pop()
      ?.replace(/\.\w+$/, "") || "slider image",
}));

export const SliderStatic = () => {
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);

  const loopedImages = [
    { ...images[images.length - 1], _key: "prev_clone" },
    ...images.map((img, i) => ({ ...img, _key: `original_${i}` })),
    { ...images[0], _key: "next_clone" },
  ];

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

  return (
    <SliderWrapper>
      <Track translateX={-index * 100} transition={transition}>
        {loopedImages.map((img) => (
          <Slide key={img._key} aria-label={img.alt}>
            <StyledImg src={img.src} alt={img.alt} />
          </Slide>
        ))}
      </Track>
    </SliderWrapper>
  );
};
