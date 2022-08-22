import ReactMarkdown from 'react-markdown'
import { differenceInDays } from 'date-fns'
import * as S from './styles'

interface CardProps {
  issue: {
    title: string
    body: string
    created_at: string
  }
}

export function Card({ issue }: CardProps) {
  return (
    <S.Wrapper>
      <header>
        {issue.title}
        <span>
          {new Intl.RelativeTimeFormat('pt-BR', {
            numeric: 'auto',
            style: 'short',
          }).format(
            differenceInDays(new Date(), new Date(issue.created_at)),
            'day',
          )}
        </span>
      </header>
      <section>
        <ReactMarkdown>{issue.body}</ReactMarkdown>
      </section>
    </S.Wrapper>
  )
}
