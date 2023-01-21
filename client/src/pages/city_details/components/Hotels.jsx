import Citysearched from "../CitySearched"
import HotelCard from "./HotelCard"
import { useEffect, useState } from "react"
import { getHotelData } from "../../../utils/api"
import useCityStore from "../../../store/search_city"
import "./Hotels.css"

function About () {

    const latitude = useCityStore(state => state.latitude)
    const longitude = useCityStore(state => state.longitude)
    const city = useCityStore(state => state.city_name)
    const [fetchedHotels, setFetchedHotels] = useState(null)

    useEffect (() => {
        (async () => {
            const data = await getHotelData(latitude.latitude, longitude.longitude)
            setFetchedHotels(data)
        })()
      }, [city])

    if (fetchedHotels == null) {       
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
            {
                fetchedHotels.result.map(hotel => {
                    return (
                        <HotelCard 
                            properties = {hotel}
                        />
                    )
                })
            }
        </Citysearched>
    )
}

export default About

