import React, { useState } from 'react'
import styled from 'styled-components'
//import { Star } from 'phosphor-react'

const MovieContainer = ({ movie, watchList, setWatchList }) => {
  const [active, setActive] = useState(false)

  function handleClick(title, id) {
    //console.log(title, id)
    if (active === true) {
      setActive(false)
      //watchList.filter(el)
    } else {
      setActive(true)
      setWatchList([...watchList, { movie }])
    }
  }

  return (
    <ArticleBase>
      <i
        onClick={() => handleClick(movie.Title, movie.imdbID)}
        className={active ? 'fas fa-star' : 'far fa-star'}
      ></i>
      <img src={movie.Poster}></img>
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
