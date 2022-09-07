import styled from 'styled-components'

export const CardContainer = styled.div`
  padding: 2rem;
  border-radius: 10px;
  background: ${(props) => props.theme['gray-600']};
  width: 100%;
`

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  h2 {
    color: ${(props) => props.theme['gray-50']};
    font: 700 1.25rem/160% 'Nunito', sans-serif;
  }

  span {
    color: ${(props) => props.theme['gray-300']};
    font: 400 0.875rem/160% 'Nunito', sans-serif;
  }
`

export const CardDescription = styled.div`
  color: ${(props) => props.theme['gray-200']};
  font: 400 1rem/160% 'Nunito', sans-serif;
  height: 7rem;
  max-width: 432px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
