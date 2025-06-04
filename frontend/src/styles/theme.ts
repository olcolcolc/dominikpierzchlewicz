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
  media: {
    mobileS: `@media (max-width: 380px)`,
    mobileL: `@media (max-width: 580px)`,
    tablet: `@media (max-width: 768px)`,
  },
  animations: {
    hoverLift: {
      transition: "transform 0.3s ease",
      "&:hover": {
        transform: "translateY(-4px)",
        fontColor: "#00ff00",
      },
      "&:not(:hover)": {
        transform: "translateY(0px)",
      },
    },
    load: {
      opacity: 0,
      animation: "fadeIn 1s ease forwards",
      "@keyframes fadeIn": {
        from: {
          opacity: 0,
        },
        to: {
          opacity: 1,
        },
      },
    },
  },
};

export type Theme = typeof theme;
