import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: ${(props) => props.theme['gray-800']};

  padding: 2rem 2.5rem;

  display: grid;
  grid-template-columns: 9.25rem 1fr;
  align-items: stretch;
  justify-content: flex-start;
  gap: 2rem;

  margin-bottom: 4.5rem;
`

export const Texts = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Avatar = styled.div`
  border-radius: 8px;
  overflow: hidden;
  width: 9.25rem;
  height: 9.25rem;

  img {
    width: 100%;
  }
`

export const Header = styled.header`
  width: 100%;
  margin-bottom: 1.5rem;

  h2 {
    color: ${(props) => props.theme['gray-50']};
    font: 700 1.5rem/130% 'Nunito', sans-serif;
    margin-bottom: 0.5rem;

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

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme['blue-500']};
      }
    }
  }
`

export const Description = styled.p`
  margin-bottom: 1.5rem;
  height: 100%;
`

export const UserInfos = styled.ul`
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
