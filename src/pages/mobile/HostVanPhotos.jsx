import React from "react"
import "../../styles/HostVanPhotos.css"

export default function HostVanPhotos() {
  return (
    <div className="photos-page">

      <p className="back-link">← Back to all vans</p>

      <div className="van-card">

        <div className="van-summary">
          <img 
            src="https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png"
            alt="Modest Explorer"
          />
          <div>
            <span className="badge">Simple</span>
            <h2>Modest Explorer</h2>
            <p>$60<span>/day</span></p>
          </div>
        </div>

        <div className="tabs">
          <span>Details</span>
          <span>Pricing</span>
          <span className="active">Photos</span>
        </div>

        <div className="photos-grid">
          <img 
            src="https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png"
            alt="van"
          />
        </div>

        <button className="upload-btn">Upload New Photo</button>

      </div>
    </div>
  )
}