import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { themes } from './utils/theme'
import GlobalStyle from './components/GlobalStyle'

import { v4 as uuidv4 } from 'uuid'
//import { BroswerRouter as Router, Rout, Switch } from 'react-router-dom'
import Header from './components/Header'
import MovieContainer from './components/MovieContainer'

const apiKey = process.env.OMDB_KEY

function OldApp() {
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('star wars')
  const [watchList, setWatchList] = useState([])
  const [pageCounter, setPageCounter] = useState(1)
  const [type, setType] = useState('movie')
  const [theme, setTheme] = useState('light')

  console.log('re-render')

  useEffect(() => {
    getMovies()
  }, [pageCounter, type])

  function getMovies() {
    setMovies('')
    fetch(`http://www.omdbapi.com/?s=${query}&type=${type}&page=${pageCounter}&apikey=${apiKey}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setMovies(data.Search)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function handleSubmit(e) {
    e.preventDefault()
    getMovies()
    //setQuery('')
  }

  function handleInput(e) {
    setQuery(e.target.value)
  }

  function handleClick(movie) {
    let movieCheck = watchList.find((el) => el.imdbID === movie.imdbID)
    if (movieCheck) {
      setWatchList(watchList.filter((el) => el.imdbID !== movie.imdbID))
    } else {
      setWatchList([...watchList, movie])
    }
  }

  function showUserList() {
    //setWatchListToggle(true)
    setMovies(watchList)
  }

  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle />
        <Header theme={theme} />
        <FormBase name="omdb-search" onSubmit={(e) => handleSubmit(e)}>
          <input
            onClick={() => setQuery('')}
            onChange={(e) => handleInput(e)}
            value={query}
            type="text"
          ></input>
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </FormBase>

        <NavBase>
          <h2 onClick={() => setType('movie')}>Movies</h2>
          <h2 onClick={() => setType('series')}>Series</h2>
          <h2 onClick={() => setMovies(watchList)}>My Watchlist</h2>
        </NavBase>
        <MainBase>
          {movies &&
            movies.map((el) => (
              <MovieContainer
                key={uuidv4()}
                movie={el}
                starred={Boolean(
                  watchList.find((item) => {
                    return item.imdbID === el.imdbID
                  })
                )}
                clickHandler={() => handleClick(el)}
              />
            ))}
        </MainBase>
        <ButtonContainer>
          <button onClick={() => setPageCounter(pageCounter - 1)}>Back</button>
          <button onClick={() => setPageCounter(pageCounter + 1)}>Next 10</button>
        </ButtonContainer>
      </ThemeProvider>
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
  background-color: ${(props) => props.theme.pageBackground};
`

const ButtonContainer = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
`
export default OldApp

//To get the next page:
//Search pagination added: http://www.omdbapi.com/?s=Batman&page=2

//starred={watchList.filter((movie) => movie.imdbID === el.imdbID)}
