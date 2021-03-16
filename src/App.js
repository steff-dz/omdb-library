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
  const [pageCounter, setPageCounter] = useState(1)

  useEffect(() => {
    getMovies()
  }, [pageCounter])

  //should put the first part of this URL into it's own variable:http://www.omdbapi.com/
  function getMovies() {
    fetch(`http://www.omdbapi.com/?s=${query}&page=${pageCounter}&apikey=${apiKey}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        //console.log(data)
        setMovies(data.Search)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('hey there from the from')
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <FormBase name="omdb-search" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="star wars"></input>
        <button type="submit">
          <i className="fas fa-search"></i>
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
      <ButtonContainer>
        <button onClick={() => setPageCounter(pageCounter - 1)}>Back</button>
        <button onClick={() => setPageCounter(pageCounter + 1)}>Next 10</button>
      </ButtonContainer>
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
  justify-content: space-evenly;
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

const ButtonContainer = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
`
export default App

//To get the next page:
//Search pagination added: http://www.omdbapi.com/?s=Batman&page=2
