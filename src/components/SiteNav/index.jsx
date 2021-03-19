import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const SiteNav = () => {
  return (
    <NavBase>
      <NavLink className="nav-item" to="/">
        Movies & Series
      </NavLink>
      <NavLink className="nav-item" to="/mywatchlist">
        My Watch List
      </NavLink>
    </NavBase>
  )
}

const NavBase = styled.nav`
  /* background-color: ${(props) => props.theme.pageBackground}; */
  display: flex;
  justify-content: center;
  gap: ${(props) => props.theme.spacing[4]};

  .nav-item {
    text-decoration: none;
    color: ${(props) => props.theme.fontColor};
    font-size: ${(props) => props.theme.fontSize[1]};
  }
`

export default SiteNav
