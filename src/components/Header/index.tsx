import * as S from './styles'

import logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <S.Container>
      <img src={logo} alt="Logo Github Blog" />
    </S.Container>
  )
}

export { Header }
