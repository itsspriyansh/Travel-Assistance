import axios from "axios";

const getallrestaurants = async(city)=>{
    return axios.get(`http://localhost:5000/restaurants/${city}`)
    .then((response)=>{
        // console.log(response.data);
        return response.data
    })
}

const getallplacestovisit = (city)=>{
    let URL = `http://localhost:5000/places_to_visit/${city}`;
    return axios.get(URL)
    .then((response)=>{
        // console.log(response.data);
        return response.data
    });
}

const getCityImages = (city) => {
    let URL = `http://localhost:5000/city_images/${city}`
    return axios.get(URL)
    .then (response => {
        // console.log (response.data)
        return response.data
    })
}

const getCityAbout = city => {
    let URL = `http://localhost:5000/about/${city}`
    return fetch (URL)
    .then(response => response.json())
    .then(data => data)
}


// const getCityAbout = (city) => {
//     let URL = `http://localhost:5000/about/${city}`
//     return axios.get(URL)
//     .then (response => {
//         console.log (response.data)
//         return response.data
//     })
// }

export {getallrestaurants, getallplacestovisit, getCityAbout, getCityImages};

