import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../services/api'

type ProfileProps = {
  avatar_url: string
  name: string
  html_url: string
  bio: string
  login: string
  company: string
  followers: number
}

export type IssuesProps = {
  number: number
  title: string
  body: string
  comments: number
  created_at: string
}

interface GithubContextType {
  profile: ProfileProps | null
  issues: IssuesProps[]
}

interface GithubProviderProps {
  children: ReactNode
}

export const GithubContext = createContext({} as GithubContextType)

export function GithubProvider({ children }: GithubProviderProps) {
  const [profile, setProfile] = useState<ProfileProps>({} as ProfileProps)
  const [issues, setIssues] = useState<IssuesProps[]>([])

  const loadData = useCallback(async () => {
    const profile = await api.get('/users/jrbytes')
    setProfile(profile.data)
    const issues = await api.get('/repos/jrbytes/03-github-blog/issues')
    setIssues(issues.data)
  }, [])

  useEffect(() => {
    loadData()
  }, [loadData])

  return (
    <GithubContext.Provider value={{ profile, issues }}>
      {children}
    </GithubContext.Provider>
  )
}
