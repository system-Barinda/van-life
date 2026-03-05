import "../../styles/HostVans.css"
import Navigation from "../../components/Navigation"
import { VansContext } from "../../context/VansContext"
import { useContext } from "react"
export default function HostVans() {
  const {vans} = useContext(VansContext)

  return (
    <section className="host-vans">
      <h2 className="title">Your listed vans</h2>

      <div className="vans-list">
        {vans.map(van => (
          <div key={van.id} className="van-card">
            <img src={van.imageUrl} alt={van.name} />

            <div className="van-info">
              <h3>{van.name}</h3>
              <p>${van.price}/day</p>
            </div>

            <span className="arrow">›</span>
          </div>
        ))}
      </div>
    </section>
  )
}