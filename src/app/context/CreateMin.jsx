"use client"

import { createContext, useEffect, useState } from "react"

export const CreateContext = createContext()

export default function CreateMin({ children }) {
  const [min, setMin] = useState('')
  const [max, setMax] = useState('')

  useEffect(() => {
    const storedMin = localStorage.getItem('minStatus') || ''
    const storedMax = localStorage.getItem('maxStatus') || ''

    setMin(storedMin)
    setMax(storedMax)
  }, [])

  return (
    <CreateContext.Provider value={{ min, setMin, max, setMax }}>
      {children}
    </CreateContext.Provider>
  )
}