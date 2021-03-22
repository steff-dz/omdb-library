import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const SiteNav = ({ typeHandler, setPageCounter }) => {
  function handlePageChange(category) {
    setPageCounter(1)
    typeHandler(category)
  }

  return (
    <NavBase>
      <NavLink
        activeStyle={{ color: 'blue' }}
        className="nav-item"
        exact
        to="/"
        onClick={() => handlePageChange('movie')}
      >
        Movies
      </NavLink>
      <NavLink
        activeStyle={{ color: 'blue' }}
        className="nav-item"
        exact
        to="/series"
        onClick={() => handlePageChange('series')}
      >
        Series
      </NavLink>
      <NavLink activeStyle={{ color: 'blue' }} className="nav-item" exact to="/mywatchlist">
        My List
      </NavLink>
    </NavBase>
  )
}

const NavBase = styled.nav`
  display: flex;
  justify-content: center;
  gap: ${(props) => props.theme.spacing[3]};

  .nav-item,
  select {
    text-decoration: none;
    color: ${(props) => props.theme.fontColor};
    font-size: ${(props) => props.theme.fontSize[1]};

    @media only screen and (min-width: 768px) {
      font-size: ${(props) => props.theme.fontSize[2]};
    }
  }

  select {
    border: none;
    background-color: ${(props) => props.theme.pageBackground};
    color: ${(props) => props.theme.fontColor};
  }
`

export default SiteNav
