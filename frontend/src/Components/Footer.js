import React from "react";
import styled from "styled-components";
import Wrapper from "./Wrapper";

const footerLinks = [
  "About Us",
  "Support",
  "Press",
  "API",
  "Jobs",
  "Privacy",
  "Terms",
  "Directory",
  "Profiles",
  "Hashtags",
  "Language"
];

const Container = styled.footer``;

const SWrapper = styled(Wrapper)``;

const List = styled.ul``;

const ListItem = styled.li``;

const Copyright = styled.span``;

const Footer = () => (
  <Container>
    <SWrapper>
      <List>
        {footerLinks.map(link => (
          <ListItem>{link}</ListItem>
        ))}
      </List>
      <Copyright>&copy; {new Date().getFullYear()} Instagram</Copyright>
    </SWrapper>
  </Container>
);

export default Footer;
