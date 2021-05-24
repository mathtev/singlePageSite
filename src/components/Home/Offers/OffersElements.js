import styled from "styled-components";
import { TextH1, TextP } from "../../Typography/Typography";


export const OffersH1 = styled(TextH1)`
  padding-bottom: 16px;
  @media screen and (max-width: 992px) {
    padding-bottom: 36px;
  }
`;

export const OffersP = styled(TextP)`
  padding-bottom: 72px;
  padding-right: 50%;
  font-size: 20px;
  line-height: 30px;
  @media screen and (max-width: 1400px) {
    padding-right: 0;
  }
  @media screen and (max-width: 992px) {
    padding-bottom: 36px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25% 166px 114px;

  @media screen and (max-width: 600px) {
    padding: 137px 24px 64px;
  }
`

export const OffersWrap = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1400px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Card = styled.div`
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

