import Citysearched from "../CitySearched"
import HotelCard from "./HotelCard"
import { useEffect, useState } from "react"
import { getHotelData } from "../../../utils/api"
import useCityStore from "../../../store/search_city"
import "./Hotels.css"
import { useParams } from "react-router-dom"

function About () {

    const { city } = useParams()

    const latitude = useCityStore(state => state.latitude)
    const longitude = useCityStore(state => state.longitude)
    // const city = useCityStore(state => state.city_name)
    const [fetchedHotelsLocal, setFetchedHotelsLocal] = useState(null)
    const fetchedHotels = useCityStore(state => state.fetchedHotels)
    const setFetchedHotels = useCityStore(state => state.setFetchedHotels)

    useEffect (() => {
        (async () => {
            const data = await getHotelData(latitude.latitude, longitude.longitude)
            setFetchedHotelsLocal(data)
            setFetchedHotels(data)
        })()
    }, [city])
    
    if (fetchedHotelsLocal == null) {       
        return (
            <Citysearched tabIndex={1}>
            <div className="flex justify-center mt-10">
                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
            </Citysearched>
        )
    }
    console.log (fetchedHotels)
    return (
        <Citysearched tabIndex={1}>
            <p className=" text-5xl mb-5 font-sofia w-full flex justify-center mt-10">Hotels</p>
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

