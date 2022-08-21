import * as S from './styles'
import { Profile } from '../../components/Profile'
import { Search } from '../../components/Search'
import { Card } from '../../components/Card'

export function Home() {
  return (
    <>
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
