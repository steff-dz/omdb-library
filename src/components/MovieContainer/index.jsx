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
          tabindex="0"
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

/* <ArticleBase>
<label>
  <i onClick={() => clickHandler(movie)} className={starred ? 'fas fa-star' : 'far fa-star'}>
    <input type="checkbox"></input>
  </i>
</label>
<img src={movie.Poster} alt={`poster for ${movie.Title}`}></img>
</ArticleBase> */
