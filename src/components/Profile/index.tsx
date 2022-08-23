import { useContext } from 'react'
import {
  FaBuilding,
  FaExternalLinkAlt,
  FaGithub,
  FaUsers,
} from 'react-icons/fa'
import { GithubContext } from '../../contexts/GithubContext'
import * as S from './styles'

export function Profile() {
  const { profile } = useContext(GithubContext)

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
