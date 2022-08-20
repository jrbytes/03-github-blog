import * as S from './styles'
import logo from '../../assets/logo.svg'

export function Home() {
  return (
    <S.Header>
      <img src={logo} alt="logomarca do github blog" />
    </S.Header>
  )
}
