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
