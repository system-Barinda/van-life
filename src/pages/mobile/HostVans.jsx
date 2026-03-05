import { Link } from "react-router-dom"
import "../../styles/HostVans.css"
import { VansContext } from "../../context/VansContext"
import { useContext } from "react"
export default function HostVans() {

  const {vans} = useContext(VansContext)

  return (
    <div className="host-page">

      <h2 className="title">Your listed vans</h2>

      <div className="vans-container">
       {vans?.map((van) => (
  <Link to={`/host/HostVanDetails/${van.id}`} className="van-card" key={van.id}>
      <img src={van.imageUrl} alt={van.name} />

      <div className="van-info">
        <h3>{van.name}</h3>
        <p>${van.price}/day</p>
      </div>

      <div className="arrow">➡️</div>
  </Link>
))}
      </div>

    </div>
  )
}