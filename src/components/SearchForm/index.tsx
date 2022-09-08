import * as S from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useContext } from 'react'
import { GithubContext } from '../../contexts/GithubContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

const SearchForm = () => {
  const { fetchIssues, issues } = useContext(GithubContext)
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    fetchIssues(data.query)
  }

  return (
    <S.Container>
      <header>
        <h2>Publicações</h2>
        <p>
          {issues.length} {issues.length > 1 ? 'publicações' : 'publicação'}
        </p>
      </header>
      <S.SearchContainer onSubmit={handleSubmit(handleSearchTransactions)}>
        <input
          type="search"
          placeholder="Buscar Conteúdo"
          {...register('query')}
        />
      </S.SearchContainer>
    </S.Container>
  )
}

export { SearchForm }
