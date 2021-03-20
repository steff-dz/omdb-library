import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const SiteNav = ({ typeHandler }) => {
  return (
    <NavBase>
      <NavLink className="nav-item" to="/">
        <select onChange={(evt) => typeHandler(evt)} name="media-type">
          <option value="movie">Movies</option>
          <option value="series">Series</option>
        </select>
      </NavLink>
      <NavLink className="nav-item" to="/mywatchlist">
        My Watch List
      </NavLink>
    </NavBase>
  )
}

const NavBase = styled.nav`
  display: flex;
  justify-content: center;
  gap: ${(props) => props.theme.spacing[4]};

  .nav-item,
  select {
    text-decoration: none;
    color: ${(props) => props.theme.fontColor};
    font-size: ${(props) => props.theme.fontSize[1]};
  }

  select {
    border: none;
    background-color: ${(props) => props.theme.pageBackground};
    color: ${(props) => props.theme.fontColor};
  }
`

export default SiteNav
