import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderBase>
      <label className="switch">
        <input type="checkbox" />
        <span className="switch" />
      </label>
      <h1>OMDB Library</h1>
    </HeaderBase>
  )
}

const HeaderBase = styled.header`
  text-align: center;
  color: ${(props) => props.theme.fontColor};
  position: relative;

  label {
    position: absolute;
    left: 10px;
  }

  h1 {
    font-size: ${(props) => props.theme.fontSize[3]};
    padding: ${(props) => props.theme.spacing[2]};
  }
`

export default Header
