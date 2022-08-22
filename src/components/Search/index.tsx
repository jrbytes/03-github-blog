import * as S from './styles'

interface SearchProps {
  issuesLength: number
}

export function Search({ issuesLength }: SearchProps) {
  return (
    <S.Container>
      <S.Header>
        Publicações
        <span>
          {issuesLength} {issuesLength === 1 ? 'publicação' : 'publicações'}
        </span>
      </S.Header>
      <S.Input type="text" placeholder="Buscar conteúdo" />
    </S.Container>
  )
}
