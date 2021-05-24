import React from 'react'
import styled from 'styled-components';

const FooterInput = () => {
  return (
    <Wrapper>
      <header>Try Medli for free</header>
      <InputWrap>
        <input placeholder="Enter your email"></input>
        <button>Get started</button>
      </InputWrap>
    </Wrapper>
  )
}

export default FooterInput;


export const Wrapper = styled.div`

  header {
    color: #7C8176;
    margin-bottom: 19px;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 350px;
  height: 50px;
  border: 1px solid #7C8176;
  border-radius: 8px;
  padding: 8px 8px 8px 16px;
  
  button {
    width: 113px;
    height: 100%;
    cursor: pointer;
    background-color: var(--colorSecondary);
    border: none;
    border-radius: 4px;
    font-size: 18px;
    line-height: 27px;
  }
  input {
    background: transparent;
    border: none;
    height: 100%;
    width: 200px;
    color: white;

    :focus {
      border: none;
      outline: none;
    }

    ::placeholder {
      font-size: 18px;
      line-height: 27px;
    }
  }
  @media screen and (max-width: 650px) {
    flex-direction: column;
    border: none;
    width: 100%;
    height: auto;
    padding: 0;

    input, input:focus {
      width: 100%;
      height: 62px;
      border: 1px solid #7C8176;
      border-radius: 8px;
      margin-bottom: 16px;
      padding: 16px;
    }
    button {
      width: 100%;
      height: 62px;
      border-radius: 8px;
    }
  }
`;
