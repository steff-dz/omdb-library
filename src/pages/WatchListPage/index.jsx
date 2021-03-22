import React from 'react'
import { MainBase } from '../../components/MainBase'
import MovieContainer from '../../components/MovieContainer'
import PageTitle from '../../components/PageTitle'

const WatchListPage = ({ watchList, clickHandler }) => {
  return (
    <>
      <MainBase>
        <PageTitle title={'My Watch List'} spanWidth={'70%'}></PageTitle>
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
