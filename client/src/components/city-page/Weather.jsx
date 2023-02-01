import React from 'react'
import './Weather.css'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

function Weather() {

  const [temp, setTemp] = useState(null)
  const [description, setDescription] = useState(null)
  const [icon, setIcon] = useState(null)
  const { city } = useParams()

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4bc833dea642dd07a0351cee82fb0cf8`  

  useEffect(()=>{
    axios.get(url)
    .then(response => {
      setDescription(response.data.weather[0].main)
      setIcon(response.data.weather[0].icon)
      setTemp(response.data.main.temp) 
    })
  },[city])

  if (description == null) {
    return (
        <div className='weather flex flex-col justify-start items-center gap-5 pt-16'>
            <div className='flex justify-center items-center'>
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
        </div>     
    )
  }

    return (
      <div className='weather flex flex-col justify-start items-center gap-5 pt-16'>
        <h1 className='temp font-impact text-5xl'>{Math.floor(temp - 273.5)}°C</h1>
        <p className='day'> {description} </p>
        <p className='icon'>
          <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="" />
        </p>
      </div>
    )

}

export default Weather

