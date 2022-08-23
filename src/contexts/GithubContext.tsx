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
  searchPosts: (result: string) => void
  loadIssues: () => void
}

interface GithubProviderProps {
  children: ReactNode
}

export const GithubContext = createContext({} as GithubContextType)

export function GithubProvider({ children }: GithubProviderProps) {
  const [profile, setProfile] = useState<ProfileProps>({} as ProfileProps)
  const [issues, setIssues] = useState<IssuesProps[]>([])
  const [searchValue, setSearchValue] = useState('')

  const loadProfile = useCallback(async () => {
    const { data } = await api.get('/users/jrbytes')
    setProfile(data)
  }, [])

  const loadIssues = useCallback(async () => {
    const { data } = await api.get('/repos/jrbytes/03-github-blog/issues')
    setIssues(data)
  }, [])

  useEffect(() => {
    loadProfile()
    loadIssues()
  }, [loadIssues, loadProfile])

  const searchPosts = useCallback(
    async (result: string) => {
      const resultLowerCase = result.toLowerCase()
      const search = issues.filter((issue) =>
        issue.title.toLowerCase().includes(resultLowerCase),
      )

      setSearchValue((state) => {
        if (state.length > result.length) {
          console.log(searchValue)
          loadIssues()
        }
        return result
      })

      setIssues(search)
    },
    [issues, loadIssues, searchValue],
  )

  return (
    <GithubContext.Provider
      value={{ profile, issues, searchPosts, loadIssues }}
    >
      {children}
    </GithubContext.Provider>
  )
}
