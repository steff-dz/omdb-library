import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const SiteNav = ({ typeHandler }) => {
  return (
    <NavBase variants={navVariants} initial="hidden" animate="visible">
      <NavLink
        variants={itemVariants}
        className="nav-item"
        exact
        to="/"
        onClick={() => typeHandler('movie')}
      >
        <motion.p variants={itemVariants}>Movies</motion.p>
      </NavLink>
      <NavLink
        variants={itemVariants}
        className="nav-item"
        exact
        to="/"
        onClick={() => typeHandler('series')}
      >
        <motion.p variants={itemVariants}>Series</motion.p>
      </NavLink>
      <NavLink variants={itemVariants} className="nav-item" exact to="/mywatchlist">
        <motion.p variants={itemVariants}>My List</motion.p>
      </NavLink>
    </NavBase>
  )
}

const navVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
      staggerChildren: 0.4,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: 'easeIn',
    },
  },
}

const NavBase = styled(motion.nav)`
  display: flex;
  justify-content: center;
  gap: ${(props) => props.theme.spacing[3]};

  .nav-item {
    text-decoration: none;
    color: ${(props) => props.theme.fontColor};
    font-size: ${(props) => props.theme.fontSize[1]};
    font-weight: 600;

    &:hover {
      opacity: 0.7;
    }

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
