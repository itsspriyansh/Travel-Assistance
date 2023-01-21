import Citysearched from "../CitySearched"
import { getCityAbout } from "../../../utils/scrapped_data"
import { useState } from "react"
import { useEffect } from "react"
import useCityStore from "../../../store/search_city"

function About () {

    const city = useCityStore(state => state.city_name)
    const [fetchedCityAbout, setFetchedCityAbout] = useState(null)
    useEffect (() => {
        (async () => {
            const data = await getCityAbout(city.city)
            setFetchedCityAbout(data)
        })()
    }, [city])

    if (fetchedCityAbout === null) {
        return (
            <Citysearched>
                <div className="flex justify-center mt-10">
                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            </Citysearched>
        )
    }

    let aboutData = JSON.stringify(fetchedCityAbout)
    aboutData = aboutData.substr (2, aboutData.length - 6)

    return (
        <Citysearched>
                <div className=" px-12 mt-12 text-gray-800">
                <p className=" text-5xl mb-5 font-sofia">About</p>
                    {aboutData}
                </div>
        </Citysearched>
    )
}

export default About

