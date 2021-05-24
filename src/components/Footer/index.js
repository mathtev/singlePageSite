import React from 'react';
import logoImg from '../../assets/images/Logo light.svg';
import {
  Wrapper,
  ContentWrap,
  FooterTerms,
} from './FooterElements/FooterStyles';
import FooterInput from './FooterElements/FooterInput';
import FooterLinks from './FooterElements/FooterLinks/FooterLinks';

const Footer = () => {
  return (
    <Wrapper>
      <img src={logoImg} alt="logo" />
      <ContentWrap>
        <FooterLinks />
        <FooterInput />
      </ContentWrap>
      <FooterTerms>
        <hr />
        <a href="/">Terms & Conditions </a>
      </FooterTerms>
    </Wrapper>
  );
};

export default Footer;
