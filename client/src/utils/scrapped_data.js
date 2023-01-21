import React from "react";
import axios from "axios";
// const city   = "jaipur";
import {useCityStore} from "../store/search_city.jsx";

const getallrestaurants = async(city)=>{
    return axios.get(`http://localhost:5000/restaurants/${city}`)
    .then((response)=>{
        console.log(response.data);
        return response.data
    })
}

const getallplacestovisit = (city)=>{
    let URL = `http://localhost:5000/places_to_visit/${city}`;
    return axios.get(URL)
    .then((response)=>{
        console.log(response.data);
        return response.data
    });
}

const getCityAbout = (city) => {
    let URL = `http://localhost:5000/about/${city}`
    return axios.get(URL)
    .then (response => {
        console.log (response.data)
        return response.data
    })
}

export {getallrestaurants, getallplacestovisit, getCityAbout};

