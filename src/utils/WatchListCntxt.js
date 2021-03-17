import React, { createContext, useContext, useState, useEffect } from 'react'

const WatchListContext = createContext({
  mediaLines: [],
  addMedia: () => {},
})

export const WatchList = ({ children }) => {
  const [mediaLines, setMediaLines] = useState([])

  const addMedia = (media) => {
    setMediaLines([...mediaLines, media])
  }

  return (
    <WatchListContext.Provider value={{ mediaLines, setMediaLines, addMedia }}>
      {children}
    </WatchListContext.Provider>
  )
}

export const useWatchList = () => {
  return useContext(WatchListContext)
}
