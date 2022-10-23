import { Content } from './components/Content'
import { Header } from './components/Header'
import { useLocation } from 'react-router-dom'
import { CardProps } from '../../components/Card'
import { defaultTheme } from '../../styles/themes'

export function Post() {
  const { state } = useLocation()
  const { issue } = state as CardProps

  return (
    <div style={{ padding: `0 ${defaultTheme.spacings.small}` }}>
      <Header issue={issue} />
      <Content body={issue.body} />
    </div>
  )
}
