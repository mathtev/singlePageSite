import React from 'react';
import styled from 'styled-components';
import FooterLink from './FooterLink';

const FooterLinks = () => {
  return (
    <LinksWrap>
      <FooterLink
        title="Product"
        items={['Updates', 'Security', 'Chrome Extension']}
      />
      <FooterLink title="Company" items={['About', 'Blog', 'Join Us']} />
      <FooterLink
        title="Help"
        items={['Support Docs', 'API Docs', 'System Status']}
      />
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

