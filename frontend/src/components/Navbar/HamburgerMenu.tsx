import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { NavbarLinksWrapper } from "./NavbarLinksWrapper";
import { sections } from "../../data/sections";

const MENU_ID = "primary-navigation";

const ToggleButton = styled.button(({ theme }) => ({
  background: "none",
  border: "none",
  cursor: "pointer",
  width: "60px",
  height: "50px",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 0,
  transition: "transform 0.3s ease, color 0.3s ease",
  zIndex: 100000,
  outline: "none",
  color: "#000",

  "&:hover span, &:focus-visible span": {
    backgroundColor: theme.colors.hover,
  },

  "&:focus-visible": {
    outlineOffset: "4px",
  },

  "@media (prefers-reduced-motion: reduce)": {
    transition: "none",
  },

  [theme.media.tablet]: {
    width: "45px",
    height: "50px",
  },
  [theme.media.mobileL]: {
    marginTop: "6px",
    height: "45px",
  },
  [theme.media.mobileM]: {
    width: "36px",
    height: "38px",
    marginTop: "0px",
  },
  [theme.media.mobileS]: {
    marginTop: "-5px",
  },
}));

const Bar = styled.span<{ open: boolean; index: number }>(
  ({ open, index, theme }) => {
    const base = {
      position: "absolute" as const,
      height: "8px !important",
      width: "100%",
      backgroundColor: "currentColor",
      transition: "all 0.3s ease",
      borderRadius: "2px",
      "@media (prefers-reduced-motion: reduce)": {
        transition: "none",
      },
      [theme.media.tablet]: { height: "6px !important" },
      [theme.media.mobileL]: { height: "5.5px !important" },
      [theme.media.mobileM]: { height: "4.7px !important" },
    };

    if (index === 0) {
      return {
        ...base,
        top: open ? "46%" : "6px",
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
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const handleToggle = () => setOpen((prev) => !prev);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const navEl = document.getElementById(MENU_ID);
    const firstFocusable = navEl?.querySelector<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"]), input, select, textarea'
    );
    firstFocusable?.focus();
  }, [open]);

  const label = open ? "Close menu" : "Open menu";

  return (
    <>
      <ToggleButton
        ref={btnRef}
        type="button"
        onClick={handleToggle}
        aria-label={label}
        aria-controls={MENU_ID}
        aria-expanded={open}
      >
        {[0, 1, 2].map((i) => (
          <Bar key={i} index={i} open={open} aria-hidden="true" />
        ))}
      </ToggleButton>
      <NavbarLinksWrapper
        isOpen={open}
        links={sections}
        onLinkClick={handleClose}
        ariaLabel="Navbar menu links"
      />
    </>
  );
};
