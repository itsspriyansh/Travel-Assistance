import Citysearched from "../CitySearched"
import useCityStore from "../../../store/search_city"
import { getallrestaurants } from "../../../utils/scrapped_data"
import { useState } from "react";
import { useEffect } from "react";
import RestaurantCard from "./RestaurantCard.jsx";
import "./Restaurant.css";


function Restaurant () {

    const city = useCityStore(state => state.city_name);
    const [fetchedRestaurants,setFetchedRestaurants] = useState(null);
    useEffect(()=>{
        (async ()=>{
            const data = await getallrestaurants(city.city)
            setFetchedRestaurants(data)
        })();
    },[])


    if (fetchedRestaurants===null) {
        return (
        <Citysearched tabIndex={2}>
            <div className="flex justify-center my-10">
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
        </Citysearched>
        )
    }


    return (
        <Citysearched tabIndex={2}>
        <div className="container">
        <p className=" text-5xl mb-5 font-sofia w-full flex justify-center mt-10">Restaurants</p>
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

