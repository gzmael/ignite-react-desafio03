import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: ${(props) => props.theme['gray-800']};

  padding: 2rem 2.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Header = styled.header`
  width: 100%;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    color: ${(props) => props.theme['blue-500']};
    font: 700 0.75rem/160% 'Nunito', sans-serif;
    text-transform: uppercase;
    text-decoration: none;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme['blue-500']};
    }
  }
`

export const Title = styled.h2`
  color: ${(props) => props.theme['gray-50']};
  font: 700 1.5rem/130% 'Nunito', sans-serif;
  margin-bottom: 0.5rem;
`

export const IssueInfos = styled.ul`
  list-style: none;

  display: flex;
  align-items: center;
  gap: 1.5rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['gray-400']};
    }
  }
`
