import React, { useState, useEffect } from 'react'
import GlobalStyle from './components/GlobalStyle'
import styled from 'styled-components'
import { BroswerRouter as Router, Rout, Switch } from 'react-router-dom'
import Header from './components/Header'
import { MagnifyingGlass } from 'phosphor-react'

const apiKey = process.env.OMDB_KEY

function App() {
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('star wars')

  useEffect(() => {
    getMovies()
  })

  function getMovies() {
    fetch(`http://www.omdbapi.com/?s=${query}&apikey=${apiKey}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        //console.log(data.Search)
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
        <input type="text"></input>
        <button>
          <MagnifyingGlass size={20} />
        </button>
      </FormBase>

      <NavBase>
        <h2>Movies</h2>
        <h2>Series</h2>
        <h2>My Watchlist</h2>
      </NavBase>
      <MainBase>
        <h3>Hello</h3>
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
  /* border: 1px solid lightblue; */
  min-height: 70vh;
  width: 100%;
  padding: 0.5rem;
`
export default App

//To get the next page:
//Search pagination added: http://www.omdbapi.com/?s=Batman&page=2
