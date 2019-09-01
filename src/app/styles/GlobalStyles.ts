import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`${() => css`
body,
html {
  background: #fff;
  color: #333;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;  
  letter-spacing: .2px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`}`;
