import "./HostDashboard.css"

export default function HostDashboard() {
  return (
    <div className="dashboard">

      {/* Navigation */}
      <nav className="nav">
        <span className="active">Dashboard</span>
        <span>Income</span>
        <span>Vans</span>
        <span>Reviews</span>
      </nav>

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
          <span className="star">⭐ 5.0/5</span>
        </div>
        <span className="link">Details</span>
      </section>

      {/* Vans Section */}
      <section className="vans">
        <div className="vans-top">
          <h3>Your listed vans</h3>
          <span className="link">View all</span>
        </div>

        <div className="van-card">
          <img src="/images/van1.png" alt="" />
          <div>
            <h4>Modest Explorer</h4>
            <p>$60/day</p>
          </div>
          <span className="edit">Edit</span>
        </div>

        <div className="van-card">
          <img src="/images/van2.png" alt="" />
          <div>
            <h4>Beach Bum</h4>
            <p>$80/day</p>
          </div>
          <span className="edit">Edit</span>
        </div>

        <div className="van-card">
          <img src="/images/van3.png" alt="" />
          <div>
            <h4>Green Wonder</h4>
            <p>$70/day</p>
          </div>
          <span className="edit">Edit</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2022 #VANLIFE
      </footer>

    </div>
  )
}