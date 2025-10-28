export const theme = {
  colors: {
    hover: "#00ff00",
    // hover: "#57DB0A",
    background: "#f5f5f5",
    text: "#333",
    textLight: "#656565",
  },
  spacing: (factor: number) => `${factor * 8}px`,
  shadow: "1px 1px 2px rgba(0, 0, 0, 0.25)",
  fonts: {
    base: "'Switzer-Variable', 'Switzer-Regular', sans-serif",
    heading: "'Switzer-Bold', sans-serif",
    pixel: '"Invasion2000", system-ui, sans-serif',
    dmSans: "'DM Sans', sans-serif",
    archia: "'Archia', sans-serif",
    inter: '"Inter", sans-serif',
    garamond: "'EB Garamond', Garamond, serif",
  },
  media: {
    mobileS: `@media (max-width: 440px)`,
    mobileM: `@media (max-width: 580px)`,
    mobileL: `@media (max-width: 780px)`,
    tablet: `@media (max-width: 1000px)`,
  },
  animations: {
    hoverLift: {
      transition: "transform 0.3s ease",
      "&:hover": {
        transform: "translateY(-4px)",
      },
      "&:not(:hover)": {
        transform: "translateY(0px)",
      },
    },
    hoverLiftGreen: {
      transition: "transform 0.3s ease",
      "&:hover": {
        transform: "translateY(-4px)",
        color: "#00ff00",
      },
      "&:not(:hover)": {
        transform: "translateY(0px)",
      },
    },
    hoverLetterSpacing: {
      transition: "letter-spacing 0.3s ease",
      letterSpacing: "0px",
      "&:hover": {
        letterSpacing: "2px",
      },
      "&:not(:hover)": {
        letterSpacing: "0px",
      },
    },
    fadeInOut: {
      animation: "fadeInOutAnim 0.6s ease",
      "@keyframes fadeInOutAnim": {
        "0%": {
          opacity: 0,
        },
        "50%": {
          opacity: 1,
        },
        "100%": {
          opacity: 0,
        },
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
