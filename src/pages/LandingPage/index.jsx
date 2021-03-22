import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import { MainBase } from '../../components/MainBase'
import PageTitle from '../../components/PageTitle'
import PageSkeleton from '../../components/PageSkeleton'
import MovieContainer from '../../components/MovieContainer'

const apiKey = process.env.OMDB_KEY

const LandingPage = ({ type, watchList, clickHandler }) => {
  //required states for storing and searching for shows--------------------------------------------
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('star wars')
  const [pageCounter, setPageCounter] = useState(1)

  //use Effect to invoke getMovies func, and whenever pageCounter and type change------------------
  useEffect(() => {
    getMovies()
  }, [pageCounter, type])

  //function to get movies from the OMDB API store them into the movies state-----------------------
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

  //function to update the page counter state and run the getMovies func with changed states---------
  function handleSubmit(e) {
    e.preventDefault()
    setPageCounter(1)
    getMovies()
  }

  //storing the query into a state and waiting to run until submit is clicked-------------------------
  function handleInput(e) {
    setQuery(e.target.value)
  }

  function renderMovies() {
    return movies.map((el) => (
      <MovieContainer
        key={uuidv4()}
        movie={el}
        starred={Boolean(
          watchList.find((item) => {
            return item.imdbID === el.imdbID
          })
        )}
        clickHandler={clickHandler}
      ></MovieContainer>
    ))
  }

  return (
    <>
      <FormBase name="omdb-search" onSubmit={(e) => handleSubmit(e)}>
        <input
          id="omdb-search"
          onClick={() => setQuery('')}
          onChange={(e) => handleInput(e)}
          value={query}
          type="text"
        ></input>
        <button aria-label="submit form" type="submit">
          <i className="fas fa-search"></i>
        </button>
      </FormBase>
      <PageTitle title={type} spanWidth={'50%'} />
      <MainBase>
        {movies ? renderMovies() : <PageSkeleton />}

        <ButtonContainer>
          <button aria-label="back 10 items" onClick={() => setPageCounter(pageCounter - 1)}>
            Back
          </button>
          <button aria-label="fowards 10 items" onClick={() => setPageCounter(pageCounter + 1)}>
            Next
          </button>
        </ButtonContainer>
      </MainBase>
    </>
  )
}

const FormBase = styled.form`
  display: flex;
  justify-content: center;
  margin: ${(props) => props.theme.spacing[2]} 0rem;
  width: 100%;
  padding-left: ${(props) => props.theme.spacing[2]};
  input {
    /* background-color: rgba(242, 242, 242, 0.178); */
    background-color: ${(props) => props.theme.pageBackground};
    width: 30%;
    font-size: 0.8rem;
    padding: 0.5rem;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.fontColor};
    color: ${(props) => props.theme.fontColor};

    @media only screen and (min-width: 768px) {
      font-size: 1.2rem;
    }
  }

  button {
    width: 50px;
    border: none;
    background-color: ${(props) => props.theme.pageBackground};
    font-size: ${(props) => props.theme.fontSize[1]};
    color: ${(props) => props.theme.fontColor};
    margin-left: 0.2rem;

    @media only screen and (min-width: 768px) {
      font-size: 1.3rem;
    }
  }
`

const ButtonContainer = styled.div`
  width: 100%;

  height: fit-content;
  display: flex;
  justify-content: center;
  gap: ${(props) => props.theme.spacing[2]};

  button {
    width: 100px;
    font-size: ${(props) => props.theme.fontSize[1]};
    background-color: white;
    letter-spacing: 3px;
    border-radius: 10px;
    border: 2px solid ${(props) => props.theme.fontColor};
    text-align: center;
    cursor: pointer;
    &:hover {
      background-color: lightgrey;
    }

    @media only screen and (min-width: 768px) {
      font-size: ${(props) => props.theme.fontSize[2]};
      letter-spacing: 0;
    }
  }
`

export default LandingPage

// {movies &&
//   movies.map((el) => (
//     <MovieContainer
//       key={uuidv4()}
//       movie={el}
//       starred={Boolean(
//         watchList.find((item) => {
//           return item.imdbID === el.imdbID
//         })
//       )}
//       clickHandler={clickHandler}
//     />
//   ))}
