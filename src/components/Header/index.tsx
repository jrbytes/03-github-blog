import * as S from './styles'
import logo from '../../assets/logo.svg'
import { Outlet } from 'react-router-dom'

export function Header() {
  return (
    <>
      <S.Header>
        <img src={logo} alt="logomarca do github blog" />
      </S.Header>

      <Outlet />
    </>
  )
}
