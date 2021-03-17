import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
//import { Star } from 'phosphor-react'

const MovieContainer = ({ movie, watchList, setWatchList }) => {
  //const [active, setActive] = useState(false)
  let starRef = useRef(null)

  console.log('re-render from movie')

  function handleClick(movie) {
    if (movie.selected === true) {
      let starClass = starRef.current
      starClass.className = 'far fa-star'
      movie.selected = false
      setWatchList(watchList.filter((el) => el.imdbID !== movie.imdbID))
    } else {
      movie.selected = true
      setWatchList([...watchList, movie])
    }
  }

  return (
    <ArticleBase>
      <i
        ref={starRef}
        onClick={() => handleClick(movie)}
        className={`${movie.selected ? 'fas fa-star' : 'far fa-star'} `}
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

//className={`${movie.selected ? 'fas fa-star' : 'far fa-star'} `}
//className={`${movie.selected ? 'fas fa-star' : 'far fa-star'} `}
// if (movie.selected === true) {
//   const starClass = starRef.current
//   starClass.className = 'far fa-star'
//   movie.selected = false
//   setWatchList(watchList.filter((el) => el.imdbID !== movie.imdbID))
// } else {
//   movie.selected = true
//   setWatchList([...watchList, movie])
// }
