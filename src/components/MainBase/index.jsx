import styled from 'styled-components'

export const MainBase = styled.main`
  border: 1px solid lightblue;
  min-height: fit-content;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  background-color: ${(props) => props.theme.pageBackground};
`
