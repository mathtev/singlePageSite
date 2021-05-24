import styled from "styled-components";
import { TextH1, TextP } from "../../../Typography/Typography";


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

