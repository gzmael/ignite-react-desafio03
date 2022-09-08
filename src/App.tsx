import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GithubProvider } from './contexts/GithubContext'
import { Router } from './Routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <GithubProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </GithubProvider>
    </ThemeProvider>
  )
}

export default App
