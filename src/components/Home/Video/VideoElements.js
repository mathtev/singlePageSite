import styled from 'styled-components';
import { TextH1, TextP } from '../../Typography/Typography';

export const Wrapper = styled.div`
  height: 811px;
  background-color: var(--colorSecondary);
  text-align: center;
`;
export const PlayerWrap = styled.div`
  width: 100%;
  padding: 0 100px;

  div {
    border-radius: 8px;
  }
`;
export const VideoH1 = styled(TextH1)`
  padding: 61px 350px 40px;
`;
export const VideoP = styled(TextP)`
  padding-bottom: 56px;
`;
