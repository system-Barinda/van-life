import React, { useContext } from "react"
import "../../styles/HostVanDetails.css"
import { useParams } from "react-router-dom"
import { VansContext } from "../../context/VansContext"
export default function VanDetails() {
   const params = useParams()
  const { vans } = useContext(VansContext)

  const van = vans.find(v => v.id.toString() === params.id)
  
  return (
    <div className="van-details-container">

      <p className="back-link">← Back to all vans</p>

      <div className="van-card">

        <img 
          src={van.imageUrl} 
          alt="Modest Explorer"
          className="van-image"
        />

        <span className="van-badge">Simple</span>

        <h2>Modest Explorer</h2>
        <p className="van-price">$60<span>/day</span></p>

        <div className="van-tabs">
          <span className="active">Details</span>
          <span>Pricing</span>
          <span>Photos</span>
        </div>

        <div className="van-info">
          <p><strong>Name:</strong> Modest Explorer</p>
          <p><strong>Category:</strong> Simple</p>
          <p>
            <strong>Description:</strong> The Modest Explorer is a van designed 
            to get you out of the house and into nature. This beauty is equipped 
            with solar panels, a composting toilet, a water tank and kitchenette.
            The idea is that you can pack up your home and escape for a weekend or even longer!
          </p>
          <p><strong>Visibility:</strong> Public</p>
        </div>

      </div>

    </div>
  )
}