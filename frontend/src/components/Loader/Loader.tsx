import styled from "@emotion/styled";
import loaderImage from "../../assets/images/loader.png";

const LoaderWrapper = styled.div<{ isVisible: boolean }>(
  ({ theme, isVisible }) => ({
    position: "fixed",
    inset: 0,
    backgroundColor: theme.colors.background || "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    opacity: isVisible ? 1 : 0,
    pointerEvents: "none",
    transition: "opacity 0.8s ease",
  })
);

const SpinnerImg = styled.img({
  width: "80px",
  height: "80px",
  animation: "spin 1.2s linear infinite reverse",
  "@keyframes spin": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
});

type LoaderProps = {
  isVisible: boolean;
};

export const Loader = ({ isVisible }: LoaderProps) => {
  return (
    <LoaderWrapper isVisible={isVisible}>
      <SpinnerImg src={loaderImage} alt="Loading..." />
    </LoaderWrapper>
  );
};
