import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 32px;
`
