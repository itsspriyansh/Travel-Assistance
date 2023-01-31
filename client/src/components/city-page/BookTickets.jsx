import { useEffect } from "react"
import { useState } from "react"
import useCityStore from "../../store/search_city"

function BookTickets () {

    const city = useCityStore(state => state.city_name)
    const [date, setDate] = useState(null)
    const [from, setFrom] = useState(null)

    const URL = `https://www.makemytrip.com/railways/listing/?classCode=3A&className=3%20Tier%20AC&date=${date}&destCity=${city.city}&destStn=JP&srcCity=${from}&srcStn=JBP`

    const setDateHandler = async e => {
        e.preventDefault()
        setDate((e.target.value).slice(0,4) + (e.target.value).slice(5,7) + (e.target.value).slice(8,10))
    }

    const setFromHandler = e => {
        e.preventDefault()
        setFrom(e.target.value)
        // console.log(e.target.value)
    }

    useEffect(()=>{
        const inpF = document.getElementById("inputFrom")
        const inpD = document.getElementById("inputDate")
        inpF.value = ""
        inpD.value = ""
    }, [city])

    return (
        <div className="w-full h-96 mt-2 rounded-2xl bg-gray-800 flex flex-col items-center justify-around">
        <p className=" text-white font-light text-xl">Book Tickets</p>
        <div className=" w-full flex flex-col items-center">
            <p className=" text-white mb-1 font-light">Where are you right now?</p>
            <input id="inputFrom" className="w-10/12 rounded-full px-3" onChange={setFromHandler}></input>
        </div>
        <div className=" flex flex-col items-center w-full">
            <p className=" text-white mb-1 font-light">Date</p>
            <input id="inputDate" type="date" className="w-7/12 rounded-full px-3" onChange={setDateHandler}></input>
        </div>
        <button className=" text-white border-white border-2 px-2 py-2 rounded-lg">
            <a href={URL} target="_blank">Book Now</a>
        </button>
    </div>        
    )
}

export default BookTickets

