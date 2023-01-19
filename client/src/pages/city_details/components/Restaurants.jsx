import Citysearched from "../CitySearched"
import useCityStore from "../../../store/search_city"
import { getallrestaurants } from "../../../utils/scrapped_data"
import { useState } from "react";
import { useEffect } from "react";
import RestaurantCard from "./RestaurantCard.jsx";

function Restaurant () {

    const city = useCityStore(state => state.city_name);
    const [fetchedRestaurants,setFetchedRestaurants] = useState(null);
    useEffect(()=>{
        (async()=>{
            const data = await getallrestaurants(city.city)
            console.log(data)

            setFetchedRestaurants(data)
        })();
    },[])
    
    
    if (fetchedRestaurants===null) {
        return <Citysearched>
            <div className="flex justify-center mt-10">
            loading...
            </div>
        </Citysearched>
    }
    
    var result = [];
     for (var i = 0; i < fetchedRestaurants.length; i++) {
    result.push( <RestaurantCard
        name = {fetchedRestaurants[i].name}
        review = {fetchedRestaurants[i].review}
        see_more ={fetchedRestaurants[i].see_more}
        tags={fetchedRestaurants[i].tags}
      />);
  }
  
  const final = result.map((x)=>{
    return(
      <div>{x}</div>
    )
  })



    return (
        <Citysearched>
        {/* <li className={classes.item}>
            <div className={classes.image}>
                <img src={url}/>
            </div>
            <div className={classes.content}>
                <p>hello</p>
                <p>hello</p>
            </div>
            <div className={classes.actions}>
                <button>Info</button>
                <button id={classes.buttonCart}>button</button>
            </div>
        </li> */}
        {/* {
            fetchedRestaurants.map(rest => {
                return (
                    <div>{rest.name}</div>
                )
            })
        } */}
        {final}
        {/* // {JSON.stringify(fetchedRestaurants)} */}
        </Citysearched>
    )
}

export default Restaurant

