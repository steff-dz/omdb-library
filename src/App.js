import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useLocalStorage } from './utils/useLocalStorage'
import { ThemeProvider } from 'styled-components'
import { themes } from './utils/theme'
import GlobalStyle from './components/GlobalStyle'
import Header from './components/Header'
import SiteNav from './components/SiteNav'
import LandingPage from './pages/LandingPage'
import WatchListPage from './pages/WatchListPage'

function App() {
  //The states that need to be accessible in other areas of the--------
  const [theme, setTheme] = useState('light')
  const [watchList, setWatchList] = useLocalStorage('watchlist', [])
  const [type, setType] = useState('movie')

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

  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <Router>
          <GlobalStyle />
          <Header themeHandler={themeHandler} />
          <SiteNav typeHandler={typeHandler} />
          <Switch>
            <Route exact path="/">
              <LandingPage type={type} watchList={watchList} clickHandler={clickHandler} />
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
