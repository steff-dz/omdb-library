import React from 'react'
import styled from 'styled-components'

const MovieContainer = ({ movie, starred, clickHandler }) => {
  return (
    <ArticleBase>
      <i onClick={() => clickHandler(movie)} className={starred ? 'fas fa-star' : 'far fa-star'}>
        <input type="checkbox"></input>
      </i>
      <img src={movie.Poster} alt={`poster for ${movie.Title}`}></img>
    </ArticleBase>
  )
}

const ArticleBase = styled.article`
  border: 1px solid black;
  background-color: grey;
  height: 210px;
  width: 150px;
  overflow: hidden;
  position: relative;

  .fa-star {
    position: absolute;
    right: 5px;
    top: 5px;
    color: yellow;

    input {
      display: none;
    }
  }

  img {
    /* object-fit: fill; */
    height: 100%;
    width: 100%;
    /* width: 100%;
    height: auto;
    object-fit: cover; */
  }
`

export default MovieContainer
