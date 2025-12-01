import React, { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

type Project = {
  title: string;
  gallery: string[];
  location?: string;
  description?: string;
};

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

const ModalOverlay = styled.div({
  position: "fixed",
  inset: 0,
  zIndex: 2000,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  backgroundImage: `
    linear-gradient(rgba(0, 255, 0, 0.25) 2px, transparent 2px),
    linear-gradient(90deg, rgba(0, 255, 0, 0.25) 2px, transparent 2px)
  `,
  backgroundSize: "4px 4px",

  padding: "3rem 4rem",

  [theme.media.tablet]: {
    padding: "2rem 1.5rem",
  },
  [theme.media.mobileM]: {
    padding: "1.5rem 1rem",
  },
});

const ModalCard = styled.div({
  backgroundColor: "#ffffff",
  border: "6px solid #000",
  boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
  maxWidth: "1120px",
  width: "100%",
  maxHeight: "80vh",
  display: "grid",
  gridTemplateColumns: "minmax(260px, 1fr) minmax(360px, 1.5fr)",
  overflow: "hidden",
  position: "relative",
  paddingRight: "5rem",

  [theme.media.tablet]: {
    gridTemplateColumns: "1fr",
    maxHeight: "90vh",
  },
});

const ModalTextColumn = styled.div({
  padding: "2.5rem 2.5rem 2.5rem 3rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
});

const ModalTitle = styled.h2({
  fontFamily: theme.fonts.martian,
  fontSize: "2rem",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  margin: 0,
});

const ModalSubtitle = styled.p({
  fontFamily: theme.fonts.martian,
  fontSize: "0.9rem",
  textTransform: "uppercase",
  opacity: 0.7,
  margin: 0,
});

const ModalDescription = styled.p({
  fontFamily: theme.fonts.dmSans,
  fontSize: "0.95rem",
  lineHeight: 1.5,
  margin: "1rem 0 0",
  whiteSpace: "pre-line",
});

const ModalImagesColumn = styled.div({
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
  maxHeight: "80vh",
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

const ModalImage = styled.img({
  width: "100%",
  display: "block",
  objectFit: "cover",
});

const CloseButton = styled.button({
  position: "absolute",
  right: "1rem",
  background: "none",
  border: "none",
  cursor: "pointer",
  fontSize: "6rem",
  padding: 0,
  "&:hover": {
    color: theme.colors.hover,
  },
});

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    const scrollBy = (delta: number) => {
      scrollEl.scrollTop += delta;
    };

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      scrollBy(event.deltaY);
    };

    const handleTouchMove = (() => {
      let lastY: number | null = null;

      return (event: TouchEvent) => {
        if (event.touches.length !== 1) return;
        const currentY = event.touches[0].clientY;

        if (lastY !== null) {
          const delta = lastY - currentY;
          scrollBy(delta);
        }

        lastY = currentY;
        event.preventDefault();
      };
    })();

    const handleTouchEnd = () => {};

    const handleKeydown = (event: KeyboardEvent) => {
      const STEP = 60; // px
      const PAGE = scrollEl.clientHeight * 0.9;
      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();
          scrollBy(STEP);
          break;
        case "ArrowUp":
          event.preventDefault();
          scrollBy(-STEP);
          break;
        case "PageDown":
          event.preventDefault();
          scrollBy(PAGE);
          break;
        case "PageUp":
          event.preventDefault();
          scrollBy(-PAGE);
          break;
        case "Home":
          event.preventDefault();
          scrollEl.scrollTop = 0;
          break;
        case "End":
          event.preventDefault();
          scrollEl.scrollTop = scrollEl.scrollHeight;
          break;
        case " ":
          event.preventDefault();
          scrollBy(PAGE);
          break;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay data-modal-root onClick={handleOverlayClick}>
      <ModalCard>
        <CloseButton onClick={onClose} aria-label="Zamknij modal">
          ×
        </CloseButton>

        <ModalTextColumn>
          <ModalTitle>{project.title}</ModalTitle>
          {project.location && (
            <ModalSubtitle>{project.location}</ModalSubtitle>
          )}
          {project.description && (
            <ModalDescription>{project.description}</ModalDescription>
          )}
        </ModalTextColumn>

        <ModalImagesColumn ref={scrollRef}>
          {project.gallery.map((src) => (
            <ModalImage key={src} src={src} alt={project.title} />
          ))}
        </ModalImagesColumn>
      </ModalCard>
    </ModalOverlay>
  );
};
