import React, { useEffect } from 'react'
import './Weather.css'
import useCityStore from '../../store/search_city'

function Weather() {

  const isLoading = useCityStore(state => state.isLoading)
  const temp = useCityStore (state => state.temp)
  const description = useCityStore(state => state.description)
  console.log (temp)
  console.log (description.description)

    return (
      <div className='weather flex flex-col justify-start items-center gap-5 pt-16'>
        <h1 className='temp font-impact text-5xl'>{Math.floor(temp.temp - 273.5)}°C</h1>
        <p className='day'> {description.description} </p>
      </div>
    )

}

export default Weather

