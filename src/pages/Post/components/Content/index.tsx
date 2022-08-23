import ReactMarkdown from 'react-markdown'
import * as S from './styles'

interface ContentProps {
  body: string
}

export function Content({ body }: ContentProps) {
  return (
    <S.Content>
      <ReactMarkdown>{body}</ReactMarkdown>
    </S.Content>
  )
}
