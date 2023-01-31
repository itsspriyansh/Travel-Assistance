import { useEffect } from "react"
import Citysearched from "../CitySearched"
import { getallplacestovisit } from "../../../utils/scrapped_data"
import { useState } from "react"
import useCityStore from "../../../store/search_city"
import { useParams } from "react-router-dom"

function About () {

    const { city } = useParams()

    const [fetchedPlaces, setFetchedPlaces] = useState(null)
    // const city = useCityStore(state => state.city_name)
    useEffect(()=>{
        (async () => {
            // const data = await getallplacestovisit(city.city)
            const data = await getallplacestovisit(city)
            setFetchedPlaces(data)
        })()
    },[])

    if (fetchedPlaces == null) {
        return (
            <Citysearched tabIndex={3}>
            <div className="flex justify-center mt-10">
                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
            </Citysearched>
        )
    }

    return (
        <Citysearched tabIndex={3}>
                <p className=" text-5xl mb-5 font-sofia w-full flex justify-center mt-10">Places of Interest</p>
            {
                JSON.stringify(fetchedPlaces)
            }
        </Citysearched>
    )
}

export default About

