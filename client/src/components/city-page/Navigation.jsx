import './Navbar.css'
import { Link, Outlet } from 'react-router-dom'
function Navbar () {
    return (
        <div>
        <nav>
            <ul>
                <li><Link to="/city/about">About</Link></li>
                <li><Link to="/city/hotels">Hotels</Link></li>
                <li><Link to="/city/restaurants">Restaurants</Link></li>
                <li><Link to="/city/hospitals">Hospitals</Link></li>
                <li><Link to="/city/places-of-interest">Places of Interests</Link></li>
            </ul>
        </nav>
        <Outlet/>
    </div>
    )
}

export default Navbar

