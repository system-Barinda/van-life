import "../../styles/HostVans.css"

export default function HostVans() {
  const vans = [
    {
      id: 1,
      name: "Modest Explorer",
      price: 60,
      image: "/images/van1.png"
    },
    {
      id: 2,
      name: "Beach Bum",
      price: 80,
      image: "/images/van2.png"
    },
    {
      id: 3,
      name: "Green Wonder",
      price: 70,
      image: "/images/van3.png"
    }
  ]

  return (
    <section className="host-vans">
      <h2 className="title">Your listed vans</h2>

      <div className="vans-list">
        {vans.map(van => (
          <div key={van.id} className="van-card">
            <img src={van.image} alt={van.name} />

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