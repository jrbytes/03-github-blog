import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { repo } from './config/repo'
import { GithubProvider } from './contexts/GithubContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <GithubProvider>
        <BrowserRouter basename={repo}>
          <Router />
        </BrowserRouter>
      </GithubProvider>
    </ThemeProvider>
  )
}
