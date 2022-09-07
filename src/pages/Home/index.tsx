import { Introduction } from '../../components/Introduction'
import { IssueList } from '../../components/IssueList'
import { SearchForm } from '../../components/SearchForm'
import * as S from './styles'

const Home = () => {
  return (
    <S.Container>
      <Introduction />
      <SearchForm />
      <IssueList />
    </S.Container>
  )
}

export { Home }
