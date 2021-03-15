import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderBase>
      <h1>OMDB Library</h1>
    </HeaderBase>
  )
}

const HeaderBase = styled.header`
  /* border: 1px solid lightgrey; */
  text-align: center;
  h1 {
    font-size: 1.8rem;
    padding: 1rem;
  }
`

export default Header
