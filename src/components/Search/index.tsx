import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { GithubContext } from '../../contexts/GithubContext'
import * as S from './styles'

type FormData = {
  search: string
}

interface SearchProps {
  issuesLength: number
}

export function Search({ issuesLength }: SearchProps) {
  const { searchPosts } = useContext(GithubContext)

  const { register } = useForm<FormData>({
    mode: 'onChange',
  })

  return (
    <S.Container>
      <S.Header>
        Publicações
        <span>
          {issuesLength} {issuesLength === 1 ? 'publicação' : 'publicações'}
        </span>
      </S.Header>
      <S.Input
        type="text"
        placeholder="Buscar conteúdo"
        {...register('search', {
          onChange: (e) => {
            const { value } = e.target
            searchPosts(value)
          },
        })}
      />
    </S.Container>
  )
}
