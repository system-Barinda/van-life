import React from "react"

export const VansContext = React.createContext()

export function VansProvider({ children }) {

  const [vans, setVans] = React.useState([])

  React.useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setVans(data.vans))
  }, [])

  return (
    <VansContext.Provider value={{ vans }}>
      {children}
    </VansContext.Provider>
  )
}