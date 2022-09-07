import { Issue } from '../../interfaces/issue'
import { Card } from '../Card'
import * as S from './styles'

const IssueList = () => {
  const issues: Issue[] = [
    {
      id: 1,
      title: 'JavaScript data types and data structures',
      created_at: '2022-09-07T00:38:19Z',
      body: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn',
      comments: 4,

      url: 'http://www.javascript.com/document',
      user: {
        login: 'gzmael',
      },
    },
    {
      id: 2,
      title: 'JavaScript data types and data structures',
      created_at: '2022-09-07T00:38:19Z',
      body: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn',
      comments: 4,

      url: 'http://www.javascript.com/document',
      user: {
        login: 'gzmael',
      },
    },
    {
      id: 3,
      title: 'JavaScript data types and data structures',
      created_at: '2022-09-07T00:38:19Z',
      body: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn',
      comments: 4,

      url: 'http://www.javascript.com/document',
      user: {
        login: 'gzmael',
      },
    },
  ]
  return (
    <S.Container>
      {issues.map((issue) => (
        <Card key={issue.id} issue={issue} />
      ))}
    </S.Container>
  )
}

export { IssueList }
