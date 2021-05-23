import styled from 'styled-components';

export const TextP = styled.p`
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;
  font-family: var(--fontPrimary);
  @media screen and (max-width: 992px) {
    font-size: 20px;
  }
`;

export const TextH1 = styled.h1`
  font-weight: normal;
  font-size: 80px;
  line-height: 117%;
  font-family: var(--fontSecondary);
  @media screen and (max-width: 992px) {
    font-size: 50px;
  }
  img {
    width: 43px;
    @media screen and (max-width: 992px) {
      width: 27px;
    }
  }
`;
