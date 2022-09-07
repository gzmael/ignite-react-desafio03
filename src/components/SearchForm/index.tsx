import * as S from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

const SearchForm = () => {
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    console.log(data)
  }

  return (
    <S.Container>
      <header>
        <h2>Publicações</h2>
        <p>6 publicações</p>
      </header>
      <S.SearchContainer onSubmit={handleSubmit(handleSearchTransactions)}>
        <input
          type="text"
          placeholder="Buscar Conteúdo"
          {...register('query')}
        />
      </S.SearchContainer>
    </S.Container>
  )
}

export { SearchForm }
