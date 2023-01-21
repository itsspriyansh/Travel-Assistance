import React from 'react';
import classes from "./HotelCard.module.css"
import { RxCross2 } from 'react-icons/rx'
import { TiTick } from 'react-icons/ti'

function HotelCard ({properties}) {
    return (
        <div className = {classes.container}>
            <div className = {classes.hotelImg}>
                <img src = {properties.max_1440_photo_url} className = {classes.image}/>
            </div>
            <div className = {classes.hotelDes}>
            <div className = {classes.hotelName}>
                <h2>{properties.hotel_name}</h2>
            </div> 
            <div className = {classes.hoteladd}>
                <p>{properties.address}</p>
            </div> 

            <div className = {classes.hotelPrice}><p>&#x20B9; {Math.floor(properties.min_total_price)} </p></div>  
            <div className = {classes.buttonClass}>
            <div className = {classes.btnBookNow}>
                <a href={properties.url} target="_blank">
                <button className = "btnBookNow">Book Now</button>
                </a>
            </div> 
            </div>
            </div>
                <div className = {classes.hotelMoreInfo}>
                    <div className = {classes.hotelMoreInfocontainer}>
                    <div className = {classes.freecanc}>Free Cancellation
                        {properties.is_free_cancellable ? <TiTick /> : <RxCross2 />}
                    </div>
                    <div className = {classes.parking}>Parking Available
                        {properties.has_free_parking ? <TiTick /> : <RxCross2 />}
                    </div>
                    <div className = {classes.swimming}>Swimming Pool
                        {properties.has_swimming_pool ? <TiTick /> : <RxCross2 />}
                    </div>
                    <div className = {classes.children}>Children Allowed
                        {!properties.children_not_allowed ? <TiTick /> : <RxCross2 />}
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default HotelCard

