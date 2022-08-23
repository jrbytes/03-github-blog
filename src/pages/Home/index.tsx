import { useEffect, useState } from 'react'
import { Profile } from '../../components/Profile'
import { Search } from '../../components/Search'
import { Card } from '../../components/Card'
import { api } from '../../services/api'
import * as S from './styles'

export type IssuesProps = {
  number: number
  title: string
  body: string
  comments: number
  created_at: string
}

export function Home() {
  const [issues, setIssues] = useState<IssuesProps[]>([])

  useEffect(() => {
    async function loadIssues() {
      const { data } = await api.get('/repos/jrbytes/03-github-blog/issues')
      setTimeout(() => {
        setIssues(data)
      }, 1000)
    }
    loadIssues()
  }, [])

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
