import {
  createGlobalStyle
} from 'styled-components';

export const GlobalStyle = createGlobalStyle `
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: var(--colorPrimary);
    font-family: var(--fontPrimary);

    :root {
    --colorPrimary: #131E07;
    --colorSecondary: #FABD20;
    --fontPrimary: 'Reem Kufi', sans-serif;
    --fontSecondary: 'Rozha One', serif;
  }

    body {
      background: #FEF4E6;
    }
  }
`;