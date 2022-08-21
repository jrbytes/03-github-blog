import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa'
import * as S from './styles'

export function Header() {
  return (
    <S.Header>
      <header>
        <div>
          <FaChevronLeft size={12} />
          VOLTAR
        </div>
        <a href="https://github.com/jrbytes" target="_blank" rel="noreferrer">
          VER NO GITHUB <FaExternalLinkAlt />
        </a>
      </header>
      <h1>JavaScript data types and data structures</h1>
      <footer>
        <div>
          <FaGithub />
          jrbytes
        </div>
        <div>
          <FaCalendarDay />
          há 1 dia
        </div>
        <div>
          <FaComment />
          12 comentários
        </div>
      </footer>
    </S.Header>
  )
}
