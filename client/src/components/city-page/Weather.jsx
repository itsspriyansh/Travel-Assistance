import React from 'react'
import './Weather.css'
import useCityStore from '../../store/search_city'

function Weather() {

  const temp = useCityStore (state => state.temp)
  const description = useCityStore(state => state.description)
  const icon = useCityStore(state => state.icon)
  console.log (temp)
  console.log (description.description)

    return (
      <div className='weather flex flex-col justify-start items-center gap-5 pt-16'>
        <h1 className='temp font-impact text-5xl'>{Math.floor(temp.temp - 273.5)}°C</h1>
        <p className='day'> {description} </p>
        <p className='icon'>
          <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="" />
        </p>
      </div>
    )

}

export default Weather

