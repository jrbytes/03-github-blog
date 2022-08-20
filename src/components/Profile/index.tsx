import {
  FaBuilding,
  FaExternalLinkAlt,
  FaGithub,
  FaUsers,
} from 'react-icons/fa'
import * as S from './styles'

export function Profile() {
  return (
    <S.Container>
      <S.Wrapper>
        <img src="https://github.com/jrbytes.png" alt="" />
        <S.Info>
          <header>
            <h4>Jr Bytes</h4>
            <a
              href="https://github.com/jrbytes"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB <FaExternalLinkAlt />
            </a>
          </header>
          <section>
            Full Stack Developer, passionate about technology and programming.
          </section>
          <footer>
            <div>
              <FaGithub />
              jrbytes
            </div>
            <div>
              <FaBuilding />
              enterprise
            </div>
            <div>
              <FaUsers />
              40 seguidores
            </div>
          </footer>
        </S.Info>
      </S.Wrapper>
    </S.Container>
  )
}
