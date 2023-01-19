import React from "react";
import axios from "axios";
// const city   = "jaipur";
import {useCityStore} from "../store/search_city.jsx";

const getallrestaurants = async(city)=>{
    // const city = useCityStore((state) => state.city);
    return axios.get(`http://localhost:5000/restaurants/${city}`)
    .then((response)=>{
        console.log(response.data);
        return response.data
    })
}

const getallplacestovisit = (city)=>{
    let URL = `http://localhost:5000/places_to_visit/${city}`;
    axios.get(URL)
    .then((response)=>{
        console.log(response.data);
    });
}

export {getallrestaurants,getallplacestovisit};

