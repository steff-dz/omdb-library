import React from 'react'
import { render } from 'react-dom'
import { WatchList } from './utils/WatchListCntxt'
import { ActiveToggle } from './utils/ActiveContext'

import App from './App'

render(
  <ActiveToggle>
    <WatchList>
      <App />
    </WatchList>
  </ActiveToggle>,
  document.getElementById('root')
)

module.hot.accept()
