import {
  createGlobalStyle
} from 'styled-components';

export const GlobalStyle = createGlobalStyle `
  * {
    @import url('https://fonts.googleapis.com/css2?family=Rozha+One&display=swap');

    box-sizing: border-box;
    margin: 0;
    padding: 0;

    :root {
    --colorPrimary: #131E07;
    --colorSecondary: #FABD20;
    --fontPrimary: 'Reem Kufi', cursive;
    --fontSecondary:  'Rozha One', serif;
  }

    body {
      background: #FEF4E6;
      font-family: var(--fontPrimary);
      font-style: normal;
    }
  }
`;