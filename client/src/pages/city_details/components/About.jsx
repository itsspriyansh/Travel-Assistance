import Citysearched from "../CitySearched"
import { getCityAbout } from "../../../utils/scrapped_data"
import { useState } from "react"
import { useEffect } from "react"
import useCityStore from "../../../store/search_city"
import { useParams } from "react-router-dom"
import CitySearched from "../CitySearched"

function About () {

    const { city } = useParams()


    // const city = useCityStore(state => state.city_name)
    const [fetchedCityAbout, setFetchedCityAbout] = useState(null)
    
    useEffect (() => {
        (async () => {
            // const data = await getCityAbout(city.city)
            const data = await getCityAbout(city)
            setFetchedCityAbout(data)
        })()
    }, [city])

    if (fetchedCityAbout === null) {
        return (
            <CitySearched tabIndex={0}>
                <div className="flex justify-center mt-10">
                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            </CitySearched>
        )
    }

    let aboutData = JSON.stringify(fetchedCityAbout)
    aboutData = aboutData.substr (2, aboutData.length - 6)

    return (
        <CitySearched tabIndex={0}>
                <div className=" px-12 mt-12 text-gray-800">
                <p className=" text-5xl mb-5 font-sofia w-full flex justify-center mt-10">About</p>
                    {aboutData}
                </div>
        </CitySearched>
    )
}

export default About

