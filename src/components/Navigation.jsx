import { NavLink, Outlet } from "react-router-dom"

export default function Navigation() {

  const activeClass = ({ isActive }) => isActive ? "isActiveHost" : "";

  return (
    <>
      <nav className="nav">
        <NavLink className={activeClass} to="/Host" end>Dashboard</NavLink>
        <NavLink className={activeClass} to="/Host/Income">Income</NavLink>
        <NavLink className={activeClass} to="/Host/Vans">Vans</NavLink>
        <NavLink className={activeClass} to="/Host/HostReviews">Reviews</NavLink>
      </nav>

      <Outlet />
    </>
  )
}