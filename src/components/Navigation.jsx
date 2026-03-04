import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
export default function Navigation(){
    return(<>  <Outlet />
        <nav className="nav">
          
        <Link to={`/Host`}><span className="active">Dashboard</span></Link>
        <Link to={`/Host/Income`}><span>Income</span> </Link>
        <Link to={`/Host/Vans`}><span>Vans</span></Link>
        <Link to={`/Host/HostReviews`}><span>Reviews</span></Link>
      </nav>
    </>)
}