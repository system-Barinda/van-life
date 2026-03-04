export default function HostVanSectionCard(){
    return(
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
    )
}