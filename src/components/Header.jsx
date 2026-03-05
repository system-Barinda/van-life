import React from "react"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink className={(isActiveHeaderMenu) => isActiveHeaderMenu ? "isActiveheaderMenu" : null } to="/Host">Host</NavLink>
                <NavLink className={(isActiveHeaderMenu) => isActiveHeaderMenu ? "isActiveheaderMenu" : null } to="/about">About</NavLink>
                <NavLink className={(isActiveHeaderMenu) => isActiveHeaderMenu ? "isActiveheaderMenu" : null } to="/vans">Vans</NavLink>
            </nav>
        </header>
    )
}