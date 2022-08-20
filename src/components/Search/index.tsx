import * as S from './styles'

export function Search() {
  return (
    <S.Container>
      <S.Header>
        Publicações
        <span>4 publicações</span>
      </S.Header>
      <S.Input type="text" placeholder="Buscar conteúdo" />
    </S.Container>
  )
}
