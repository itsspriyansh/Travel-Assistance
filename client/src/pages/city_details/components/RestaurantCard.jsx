import React from 'react'
import "./RestaurantCard.css"


function RestaurantCard({name, review, see_more, tags}) {

    let score
    if (review.slice(0,3) === "100") {
        score = 100;
    } else {
        score = parseInt(review.slice(0,2))
    }

  return (
        <li className="item"> 
             <div className="image">
                <div className='backdrop'></div>
                <img src="https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"/>
            </div>
            <div className="content flex flex-col items-center justify-center">
                <p className=' font-bold'>{name}</p>
                <p className=' text-gray-500'>Rating: {score}%</p>
                <button className='restButton'><a href={see_more} target="_blank">See More</a></button>
            </div>
        </li>
    )
}

export default RestaurantCard

