import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import { MainBase } from '../../components/MainBase'
import MovieContainer from '../../components/MovieContainer'

const apiKey = process.env.OMDB_KEY
const LandingPage = ({ theme, watchList, setWatchList }) => {
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('star wars')
  const [pageCounter, setPageCounter] = useState(1)
  const [type, setType] = useState('movie')

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

  return (
    <MainBase>
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
      <ButtonContainer>
        <button onClick={() => setPageCounter(pageCounter - 1)}>Back</button>
        <button onClick={() => setPageCounter(pageCounter + 1)}>Next 10</button>
      </ButtonContainer>
    </MainBase>
  )
}

// const MainBase = styled.main`
//   border: 1px solid lightblue;
//   min-height: fit-content;
//   width: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   gap: 0.5rem;
//   justify-content: center;
//   background-color: ${(props) => props.theme.pageBackground};
// `

const FormBase = styled.form`
  /* border: 1px solid purple; */
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
  width: 100%;
  input {
    background-color: lightgrey;
  }
`

const ButtonContainer = styled.div`
  width: 100%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
`

export default LandingPage
