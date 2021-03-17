import React from 'react'
import { render } from 'react-dom'
import { WatchList } from './utils/WatchListCntxt'

import App from './App'

render(
  <WatchList>
    <App />
  </WatchList>,
  document.getElementById('root')
)

module.hot.accept()
