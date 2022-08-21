import * as S from './styles'
import logo from '../../assets/logo.svg'
import { Profile } from '../../components/Profile'
import { Search } from '../../components/Search'
import { Card } from '../../components/Card'

export function Home() {
  return (
    <>
      <S.Header>
        <img src={logo} alt="logomarca do github blog" />
      </S.Header>
      <Profile />
      <Search />
      <S.Posts>
        <Card />
        <Card />
        <Card />
        <Card />
      </S.Posts>
    </>
  )
}
