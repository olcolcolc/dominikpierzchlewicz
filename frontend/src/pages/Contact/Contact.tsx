import styled from "@emotion/styled";
import { MenuTitle } from "../../components/MenuTitle/MenuTitle";

const FooterWrapper = styled.footer({
  position: "relative",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
});

const Footer = styled.div(({ theme }) => ({
  width: "100%",
  height: "34rem",
  padding: "2rem",
  backgroundColor: "black",
  color: "white",
  display: "flex",
  zIndex: 1,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  fontFamily: theme.fonts.dmSans,
}));

const ContactInfo = styled.address({
  marginBottom: "2rem",
  fontSize: "1.5rem",
  lineHeight: "1.6",
  fontStyle: "normal",
});

const SocialLinks = styled.nav({
  display: "flex",
  gap: "2rem",
  marginTop: "2rem",
  flexWrap: "wrap",
  justifyContent: "center",
});

const SocialLink = styled.a(({ theme }) => ({
  color: "white",
  textDecoration: "none",
  fontSize: "1.2rem",
  position: "relative",
  transition: "color 0.3s",
  "&:hover": {
    color: theme.colors.text,
  },
}));

export const Contact = () => {
  return (
    <FooterWrapper>
      <MenuTitle>Kontakt</MenuTitle>
      <Footer>
        <ContactInfo>
          <a
            href="mailto:d.pierzchlewicz@obieg.eu"
            style={{ color: "white", textDecoration: "none" }}
            aria-label="Wyślij e-mail do Dominika Pierzchlewicza"
          >
            d.pierzchlewicz@obieg.eu
          </a>
        </ContactInfo>

        <SocialLinks aria-label="Linki społecznościowe">
          <SocialLink
            href="https://instagram.com/dominikpierzchlewicz"
            target="_blank"
            rel="noopener noreferrer"
            title="Otwórz profil Dominika na Instagramie"
            aria-label="Instagram - otwiera się w nowej karcie"
          >
            Instagram
          </SocialLink>

          <div aria-hidden="true" style={{ color: "white" }}>
            |
          </div>

          <SocialLink
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Otwórz profil Dominika na LinkedIn"
            aria-label="LinkedIn - otwiera się w nowej karcie"
          >
            LinkedIn
          </SocialLink>
        </SocialLinks>
      </Footer>
    </FooterWrapper>
  );
};
