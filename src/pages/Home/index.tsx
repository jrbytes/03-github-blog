import { useContext } from 'react'
import { GithubContext } from '../../contexts/GithubContext'
import { Profile } from '../../components/Profile'
import { Search } from '../../components/Search'
import { Card } from '../../components/Card'
import * as S from './styles'

export function Home() {
  const { issues } = useContext(GithubContext)

  return (
    <>
      <Profile />
      <Search issuesLength={issues.length} />
      <S.Posts>
        {issues.length > 0
          ? issues.map((issue) => <Card key={issue.title} issue={issue} />)
          : 'Carregando...'}
      </S.Posts>
    </>
  )
}
