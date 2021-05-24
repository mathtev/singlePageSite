import React from 'react';
import logoImg from '../../assets/images/Logo light.svg';
import {
  Wrapper,
  ContentWrap,
  FooterTerms,
} from './FooterElements/FooterElements';
import FooterInput from './FooterElements/FooterInput';
import FooterLinks from './FooterElements/FooterLinks';

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
        <p>Terms & Conditions </p>
      </FooterTerms>
    </Wrapper>
  );
};

export default Footer;
