export default function HostVanSectionCard({product}){
  
    return(
        <section className="vans">
        <div className="vans-top">
          <h3>Your listed vans</h3>
          <span className="link">View all</span>
        </div>
         {product.map((item) => (
        <div key={item.id} className="van-card">
          <img src={item.imageUrl} alt="" />
          <div>
            <h4>{item.name}</h4>
            <p>${item.price}/day</p>
          </div>
          <span className="edit">Edit</span>
        </div>
        ))}

      
      </section>
    )
}