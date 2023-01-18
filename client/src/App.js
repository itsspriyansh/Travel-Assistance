import React from "react";
import './App.css';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import Hospitals from './pages/city_details/components/Hospitals';
import Hotels from './pages/city_details/components/Hotels';
import Restaurants from './pages/city_details/components/Restaurants';
import About from './pages/city_details/components/About';
import PlacesOfInterests from './pages/city_details/components/PlacesOfInterests';
import useCityStore from './store/search_city';
import {getallplacestovisit,getallrestaurants} from "./utils/scrapped_data.js";

function App() {

  const isLoading = useCityStore((state)=> state.isLoading)
  const city = useCityStore((state) => state.city_name);
  getallplacestovisit(city.city);
  getallrestaurants(city.city);

  const [weather, setWeather] = React.useState({});

  const addTemp = useCityStore((state)=> state.addTemp);
  const addLatitude = useCityStore((state)=> state.addLatitude);
  const addLongitude = useCityStore((state)=> state.addLongitude);
  const changeIsLoading = useCityStore((state)=> state.changeIsLoading)
  console.log ("isLoading:" + isLoading)

  React.useEffect(()=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.city}&appid=4bc833dea642dd07a0351cee82fb0cf8`
    if(weather.main && isLoading){
      console.log (weather.main.temp)
    addTemp({temp: weather.main.temp});
    addLatitude({latitude: weather.coord.lat});
    addLongitude({longtitude: weather.coord.lon});
    }
      axios.get(url).then((response)=>{
        setWeather(response.data)
        console.log(response.data)
      })
      // .then(changeIsLoading())
      changeIsLoading()

      
  },[city.city])
    
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route paht="/places-of-interests" element={<PlacesOfInterests />} />
      </Routes>
    </div>
  );
}

export default App;

