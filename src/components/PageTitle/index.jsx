import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const PageTitle = ({ title, spanWidth }) => {
  if (title === 'movie') {
    title = 'Movies'
  } else if (title === 'series') {
    title = 'Series'
  }
  return (
    <PageTitleBase spanWidth={spanWidth}>
      <i>{title}</i>
      <motion.span variants={spanVariants} initial="hidden" animate="visible"></motion.span>
    </PageTitleBase>
  )
}

const spanVariants = {
  hidden: {
    opacity: 0,
    width: 0,
  },
  visible: {
    opacity: 1,
    width: '100%',
    transition: {
      duration: 1,
    },
  },
}

const PageTitleBase = styled.h2`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 100%;
  padding: 15px 20px 10px 20px;
  color: ${(props) => props.theme.fontColor};
  font-weight: 200;
  span {
    /* width: ${(variants) => variants.spanWidth}; */
    width: 100%;
    height: 5px;
    background-color: ${(props) => props.theme.fontColor};
    margin-top: 5px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 2.5rem;
    padding: 15px 100px;
  }
`
export default PageTitle
