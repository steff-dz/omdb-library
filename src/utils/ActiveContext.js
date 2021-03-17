import React, { createContext, useContext, useState } from 'react'

export const ActiveContext = createContext({})

export const ActiveToggle = ({ children }) => {
  const [active, setActive] = useState(false)

  return <ActiveContext.Provider value={{ active, setActive }}>{children}</ActiveContext.Provider>
}

export const useActiveToggle = () => {
  return useContext(ActiveContext)
}
