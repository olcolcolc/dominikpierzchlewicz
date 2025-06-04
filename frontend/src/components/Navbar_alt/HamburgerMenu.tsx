import styled from "@emotion/styled";
import { useState } from "react";
import { NavbarAltLinksWrapper } from "./NavbarAltLinksWrapper";

const ToggleButton = styled.button(({ theme }) => ({
  background: "none",
  border: "none",
  cursor: "pointer",
  width: "50px",
  height: "50px",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform 0.3s ease, color 0.3s ease",
  zIndex: 100000,
  paddingRight: 0,
  outline: "none",

  "&:hover": {
    transform: "scale(1.1)",
  },

  "&:focus-visible": {
    outline: "2px solid currentColor",
    paddingRight: 0,
  },

  [theme.media.tablet]: {
    marginRight: -5,
  },
  [theme.media.mobileL]: {
    marginRight: -8,
  },
  [theme.media.mobileS]: {
    marginRight: -12,
  },

}));

const Bar = styled.span<{ open: boolean; index: number }>(
  ({ open, index, theme }) => {
    const base = {
      position: "absolute" as const,
      width: "60px",
      height: "6px",
      backgroundColor: "black",
      transition: "all 0.3s ease",
      [theme.media.tablet]: {
        width: "45px",
        height: "5px",
      },
    };

    if (index === 0) {
      return {
        ...base,
        top: open ? "50%" : "6px",
        transform: open ? "rotate(45deg)" : "rotate(0)",
      };
    }

    if (index === 1) {
      return {
        ...base,
        top: "50%",
        opacity: open ? 0 : 1,
        transform: "translateY(-50%)",
      };
    }

    return {
      ...base,
      bottom: open ? "40%" : "6px",
      transform: open ? "rotate(-45deg)" : "rotate(0)",
    };
  }
);

export const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ToggleButton
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {[0, 1, 2].map((i) => (
          <Bar key={i} index={i} open={open} />
        ))}
      </ToggleButton>

      <NavbarAltLinksWrapper isOpen={open} />
    </>
  );
};
