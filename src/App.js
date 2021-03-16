import React, { useState, useEffect } from 'react'
import GlobalStyle from './components/GlobalStyle'
import styled from 'styled-components'
import { BroswerRouter as Router, Rout, Switch } from 'react-router-dom'
import Header from './components/Header'
import MovieContainer from './components/MovieContainer'

const apiKey = process.env.OMDB_KEY

function App() {
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('star wars')
  const [watchList, setWatchList] = useState([])
  // useEffect(() => {
  //   if (movies.length > 0) {
  //     console.log(movies[1].Title)
  //   }
  // }, [movies])

  useEffect(() => {
    getMovies()
  }, [])

  //should put the first part of this URL into it's own variable:http://www.omdbapi.com/
  function getMovies() {
    fetch(`http://www.omdbapi.com/?s=${query}&apikey=${apiKey}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        //this made an infinite loop: console.log(data). Why?
        setMovies(data.Search)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <FormBase>
        <input type="text" placeholder="star wars"></input>
        <button>
          <i class="fas fa-search"></i>
        </button>
      </FormBase>

      <NavBase>
        <h2>Movies</h2>
        <h2>Series</h2>
        <h2>My Watchlist</h2>
      </NavBase>
      <MainBase>
        {movies &&
          movies.map((el) => (
            <MovieContainer
              key={el.imdbID}
              movie={el}
              watchList={watchList}
              setWatchList={setWatchList}
            />
          ))}
      </MainBase>
    </>
  )
}

const FormBase = styled.form`
  /* border: 1px solid purple; */
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
  input {
    background-color: lightgrey;
  }
`

const NavBase = styled.nav`
  /* border: 1px solid lightpink; */
  display: flex;
  justify-content: space-around;
  h2 {
    font-size: 1rem;
    font-weight: 100;
  }
`

const MainBase = styled.main`
  border: 1px solid lightblue;
  min-height: fit-content;
  width: 100%;
  /* padding: 0.5rem; */
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
`
export default App

//To get the next page:
//Search pagination added: http://www.omdbapi.com/?s=Batman&page=2
