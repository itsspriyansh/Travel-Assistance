import Citysearched from "../CitySearched"
import useCityStore from "../../../store/search_city"
import { getallrestaurants } from "../../../utils/scrapped_data"
import { useState } from "react";
import { useEffect } from "react";
import RestaurantCard from "./RestaurantCard.jsx";
import "./Restaurant.css";
import { CircularProgress } from "@mui/material"


function Restaurant () {

    const city = useCityStore(state => state.city_name);
    const [fetchedRestaurants,setFetchedRestaurants] = useState(null);
    useEffect(()=>{
        (async()=>{
            const data = await getallrestaurants(city.city)
            setFetchedRestaurants(data)
        })();
    },[])
    
    
    if (fetchedRestaurants===null) {
        return (
        <Citysearched>
            <div className="flex justify-center mt-10">
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
        </Citysearched>
        )
    }


    return (
        <Citysearched>
        <div className="container">
            <div className="List">
            {
                fetchedRestaurants.map(rest => {
                    return (
                        <RestaurantCard 
                        name = {rest.name}
                        review = {rest.review}
                        see_more ={rest.see_more}
                        tags={rest.tags}
                        />
                    )
                })
            }
            </div>
        </div>
        </Citysearched>
    )
}

export default Restaurant

