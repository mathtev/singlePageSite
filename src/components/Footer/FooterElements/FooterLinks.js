import React from 'react';
import styled from 'styled-components';

const FooterLinks = () => {
  return (
    <LinksWrap>
      <FooterUl>
        <header>Product</header>
        <FooterLi>
          <a href="/">Updates</a>
        </FooterLi>
        <FooterLi>
          <a href="/">Security</a>
        </FooterLi>
        <FooterLi>
          <a href="/">Chrome Extension</a>
        </FooterLi>
      </FooterUl>
      <FooterUl>
        <header>Company</header>
        <FooterLi>
          <a href="/">About</a>
        </FooterLi>
        <FooterLi>
          <a href="/">Blog</a>
        </FooterLi>
        <FooterLi>
          <a href="/">Join Us</a>
        </FooterLi>
      </FooterUl>
      <FooterUl>
        <header>Help</header>
        <FooterLi>
          <a href="/">Talk to Support</a>
        </FooterLi>
        <FooterLi>
          <a href="/">Support Docs</a>
        </FooterLi>
        <FooterLi>
          <a href="/">API Docs</a>
        </FooterLi>
        <FooterLi>
          <a href="/">System Status</a>
        </FooterLi>
      </FooterUl>
    </LinksWrap>
  );
};

export default FooterLinks;

export const LinksWrap = styled.div`
  display: flex;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    margin: 0;
  }
`;

export const FooterUl = styled.ul`
  font-size: 18px;
  line-height: 27px;
  margin: 0;

  header {
    color: #7c8176;
    margin-bottom: 19px;
  }

  @media screen and (min-width: 650px) {
    :nth-of-type(2) {
      margin-left: 58px;
    }
    :nth-of-type(3) {
      margin-left: 118px;
    }
  }
  @media screen and (max-width: 650px) {
    margin-bottom: 31px;
  }
`;

export const FooterLi = styled.li`
  a {
    color: #e5e5e5;
    text-decoration: none;
  }
`;
