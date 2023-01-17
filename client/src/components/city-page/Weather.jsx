import React from 'react'
import './Weather.css'
import useCityStore from '../../store/search_city'

function Weather() {

  const temp = useCityStore (state => state.temp)
  console.log (temp)

  return (
    <div className='weather flex flex-col justify-start items-center gap-5 pt-16'>
            <h1 className='temp font-impact text-5xl'>{temp.temp}</h1>
            <p className='day'>Sunny </p>
    </div>
  )
}

export default Weather

