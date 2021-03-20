import styled from 'styled-components'

export const MainBase = styled.main`
  min-height: fit-content;
  height: 80vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing[2]};
  justify-content: center;
`
