import styled from "@emotion/styled";

const Footer = styled.footer(({ theme }) => ({
  width: "100%",
  height: "40rem",
  padding: "4rem 2rem",
  backgroundColor: "black",
  color: "white",
  display: "flex",
  zIndex: 1,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-end",
  textAlign: "center",
  fontFamily: theme.fonts.base,
}));

const ContactInfo = styled.div({
  marginBottom: "2rem",
  fontSize: "1.5rem",
  lineHeight: "1.6",
});

const SocialLinks = styled.div({
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
    <Footer>
      <ContactInfo>
        <div>DOMINIKPIERZCHLEWICZ@KOTEK.PL</div>
        <div>+48 608-696-2137</div>
      </ContactInfo>
      <SocialLinks>
        <SocialLink
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          INSTAGRAM
        </SocialLink>
        <SocialLink
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          FACEBOOK
        </SocialLink>
        <SocialLink
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          LINKEDIN
        </SocialLink>
      </SocialLinks>
    </Footer>
  );
};
