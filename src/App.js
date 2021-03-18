import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { themes } from './utils/theme'
import GlobalStyle from './components/GlobalStyle'
import Header from './components/Header'
import SiteNav from './components/SiteNav'
import LandingPage from './pages/LandingPage'
import WatchListPage from './pages/WatchListPage'

function App() {
  const [theme, setTheme] = useState('light')
  const [watchList, setWatchList] = useState([])

  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <Router>
          <GlobalStyle />
          <Header />
          <SiteNav />
          <Switch>
            <Route exact path="/">
              <LandingPage theme={theme} watchList={watchList} setWatchList={setWatchList} />
            </Route>
            <Route exact path="/mywatchlist">
              <WatchListPage theme={theme} watchList={watchList} setWatchList={setWatchList} />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
