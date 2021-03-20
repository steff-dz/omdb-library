import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredvalue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (err) {
      return initialValue
    }
  })

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredvalue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (err) {
      console.log('storing error')
    }
  }

  return [storedValue, setValue]
}
