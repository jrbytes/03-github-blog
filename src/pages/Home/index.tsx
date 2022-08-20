import * as S from './styles'
import logo from '../../assets/logo.svg'
import { Profile } from '../../components/Profile'

export function Home() {
  return (
    <>
      <S.Header>
        <img src={logo} alt="logomarca do github blog" />
      </S.Header>
      <Profile />
    </>
  )
}
