import React, { useContext } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { VansContext } from "../context/VansContext"

export default function Vans() {

    const { vans } = useContext(VansContext)
    const [searchParams,setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");
    const desplayType = typeFilter ? vans.filter(v => v.type === typeFilter) : vans;
    function handleType(type){
        setSearchParams({type});
    }
    if (!vans) return <p>Loading...</p>

    const vanElements =desplayType.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} alt={van.name} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>
                    {van.type}
                </i>
            </Link>
        </div>
    ))

    return (
        <div className="van-list-container">

            
            <h1>Explore our van options</h1>

   <div className="menu-vans">
    <button className="van-filter simple" onClick={() => handleType('simple')}>Simple</button>
    <button className="van-filter rugged" onClick={() => handleType('rugged')}>Rugged</button>
    <button className="van-filter luxury" onClick={() => handleType('luxury')}>Luxury</button>
     <button >Clear</button>
</div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}