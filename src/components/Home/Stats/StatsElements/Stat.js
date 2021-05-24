import React from 'react';
import styled from 'styled-components';

const Stat = ({ value, desc }) => {
  return (
    <StatWrap>
      <StatValue>{value}</StatValue>
      <StatDescription>{desc}</StatDescription>
    </StatWrap>
  );
};

export default Stat;


const StatWrap = styled.div`
  font-size: 80px;
  line-height: 117%;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 253px;

  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;

const StatValue = styled.h1`
  color: var(--colorSecondary);
  font-family: var(--fontSecondary);
  font-weight: 400;
  font-size: 80px;
  line-height: 117%;
`;

const StatDescription = styled.p`
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;
  padding: 16px 3rem;
  text-align: center;
`;
