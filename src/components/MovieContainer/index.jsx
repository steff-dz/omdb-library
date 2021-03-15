import React from 'react'
import styled from 'styled-components'

const MovieContainer = ({ title, poster }) => {
  //console.log(poster)
  return (
    <ArticleBase>
      <img src={poster}></img>
    </ArticleBase>
  )
}

const ArticleBase = styled.article`
  border: 1px solid black;
  background-color: grey;
  height: 150px;
  width: 150px;
  overflow: hidden;

  img {
    width: 150px;
  }
`

export default MovieContainer
