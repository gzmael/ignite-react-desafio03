import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { IssueBody } from '../../components/IssueBody'
import { IssueHeader } from '../../components/IssueHeader'
import { GithubContext } from '../../contexts/GithubContext'
import * as S from './styles'

const Issues = () => {
  const { id } = useParams()
  const { fetchActiveIssue, clearActiveIssue } = useContext(GithubContext)

  useEffect(() => {
    if (id) {
      fetchActiveIssue(Number(id))
    }

    return () => {
      clearActiveIssue()
    }
  }, [clearActiveIssue, fetchActiveIssue, id])

  return (
    <S.Container>
      <IssueHeader />
      <IssueBody />
    </S.Container>
  )
}

export { Issues }
