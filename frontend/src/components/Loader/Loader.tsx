import styled from "@emotion/styled";
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

const Spinner = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: theme.fonts.pixel,
  fontSize: "5rem",
  animation: "spin 1.2s linear infinite reverse",
  "@keyframes spin": {
    "0%": { transform: "rotate(360deg)" },
    "100%": { transform: "rotate(0deg)" },
  },
}));

type LoaderProps = {
  isVisible: boolean;
};

export const Loader = ({ isVisible }: LoaderProps) => {
  return (
    <LoaderWrapper isVisible={isVisible}>
      <Spinner aria-label="Loading...">?</Spinner>
    </LoaderWrapper>
  );
};
