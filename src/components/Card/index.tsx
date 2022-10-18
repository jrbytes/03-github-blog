import ReactMarkdown from 'react-markdown'
import { differenceInDays } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import { IssuesProps } from '../../contexts/GithubContext'

export interface CardProps {
  issue: IssuesProps
}

export function Card({ issue }: CardProps) {
  const navigate = useNavigate()

  return (
    <S.Wrapper onClick={() => navigate('/post', { state: { issue } })}>
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
