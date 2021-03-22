import styled from 'styled-components'

export const ButtonContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  gap: ${(props) => props.theme.spacing[2]};

  button {
    width: 100px;
    font-size: ${(props) => props.theme.fontSize[1]};
    background-color: white;
    letter-spacing: 3px;
    border-radius: 10px;
    border: 2px solid ${(props) => props.theme.fontColor};
    text-align: center;
    cursor: pointer;
    &:hover {
      background-color: lightgrey;
    }

    @media only screen and (min-width: 768px) {
      font-size: ${(props) => props.theme.fontSize[2]};
      letter-spacing: 0;
    }
  }
`
