import styled from 'styled-components';
import { TextH1, TextP } from '../../Typography/Typography';

export const Wrapper = styled.div`
  height: 110vh;
  background-color: var(--colorSecondary);
  text-align: center;
  padding: 0 100px;
  position: relative;

  @media screen and (max-width: 992px) {
    text-align: left;
    height: 70vh;
    padding: 0 24px;
  }
`;

export const PlayerWrap = styled.div`
  height: 45vw;
  position: absolute;
  bottom: -23%;
  left: 100px;
  right: 100px;

  @media screen and (max-width: 992px) {
    bottom: -25%;
    left: 24px;
    right: 24px;
  }
  @media screen and (max-width: 660px) {
    bottom: -17%;
  }

  div {
    border-radius: 8px;

    img {
      width: 130px;
      margin: auto;
      @media screen and (max-width: 992px) {
        width: 78px;
      }
    }
  }
`;

export const VideoH1 = styled(TextH1)`
  padding: 61px 0 40px;

  @media screen and (max-width: 992px) {
    padding: 64px 0 37px;
  }
`;

export const VideoP = styled(TextP)`
  padding-bottom: 56px;

  @media screen and (max-width: 992px) {
    padding-bottom: 75px;
  }
`;
