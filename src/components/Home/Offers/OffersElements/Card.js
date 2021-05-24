import React from 'react';
import styled from 'styled-components';

const Card = ({image, alt, title, desc }) => {
  return (
    <CardWrap>
      <img src={image} alt={alt} />
      <h4>{title}</h4>
      <p>{desc}</p>
    </CardWrap>
  );
};

export default Card;


export const CardWrap = styled.div`
  background-color: #fff;
  width: 350px;
  height: 439px;
  padding: 42px 47px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;

  img {
    margin-bottom: 81px;
  }
  h4 {
    font-size: 24px;
    font-family: var(--fontSecondary);
    font-weight: 400;
    line-height: 117%;
  }

  p {
    margin-top: 16px;
    font-size: 18px;
    line-height: 27px;
  }

  @media screen and (max-width: 1400px) {
    width: 327px;
    margin: 20px 0;

    img {
      margin-bottom: 68px;
    }
  }
  @media screen and (max-width: 360px) {
    width: 100%;
    img {
      width: 100%;
    }
  }
`

