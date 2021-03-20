import React from 'react'
import styled from 'styled-components'

const MovieContainer = ({ movie, starred, clickHandler }) => {
  function handleEnterKey(evt, movie) {
    if (evt.key === 'Enter') {
      clickHandler(movie)
    } else {
      console.log('poop')
    }
  }

  return (
    <ArticleBase>
      <label htmlFor="movie select check-box">
        <i
          tabIndex="0"
          onKeyPress={(evt) => handleEnterKey(evt, movie)}
          onClick={() => clickHandler(movie)}
          className={starred ? 'fas fa-star' : 'far fa-star'}
        ></i>
      </label>

      <img src={movie.Poster} alt={`poster for ${movie.Title}`}></img>
    </ArticleBase>
  )
}

const ArticleBase = styled.article`
  border: 1px solid ${(props) => props.theme.fontColor};
  height: 210px;
  width: 150px;
  overflow: hidden;
  position: relative;
  background-color: lightgrey;

  .fa-star {
    position: absolute;
    right: 5px;
    top: 5px;
    color: yellow;
  }

  img {
    height: 100%;
    width: 100%;
    color: black;
  }

  @media only screen and (min-width: 768px) {
    height: 410px;
    width: 270px;

    .fa-star {
      font-size: ${(props) => props.theme.fontSize[3]};
      top: 10px;
    }
  }
`

export default MovieContainer
