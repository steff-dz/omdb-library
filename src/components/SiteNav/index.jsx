import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const SiteNav = ({ props }) => {
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
  background-color: ${(props) => props.theme.pageBackground};
  display: flex;
  justify-content: space-around;

  .nav-item {
    text-decoration: none;
    color: ${(props) => props.theme.fontColor};
  }
`

export default SiteNav
