import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GithubContext } from '../../contexts/GithubContext'
import { niceTime } from '../../utils/formatter'
import { Icons } from '../Icons'
import * as S from './styles'

const IssueHeader = () => {
  const { activeIssue } = useContext(GithubContext)

  if (!activeIssue) return null

  const formmatedDate = niceTime(activeIssue.created_at)

  return (
    <S.Container>
      <S.Header>
        <Link to="/">
          <Icons variant="left" size="lg" />
          Voltar
        </Link>
        <a href={activeIssue.html_url}>Ver no Github</a>
      </S.Header>
      <S.Title>{activeIssue.title}</S.Title>
      <S.IssueInfos>
        <li>
          <Icons variant="github" size="1x" />
          {activeIssue.user.login}
        </li>
        <li>
          <Icons variant="calendar" size="1x" />
          {formmatedDate}
        </li>
        <li>
          <Icons variant="comment" size="1x" />
          {activeIssue.comments} comentários
        </li>
      </S.IssueInfos>
    </S.Container>
  )
}

export { IssueHeader }
