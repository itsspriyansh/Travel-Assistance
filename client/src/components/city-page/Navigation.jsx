import { Link } from 'react-router-dom'
import "./Navigation.css"

function Navigation () {
    return (
        <div>
        <nav>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/hotels">Hotels</Link></li>
                <li><Link to="/restaurants">Restaurants</Link></li>
                <li><Link to="/hospitals">Hospitals</Link></li>
                <li><Link to="/places-of-interest">Places of Interests</Link></li>
            </ul>
        </nav>
    </div>
    )
}

export default Navigation

