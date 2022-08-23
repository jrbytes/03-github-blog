import { differenceInDays } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa'
import { IssuesProps } from '../../../Home'
import * as S from './styles'

interface HeaderProps {
  issue: IssuesProps
}

export function Header({ issue }: HeaderProps) {
  const navigate = useNavigate()

  return (
    <S.Header>
      <header>
        <div onClick={() => navigate(-1)}>
          <FaChevronLeft size={12} />
          VOLTAR
        </div>
        <a href="https://github.com/jrbytes" target="_blank" rel="noreferrer">
          VER NO GITHUB <FaExternalLinkAlt />
        </a>
      </header>
      <h1>{issue.title}</h1>
      <footer>
        <div>
          <FaGithub />
          jrbytes
        </div>
        <div>
          <FaCalendarDay />
          {new Intl.RelativeTimeFormat('pt-BR', {
            numeric: 'auto',
            style: 'short',
          }).format(
            differenceInDays(new Date(), new Date(issue.created_at)),
            'day',
          )}
        </div>
        <div>
          <FaComment />
          {issue.comments} {issue.comments === 1 ? 'comentário' : 'comentários'}
        </div>
      </footer>
    </S.Header>
  )
}
