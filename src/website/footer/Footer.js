// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 2rem 1rem;
  text-align: center;
`;

const FooterLinks = styled.div`
  margin-bottom: 1rem;
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Copyright = styled.p`
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink to="/termeni">Termene si Conditii</FooterLink>
        <FooterLink to="/contact">Contact</FooterLink>
      </FooterLinks>
      <Copyright>
        © {new Date().getFullYear()} ReactFit Company. Toate drepturile rezervate.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
