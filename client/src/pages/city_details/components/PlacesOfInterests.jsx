import { useEffect } from "react"
import Citysearched from "../CitySearched"
import { getallplacestovisit } from "../../../utils/scrapped_data"
import { useState } from "react"
import useCityStore from "../../../store/search_city"

function About () {

    const [fetchedPlaces, setFetchedPlaces] = useState(null)
    const city = useCityStore(state => state.city_name)
    useEffect(()=>{
        (async () => {
            const data = await getallplacestovisit(city.city)
            setFetchedPlaces(data)
        })()
    },[])

    if (fetchedPlaces == null) {
        return (
            <Citysearched>
                loading...
            </Citysearched>
        )
    }

    return (
        <Citysearched>
            {
                JSON.stringify(fetchedPlaces)
            }
        </Citysearched>
    )
}

export default About

