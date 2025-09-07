import styled from "@emotion/styled";
import type { ReactNode } from "react";

const StyledMenuTitle = styled.div(({ theme }) => {
  return {
    color: "black",
    position: "relative",
    width: "100%",
    display: "flex",
    textAlign: "left",
    fontFamily: `${theme.fonts.dmSans}`,
    fontSize: "3rem",
    paddingBottom: "0.1rem",
    fontWeight: "bold",
    whiteSpace: "nowrap",
    zIndex: 10,
    background: "transparent",
    ...theme.animations.load,
    [theme.media.tablet]: {
      fontSize: "2rem",
    },
    [theme.media.mobileM]: {
      fontSize: "1.5rem",
    },
    "&::after": {
      content: '""',
      display: "block",
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "4px",
      backgroundColor: "black",
      [theme.media.mobileM]: {
        height: "3px",
      },
    },
  };
});

type MenuTitleProps = {
  children: ReactNode;
};

export const MenuTitle = ({ children }: MenuTitleProps) => {
  return <StyledMenuTitle>{children}</StyledMenuTitle>;
};
