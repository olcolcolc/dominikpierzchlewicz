import styled from "@emotion/styled";

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

type Props = {
  src: string;
  x: number;
  y: number;
};

export const ImageHoverItem = ({ src, x, y }: Props) => (
  <HoverImage src={src} x={x} y={y} alt="" aria-hidden="true" />
);
