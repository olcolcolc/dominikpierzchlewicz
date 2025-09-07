import styled from "@emotion/styled";
import { useState } from "react";
import { NavbarLinksWrapper } from "./NavbarLinksWrapper";

const ToggleButton = styled.button(({ theme }) => ({
  background: "none",
  border: "none",
  cursor: "pointer",
  width: "60px",
  padding: "0 !important",
  height: "100%",
  marginTop: "10px",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  transition: "transform 0.3s ease, color 0.3s ease",
  zIndex: 100000,
  outline: "none",

  "&:hover": {
    "& span": {
      backgroundColor: theme.colors.hover,
    },
  },

  "&:focus-visible": {
    outline: "2px solid currentColor",
  },

  [theme.media.tablet]: {
    marginRight: -5,
  },
  [theme.media.mobileL]: {
    marginRight: -8,
  },
  [theme.media.mobileS]: {
    marginRight: -10,
  },
  "@media (max-width: 570px)": {
    marginRight: -13,
    height: "85%",
  },
}));

const Bar = styled.span<{ open: boolean; index: number }>(
  ({ open, index, theme }) => {
    const base = {
      position: "absolute" as const,
      height: "6px !important",
      width: "100%",
      backgroundColor: "black",
      transition: "all 0.3s ease",
      [theme.media.tablet]: {
        width: "45px",
        height: "5px",
      },
      "@media (max-width: 570px)": {
        width: "36px",
        height: "4px",
      },
    };

    if (index === 0) {
      return {
        ...base,
        top: open ? "48%" : "6px",
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

  const handleToggle = () => setOpen((prev) => !prev);
  const handleClose = () => setOpen(false);

  return (
    <>
      <ToggleButton onClick={handleToggle} aria-label="Toggle menu">
        {[0, 1, 2].map((i) => (
          <Bar key={i} index={i} open={open} />
        ))}
      </ToggleButton>

      <NavbarLinksWrapper
        isOpen={open}
        links={["bio", "projekty", "nagrody", "kontakt"]}
        onLinkClick={handleClose}
      />
    </>
  );
};
