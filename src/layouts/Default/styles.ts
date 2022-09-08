import styled from 'styled-components'

import img from '../../assets/cover.png'

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: ${(props) => props.theme['gray-800']} url(${img}) 0 0 no-repeat;
  background-size: 100% auto;
  padding-bottom: 14rem;
`
