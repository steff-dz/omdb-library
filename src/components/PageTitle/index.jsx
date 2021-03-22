import React from 'react'
import styled from 'styled-components'

const PageTitle = ({ title, spanWidth }) => {
  if (title === 'movie') {
    title = 'Movies'
  } else if (title === 'series') {
    title = 'Series'
  }
  return (
    <PageTitleBase spanWidth={spanWidth}>
      {title}
      <span></span>
    </PageTitleBase>
  )
}

export default PageTitle

const PageTitleBase = styled.h2`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 100%;
  padding: 15px 20px 10px 20px;
  color: ${(props) => props.theme.fontColor};
  font-weight: 400;
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
