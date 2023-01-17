import React from "react";
import axios from "axios";

const baseURL = "http://localhost:5000/restaurants/jaipur";

const getallrestaurants = ()=>{
    axios.get(baseURL)
    .then((response)=>{
        console.log(response.data);
    });
}

const getallplacestovisit = ()=>{
    let URL = "http://localhost:5000/places_to_visit/jaipur";
    axios.get(URL)
    .then((response)=>{
        console.log(response.data);
    });
}
export {getallrestaurants,getallplacestovisit};