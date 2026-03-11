import React, { useContext } from "react"
 import "../../styles/HostVanDetails.css"
import { useParams, Link ,NavLink } from "react-router-dom"
import { VansContext } from "../../context/VansContext"

export default function VanDetails() {

  const params = useParams()
  const { vans } = useContext(VansContext)

  const van = vans.find(v => v.id.toString() === params.id)

  if (!van) {
    return <h2>Loading van details...</h2>
  }

return (
    <div className="hostVan-container">

      <NavLink  className="back-link" to="/host/vans">
        ← Back to all vans
      </NavLink>

      <div className="van-card1">

        <div className="van-header">

          <img
            src={van.imageUrl}
            alt={van.name}
            className="van-image"
          />

          <div className="van-info-top1">
            <span className="van-type">{van.type}</span>

            <h2>{van.name}</h2>

            <p className="van-price">
              ${van.price}<span>/day</span>
            </p>
          </div>

        </div>

        <div className="van-tabs">
          <span className="active">Details</span>
          <span>Pricing</span>
          <span>Photos</span>
        </div>

        <div className="van-details">

          <p><strong>Name:</strong> {van.name}</p>

          <p><strong>Category:</strong> {van.type}</p>

          <p>
            <strong>Description:</strong> {van.description}
          </p>

          <p><strong>Visibility:</strong> Public</p>

        </div>

      </div>

    </div>
  )
}