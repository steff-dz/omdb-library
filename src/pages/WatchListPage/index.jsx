import React from 'react'
import styled from 'styled-components'
import { MainBase } from '../../components/MainBase'
import MovieContainer from '../../components/MovieContainer'

const WatchListPage = ({ theme, watchList, clickHandler }) => {
  // function handleClick(movie) {
  //   let movieCheck = watchList.find((el) => el.imdbID === movie.imdbID)
  //   if (movieCheck) {
  //     setWatchList(watchList.filter((el) => el.imdbID !== movie.imdbID))
  //   } else {
  //     setWatchList([...watchList, movie])
  //   }
  // }
  return (
    <>
      <MainBase>
        {watchList &&
          watchList.map((el) => (
            <MovieContainer
              key={el.imdbID}
              movie={el}
              starred={Boolean(
                watchList.find((item) => {
                  return item.imdbID === el.imdbID
                })
              )}
              clickHandler={clickHandler}
            />
          ))}
      </MainBase>
    </>
  )
}

export default WatchListPage
