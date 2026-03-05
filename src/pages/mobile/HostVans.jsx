import { Link } from "react-router-dom"

export default function HostVans() {

  const vans = [
    {
      id: 1,
      name: "Modest Explorer",
      price: 60,
      image: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png"
    },
    {
      id: 2,
      name: "Beach Bum",
      price: 80,
      image: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png"
    },
    {
      id: 3,
      name: "Green Wonder",
      price: 70,
      image: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png"
    }
  ]

  return (
    <div className="host-page">

      <nav className="host-nav">
        <a href="#">Dashboard</a>
        <a href="#">Income</a>
        <a className="active">Vans</a>
        <a href="#">Reviews</a>
      </nav>

      <h2 className="title">Your listed vans</h2>

      <div className="vans-container">
        {vans.map((van) => (
          <div className="van-card" key={van.id}>

            <img src={van.image} alt={van.name} />

            <div className="van-info">
              <h3>{van.name}</h3>
              <p>${van.price}/day</p>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}