import React, { useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { useWatchList } from '../../utils/WatchListCntxt'
import { useActiveToggle } from '../../utils/ActiveContext'

const MovieContainer = ({ movie }) => {
  //const [active, setActive] = useState(false)
  const watchList = useWatchList()
  const activeToggle = useActiveToggle()

  //let active = false

  //console.log('re-render from movie')

  //let iconRef = useRef(null)

  // useEffect(() => {

  // }, [watchList.mediaLines])

  function handleClick(movie) {
    if (movie.selected === true) {
      movie.selected = !movie.selected
      return movie
    } else {
      movie.selected = true
      watchList.addMediaLine(movie)
    }
  }

  return (
    <ArticleBase>
      <i
        onClick={(e) => handleClick(movie, e)}
        className={movie.selected ? 'fas fa-star' : 'far fa-star'}
      ></i>
      <img src={movie.Poster}></img>
    </ArticleBase>
  )
}

const ArticleBase = styled.article`
  border: 1px solid black;
  background-color: grey;
  height: 250px;
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
