import React, { createContext, useContext, useState, useEffect } from 'react'

const WatchListContext = createContext({
  mediaLines: [],
  addMediaLine: () => {},
})

export const WatchList = ({ children }) => {
  const [mediaLines, setMediaLines] = useState([])

  const addMediaLine = (media) => {
    setMediaLines([...mediaLines, media])
  }

  return (
    <WatchListContext.Provider value={{ mediaLines, setMediaLines, addMediaLine }}>
      {children}
    </WatchListContext.Provider>
  )
}

export const useWatchList = () => {
  return useContext(WatchListContext)
}
