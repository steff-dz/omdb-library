import React from 'react'
import { MainBase } from '../../components/MainBase'
import MovieContainer from '../../components/MovieContainer'

const WatchListPage = ({ watchList, clickHandler }) => {
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
