import { Icons } from '../../components/Icons'
import * as S from './styles'

const Introduction = () => {
  return (
    <S.Container>
      <S.Avatar>
        <img src="https://github.com/gzmael.png" alt="Foto do Jezmael" />
      </S.Avatar>
      <S.Texts>
        <S.Header>
          <h2>
            Jezmael Oliveira Basilio
            <a
              href="https://github.com/gzmael"
              target="_blank"
              rel="noreferrer"
            >
              Github
              <Icons variant="share" size="lg" />
            </a>
          </h2>
          <p>Full Stack Developer (JavaScript)</p>
        </S.Header>
        <S.UserInfos>
          <li>
            <Icons variant="github" size="1x" />
            gzmael
          </li>
          <li>
            <Icons variant="building" size="1x" />
            Baita Soluções
          </li>
          <li>
            <Icons variant="group" size="1x" />
            32 Seguidores
          </li>
        </S.UserInfos>
      </S.Texts>
    </S.Container>
  )
}

export { Introduction }
