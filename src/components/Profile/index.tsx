import { useEffect, useState } from 'react'
import {
  FaBuilding,
  FaExternalLinkAlt,
  FaGithub,
  FaUsers,
} from 'react-icons/fa'
import { api } from '../../services/api'
import * as S from './styles'

type ProfileProps = {
  avatar_url: string
  name: string
  html_url: string
  bio: string
  login: string
  company: string
  followers: number
}

export function Profile() {
  const [profile, setProfile] = useState<ProfileProps>()

  useEffect(() => {
    async function loadData() {
      const { data } = await api.get('/users/jrbytes')
      setTimeout(() => {
        setProfile(data)
      }, 1000)
    }
    loadData()
  }, [])

  return (
    <S.Container>
      <S.Wrapper>
        {!profile ? (
          'Carregando...'
        ) : (
          <>
            <img src={profile?.avatar_url} alt="foto de perfil do github" />
            <S.Info>
              <header>
                <h4>{profile?.name}</h4>
                <a href={profile?.html_url} target="_blank" rel="noreferrer">
                  GITHUB <FaExternalLinkAlt />
                </a>
              </header>
              <section>{profile?.bio}</section>
              <footer>
                <div>
                  <FaGithub />
                  {profile?.login}
                </div>
                {profile?.company && (
                  <div>
                    <FaBuilding />
                    {profile?.company}
                  </div>
                )}
                <div>
                  <FaUsers />
                  {profile?.followers} seguidores
                </div>
              </footer>
            </S.Info>
          </>
        )}
      </S.Wrapper>
    </S.Container>
  )
}
