import React from "react"
import "./HostVanPricing.css"

export default function HostVanPricing() {
  return (
    <div className="pricing-page">

      <p className="back-link">← Back to all vans</p>

      <div className="van-summary">
        <img 
          src="https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png"
          alt="Modest Explorer"
        />
        <div>
          <span className="badge">Simple</span>
          <h2>Modest Explorer</h2>
          <p className="price">$60<span>/day</span></p>
        </div>
      </div>

      <div className="main-price-card">
        <h1>$60.00</h1>
        <span>per day</span>
      </div>

      <div className="pricing-details">
        <h3>What’s included</h3>
        <ul>
          <li>Basic insurance coverage</li>
          <li>Solar-powered system</li>
          <li>Kitchenette & water tank</li>
          <li>Weekend unlimited mileage</li>
        </ul>
      </div>

      <button className="edit-btn">Edit Pricing</button>

    </div>
  )
}