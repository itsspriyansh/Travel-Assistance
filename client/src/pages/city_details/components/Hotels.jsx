import Citysearched from "../CitySearched"
import HotelCard from "./HotelCard"
import { useEffect, useState } from "react"
import { getHotelData } from "../../../utils/api"
import useCityStore from "../../../store/search_city"
import "./Hotels.css"
import { useParams } from "react-router-dom"
import axios from "axios"

function About () {

    const { city } = useParams()
    const [fetchedHotelsLocal, setFetchedHotelsLocal] = useState(null)
    const fetchedHotels = useCityStore(state => state.fetchedHotels)
    const setFetchedHotels = useCityStore(state => state.setFetchedHotels)

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4bc833dea642dd07a0351cee82fb0cf8`

    useEffect (() => {
        // ( async () => {

            // const coord = await getCoord()

            // const data = await getHotelData(coord[0], coord[1])
            // setFetchedHotelsLocal(data)
            // setFetchedHotels(data)

            axios.get(url)
            .then( async response => {
                const lat = response.data.coord.lat
                const lon = response.data.coord.lon

                const data = await getHotelData(lat, lon)
                setFetchedHotelsLocal(data)
                setFetchedHotels(data)
            })

        // })()
    }, [])


    // const getCoord = async () => {
    //     let coord = []
    //     await axios.get(url).then(res => {
    //         coord.push(res.data.coord.lat, res.data.coord.lon)
    //     })
    //     return coord
    // }
    
    if (fetchedHotelsLocal == null) {       
        return (
            <Citysearched tabIndex={1}>
            <div className="flex justify-center mt-10">
                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
            </Citysearched>
        )
    }
    // console.log (fetchedHotels)
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

