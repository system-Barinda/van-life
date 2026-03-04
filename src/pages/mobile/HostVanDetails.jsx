import React from "react"
import "../../styles/HostVanDetails.css"

export default function VanDetails() {
  return (
    <div className="van-details-container">

      <p className="back-link">← Back to all vans</p>

      <div className="van-card">

        <img 
          src="https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png" 
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