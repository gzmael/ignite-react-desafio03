import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-bottom: 3rem;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    h2 {
      font: 700 18px/160% 'Nunito', sans-serif;
      color: ${(props) => props.theme['gray-50']};
    }

    p {
      font: 400 14px/160% 'Nunito', sans-serif;
      color: ${(props) => props.theme['gray-300']};
    }
  }
`

export const SearchContainer = styled.form`
  input {
    width: 100%;
    padding: 0.75rem 1rem;
    font: 400 1rem/160% 'Nunito', sans-serif;

    color: ${(props) => props.theme['gray-50']};

    background: ${(props) => props.theme['gray-900']};

    border: 1px solid ${(props) => props.theme['gray-500']};
    border-radius: 6px;

    &:focus {
      border-color: ${(props) => props.theme['blue-500']};
    }

    ::placeholder {
      color: ${(props) => props.theme['gray-400']};
    }
  }
`
