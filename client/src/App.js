import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import Hospitals from './pages/city_details/components/Hospitals';
import Hotels from './pages/city_details/components/Hotels';
import Restaurants from './pages/city_details/components/Restaurants';
import About from './pages/city_details/components/About';
import PlacesOfInterests from './pages/city_details/components/PlacesOfInterests';
import useCityStore from './store/search_city';
import {getallplacestovisit,getallrestaurants} from "./utils/scrapped_data.js";
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const city = useCityStore((state) => state.city_name);
  console.log(city.city);

  const addTemp = useCityStore(state => state.addTemp)
  const addLatitude = useCityStore(state => state.addLatitude)
  const addLongitude = useCityStore(state => state.addLongitude)
  const setDescription = useCityStore(state => state.setDescription)

  // getallplacestovisit(city.city);
  // getallrestaurants(city.city);

  useEffect (()=> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.city}&appid=4bc833dea642dd07a0351cee82fb0cf8`

      axios.get(url).then(response => {
        addTemp({temp : response.data.main.temp})
        addLatitude({latitude : response.data.coord.lat})
        addLongitude({longitude : response.data.coord.lon})
        setDescription({description : response.data.weather[0].main})
      })
  }, [city.city])

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/places-of-interest" element={<PlacesOfInterests />} />
      </Routes>
    </div>
  );
}

export default App;

