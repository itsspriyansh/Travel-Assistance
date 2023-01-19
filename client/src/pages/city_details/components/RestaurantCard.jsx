import React from 'react'
import classes from './RestaurantCard.css'
import Card from './Card'
function RestaurantCard({name,review,see_more,tags}) {
  return (
    <Card>
        <li className={classes.item}> 

             <div className={classes.image}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6GgEXVuN6nc5cVRSJTq2rplsdisFKXOUbXw&usqp=CAU"/>
            </div>
            <div className={classes.content}>
                <p>{name}</p>
                <p>{review}</p>
            </div>
            <div className={classes.actions}>
                <button>Info</button>

            </div>
        </li>
        

        </Card>
  )
}

export default RestaurantCard

