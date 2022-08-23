import { Content } from './components/Content'
import { Header } from './components/Header'
import { useLocation } from 'react-router-dom'
import { CardProps } from '../../components/Card'

export function Post() {
  const { state } = useLocation()
  const { issue } = state as CardProps

  return (
    <>
      <Header issue={issue} />
      <Content body={issue.body} />
    </>
  )
}
