import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['blue-500']};
  }

  html, :root {
    height: 100vh;
    width: 100vh;
  }

  body {
    background-color: ${(props) => props.theme['gray-800']};
    color: ${(props) => props.theme['gray-200']};
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    height: 100vh;
    width: 100vh;
  }

  body, input, textarea, button {
    font: 400 1rem/1.6 Nunito, sans-serif;
  }
`
