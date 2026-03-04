import React, { createContext, useState, useEffect } from "react"

export const VansContext = createContext()

export function VansProvider({ children }) {

  const [vans, setVans] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => {
        setVans(data.vans)
        setLoading(false)
      })
  }, [])

  return (
    <VansContext.Provider value={{ vans, loading }}>
      {children}
    </VansContext.Provider>
  )
}