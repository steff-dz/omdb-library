import React, { useState, useEffect, useRef, useMemo } from 'react'
import styled from 'styled-components'
import { useWatchList } from '../../utils/WatchListCntxt'

const MovieContainer = ({ movie }) => {
  const [active, setActive] = useState(false)
  const watchList = useWatchList()

  useEffect(() => {}, [active])

  //let active = false

  //console.log('re-render from movie')

  //let iconRef = useRef(null)

  function handleClick(movie) {
    //console.log(e.target.className)
    // let className = e.target.className
    // console.log(className)
    // className = 'fas fa-star'
    // console.log(className)
    watchList.addMediaLine(movie)
    setActive((prev) => {
      return !prev
    })
  }

  return (
    <ArticleBase>
      <i
        onClick={(e) => handleClick(movie, e)}
        className={active ? 'fas fa-star' : 'far fa-star'}
      ></i>
      <img src={movie.Poster}></img>
    </ArticleBase>
  )
}

const ArticleBase = styled.article`
  border: 1px solid black;
  background-color: grey;
  height: fit-content;
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
