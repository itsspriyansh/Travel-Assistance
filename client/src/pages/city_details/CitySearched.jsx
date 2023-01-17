import React from "react";
import {Link,Outlet} from "react-router-dom";
import SearchBar  from "../../components/city-page/SearchBar";
export default function Citysearched(){
    return(
        <>
            <SearchBar/>
            
            <div>
                Hello
            </div>
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
        </>
    )
}

