import "../../styles/HostDashboard.css"
import Navigation from "../../components/Navigation"
import HostVanSectionCard from "../../components/HostVanSectionCard"
import { VansContext } from "../../context/VansContext"
import React from "react"

export default function HostDashboard() {
  const {vans} = React.useContext(VansContext);

  return (
    <div className="dashboard">
    
      {/* Navigation */}
      <Navigation />

      {/* Welcome Section */}
      <section className="welcome">
        <h1>Welcome!</h1>
        <div className="welcome-top">
          <p>Income last <strong>30 days</strong></p>
          <span className="link">Details</span>
        </div>
        <h2>$2,260</h2>
      </section>

      {/* Review Section */}
      <section className="review">
        <div>
          <strong>Review score</strong>
          <span className="star">⭐ <strong className="dddd">5.0</strong>/5</span>
        </div>
        <span className="link">Details</span>
      </section>

      {/* HostVansSectionCard */}
     
      <HostVanSectionCard product={vans} />

      {/* Footer */}
    
    </div>
  )
}