import styled from "styled-components";
import { TextP, TextH1 } from '../../Typography/Typography';

export const HeroContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 230px 165px 222px;
  width: 100%;
  @media screen and (max-width: 1400px) {
    flex-direction: column-reverse;
    align-items: center;
  }
  @media screen and (max-width: 992px) {
    padding: 130px 24px 64px;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeroH1 = styled(TextH1)`

`;

export const HeroP = styled(TextP)`
  margin: 30px 0;
`;

export const HeroBtn = styled.button`
  width: 255px;
  height: 70px;
  background: var(--colorSecondary);
  border-radius: 8px;
  font-size: 25px;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 992px) {
    width: 100%;
    font-size: 20px;
  }
`;

export const HeroImg = styled.img`
  height: auto;
  width: 100%;
  @media screen and (max-width: 1400px) {
    padding-bottom: 32px;
  }
`;