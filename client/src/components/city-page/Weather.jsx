import React from 'react'
import './Weather.css'

function Weather() {
  return (
    <div className='weather flex flex-col justify-center items-center gap-5'>
            <h1 className='temp'>32 c</h1>
            <p className='day'>Sunny </p>
    </div>
  )
}

export default Weather

