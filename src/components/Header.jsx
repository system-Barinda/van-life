import React from "react"
import { Link,NavLink } from "react-router-dom"


export default function Header() {
    const activeStyle = ({ isActive }) =>
  isActive ? "isActiveheaderMenu" : ""
    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
               <NavLink className={activeStyle} to="/host">Host</NavLink>
               <NavLink className={activeStyle} to="/about">About</NavLink>
               <NavLink className={activeStyle} to="/vans">Vans</NavLink>
               </nav>
        </header>
    )
}