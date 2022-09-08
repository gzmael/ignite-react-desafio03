import { useContext } from 'react'
import { Icons } from '../../components/Icons'
import { GithubContext } from '../../contexts/GithubContext'
import * as S from './styles'

const Introduction = () => {
  const { user } = useContext(GithubContext)

  if (!user) return null

  return (
    <S.Container>
      <S.Avatar>
        <img src={user.avatar_url} alt="Foto do Jezmael" />
      </S.Avatar>
      <S.Texts>
        <S.Header>
          <h2>
            {user.name}
            <a href={user.html_url} target="_blank" rel="noreferrer">
              Github
              <Icons variant="share" size="lg" />
            </a>
          </h2>
          <p>{user.bio}</p>
        </S.Header>
        <S.UserInfos>
          <li>
            <Icons variant="github" size="1x" />
            {user.login}
          </li>
          <li>
            <Icons variant="building" size="1x" />
            {user.company}
          </li>
          <li>
            <Icons variant="group" size="1x" />
            {user.followers} Seguidores
          </li>
        </S.UserInfos>
      </S.Texts>
    </S.Container>
  )
}

export { Introduction }
