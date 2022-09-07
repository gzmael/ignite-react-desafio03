import { Issue } from '../../interfaces/issue'
import * as S from './styles'

interface CardProps {
  issue: Issue
}

const Card = ({ issue }: CardProps) => {
  return (
    <S.CardContainer>
      <S.CardHeader>
        <h2>{issue.title}</h2>
        <span>{issue.created_at}</span>
      </S.CardHeader>
      <S.CardDescription>{issue.body}</S.CardDescription>
    </S.CardContainer>
  )
}

export { Card }
