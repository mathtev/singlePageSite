import styled from "styled-components";

export const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  padding: 160px 165px 222px;
  width: 100%;
`;

export const LeftSection = styled.div`
  grid-column: 1;
`;

export const HeroH1 = styled.h1`
  font-size: 80px;
  color: var(--colorPrimary);
  font-family: var(--fontSecondary);
`;

export const HeroP = styled.p`
  font-size: 24px;
  color: var(--colorPrimary);
  font-family: var(--fontPrimary);
  margin: 30px 0;
`;

export const HeroBtn = styled.button`
  width: 255px;
  height: 70px;
  background: var(--colorSecondary);
  border-radius: 8px;
  font-size: 25px;
  font-family: var(--fontSecondary);
  border: none;
  cursor: pointer;
`;

export const HeroImg = styled.img`
  grid-column: 2;
`;