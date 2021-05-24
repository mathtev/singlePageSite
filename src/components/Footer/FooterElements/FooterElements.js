import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #131E07;
  padding: 89px 11% 128px;

  @media screen and (max-width: 1200px) {
    padding: 64px 24px 55px;
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 51px;

  @media screen and (max-width: 1200px) {
    flex-direction: column-reverse;

    div:nth-child(2) {
      margin-bottom: 50px;
    }
  }
`;

export const FooterTerms = styled.div`
  width: 100%;
  margin-top: 80px;
  text-align: right;

  p {
    color: #E5E5E5;
    padding-top: 16px;
  }

  hr {
    background: #FFFFFF;
    opacity: 0.2;
  }

  @media screen and (max-width: 660px) {
    display: none;
  }
`;