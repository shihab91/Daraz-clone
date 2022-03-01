import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
  --font-montserrat: 'Montserrat', sans-serif;
  --color-orange:#f57224;
  --color-orange-solid:#F44508;
  }
  html{
    font-family: var(--font-montserrat);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button,input{
    outline: none;
    border:none;
  }
`;
export const Container = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
`;
