import styled from 'styled-components'

export const MainBase = styled.main`
  /* border: 1px solid lightblue; */

  min-height: fit-content;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing[2]};
  justify-content: center;
`
