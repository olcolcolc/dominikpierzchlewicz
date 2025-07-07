export const theme = {
  colors: {
    hover: "#00ff00",
    background: "#f5f5f5",
    text: "#333",
  },
  spacing: (factor: number) => `${factor * 8}px`,
  fonts: {
    base: "'Switzer-Variable', 'Switzer-Regular', sans-serif",
    heading: "'Switzer-Bold', sans-serif",
    dmSans: "'DM Sans', sans-serif",
    archia: "'Archia', sans-serif",
  },
  media: {
    mobileS: `@media (max-width: 380px)`,
    mobileM: `@media (max-width: 580px)`,
    mobileL: `@media (max-width: 780px)`,
    tablet: `@media (max-width: 1300px)`,
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
