export const theme = {
  colors: {
    hover: "#00ff00;",
    background: "#f5f5f5",
    text: "#333",
  },
  spacing: (factor: number) => `${factor * 8}px`,
  fonts: {
    base: "'Switzer-Variable', 'Switzer-Regular', sans-serif",
    heading: "'Switzer-Bold', sans-serif",
  },
  animations: {
    hoverLift: {
      transition: "transform 0.3s ease",
      "&:hover": {
        transform: "translateY(-4px)",
      },
      "&:not(:hover)": {
        transform: "translateY(2px)",
      },
    },
  },
};

export type Theme = typeof theme;
