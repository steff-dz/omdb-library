import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useLocalStorage } from './utils/useLocalStorage'
import { ThemeProvider } from 'styled-components'
import { themes } from './utils/theme'
import GlobalStyle from './components/GlobalStyle'
import Header from './components/Header'
import SiteNav from './components/SiteNav'
import LandingPage from './pages/LandingPage'
import SeriesPage from './pages/SeriesPage'
import WatchListPage from './pages/WatchListPage'
const apiKey = process.env.OMDB_KEY

function App() {
  //The states that need to be used in other areas of the app--------
  const [theme, setTheme] = useState('light')
  //const [query, setQuery] = useState('star wars')
  const [watchList, setWatchList] = useLocalStorage('watchlist', [])
  const [type, setType] = useState('movie')
  const [media, setMedia] = useState([])
  const [pageCounter, setPageCounter] = useState(1)

  useEffect(() => {
    console.log('rendering from app')
    getMedia()
  }, [type, pageCounter])

  //function for selection a show--------------------------------------
  const clickHandler = (el) => {
    let movieCheck = watchList.find((item) => item.imdbID === el.imdbID)
    if (movieCheck) {
      setWatchList(watchList.filter((item) => item.imdbID !== el.imdbID))
    } else {
      setWatchList([...watchList, el])
    }
  }

  //function for toggling between themes------------------------------
  const themeHandler = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  //function for changing media type----------------------------------
  const typeHandler = (category) => {
    setType(category)
  }

  function getMedia(query) {
    console.log(query)
    fetch(`http://www.omdbapi.com/?s=${query}&type=${type}&page=${pageCounter}&apikey=${apiKey}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setMedia(data.Search)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <Router>
          <GlobalStyle />
          <Header themeHandler={themeHandler} />
          <SiteNav typeHandler={typeHandler} setPageCounter={setPageCounter} />
          <Switch>
            <Route exact path="/">
              <LandingPage
                media={media}
                watchList={watchList}
                clickHandler={clickHandler}
                getMedia={() => getMedia()}
                pageCounter={pageCounter}
                setPageCounter={setPageCounter}
              />
            </Route>
            <Route exact path="/series">
              <SeriesPage
                media={media}
                watchList={watchList}
                clickHandler={clickHandler}
                getMedia={() => getMedia()}
                pageCounter={pageCounter}
                setPageCounter={setPageCounter}
              />
            </Route>
            <Route exact path="/mywatchlist">
              <WatchListPage watchList={watchList} clickHandler={clickHandler} />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
