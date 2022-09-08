import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CardContainer = styled(Link)`
  padding: 2rem;
  border-radius: 10px;
  background: ${(props) => props.theme['gray-600']};
  width: 100%;
  cursor: pointer;
  text-decoration: none;

  border: 2px solid transparent;

  &:hover {
    border-color: ${(props) => props.theme['gray-400']};
  }
`

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 1.5rem;

  h2 {
    color: ${(props) => props.theme['gray-50']};
    font: 700 1.25rem/160% 'Nunito', sans-serif;
  }

  span {
    width: 7rem;
    color: ${(props) => props.theme['gray-300']};
    font: 400 0.875rem/160% 'Nunito', sans-serif;
    text-align: right;
    &:first-letter {
      text-transform: uppercase;
    }
  }
`

export const CardDescription = styled.div`
  color: ${(props) => props.theme['gray-200']};
  font: 400 1rem/160% 'Nunito', sans-serif;
  height: 7rem;

  *:not(p:first-child) {
    display: none;
  }

  p:first-child {
    height: 7rem;
    display: block;
    max-width: 432px;
    max-height: 5rem;

    white-space: break-spaces;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
