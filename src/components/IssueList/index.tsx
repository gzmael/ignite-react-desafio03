import { useContext } from 'react'
import { GithubContext } from '../../contexts/GithubContext'
import { Card } from '../Card'
import * as S from './styles'

const IssueList = () => {
  const { issues } = useContext(GithubContext)

  return (
    <S.Container>
      {issues.map((issue) => (
        <Card key={issue.id} issue={issue} />
      ))}
    </S.Container>
  )
}

export { IssueList }
