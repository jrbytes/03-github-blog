import { differenceInDays } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa'
import * as S from './styles'
import { GithubContext, IssuesProps } from '../../../../contexts/GithubContext'
import { useCallback, useContext } from 'react'

interface HeaderProps {
  issue: IssuesProps
}

export function Header({ issue }: HeaderProps) {
  const { profile, loadIssues } = useContext(GithubContext)
  const navigate = useNavigate()

  const handleGoBack = useCallback(() => {
    loadIssues()
    navigate(-1)
  }, [loadIssues, navigate])

  return (
    <S.Header>
      <header>
        <div onClick={handleGoBack}>
          <FaChevronLeft size={12} />
          VOLTAR
        </div>
        <a href={profile?.html_url} target="_blank" rel="noreferrer">
          VER NO GITHUB <FaExternalLinkAlt />
        </a>
      </header>
      <h1>{issue.title}</h1>
      <footer>
        <div>
          <FaGithub />
          {profile?.login}
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
