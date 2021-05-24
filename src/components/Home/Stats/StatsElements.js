import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 16.5% 219px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
    padding: 0 10% 307px;
  }

  @media screen and (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    padding: 80px 0 64px;

    div:first-child {
      padding-bottom: 108px;
    }
    div:nth-child(2) {
      padding-bottom: 87px;
    }
    div:nth-child(3) {
      padding-bottom: 64px;
    }
  }
`;

export const Stat = styled.div`
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

export const StatValue = styled.h1`
  color: var(--colorSecondary);
  font-family: var(--fontSecondary);
  font-weight: 400;
  font-size: 80px;
  line-height: 117%;
`;

export const StatDescription = styled.p`
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;
  padding: 16px 3rem;
  text-align: center;
`;
