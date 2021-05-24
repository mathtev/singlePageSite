import React from 'react';
import styled from 'styled-components';

const FooterLink = ({ title , items }) => {
  return (
    <FooterUl>
      <header>{title}</header>
      {items.map((item) => (
        <FooterLi>
          <a href="/">{item}</a> 
          {/* <a href={'/' + title}>{item}</a> */}
        </FooterLi>
      ))}
    </FooterUl>
  );
};

export default FooterLink;

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
