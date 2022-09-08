import { useMemo } from 'react'
import { Issue } from '../../interfaces/issue'
import * as S from './styles'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { niceTime } from '../../utils/formatter'

interface CardProps {
  issue: Issue
}

const Card = ({ issue }: CardProps) => {
  const issueFormmated = useMemo(() => {
    return {
      ...issue,
      formmatedDate: niceTime(issue.created_at),
    }
  }, [issue])
  return (
    <S.CardContainer to={`/issues/${issue.number}`}>
      <S.CardHeader>
        <h2>{issueFormmated.title}</h2>
        <span>{issueFormmated.formmatedDate}</span>
      </S.CardHeader>
      <S.CardDescription>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          allowedElements={['p']}
          skipHtml
        >
          {issueFormmated.body}
        </ReactMarkdown>
      </S.CardDescription>
    </S.CardContainer>
  )
}

export { Card }
