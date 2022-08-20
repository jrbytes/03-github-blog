import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>Github Copilot</div>
      <GlobalStyle />
    </ThemeProvider>
  )
}
