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

interface GithubContextType {
  profile: ProfileProps | null
}

interface GithubProviderProps {
  children: ReactNode
}

export const GithubContext = createContext({} as GithubContextType)

export function GithubProvider({ children }: GithubProviderProps) {
  const [profile, setProfile] = useState<ProfileProps>({} as ProfileProps)

  const loadProfile = useCallback(async () => {
    const { data } = await api.get('/users/jrbytes')
    setProfile(data)
  }, [])

  useEffect(() => {
    loadProfile()
  }, [loadProfile])

  return (
    <GithubContext.Provider value={{ profile }}>
      {children}
    </GithubContext.Provider>
  )
}
