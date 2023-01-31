import './App.css';
import { Route, Routes, useParams } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import Hospitals from './pages/city_details/components/Hospitals';
import Hotels from './pages/city_details/components/Hotels';
import Restaurants from './pages/city_details/components/Restaurants';
import About from './pages/city_details/components/About';
import PlacesOfInterests from './pages/city_details/components/PlacesOfInterests';
import useCityStore from './store/search_city';
import { useEffect } from 'react';
import axios from 'axios';
import Citysearched from './pages/city_details/CitySearched';
import TestPage from './pages/city_details/TestPage';


function App() {

  // const { city } = useParams()

  const city = useCityStore((state) => state.city_name);
  console.log(city.city);
  const setIcon = useCityStore(state => state.setIcon)

  const addTemp = useCityStore(state => state.addTemp)
  const addLatitude = useCityStore(state => state.addLatitude)
  const addLongitude = useCityStore(state => state.addLongitude)
  const setDescription = useCityStore(state => state.setDescription)

  useEffect (()=> {
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4bc833dea642dd07a0351cee82fb0cf8`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.city}&appid=4bc833dea642dd07a0351cee82fb0cf8`

      axios.get(url).then(response => {
        addTemp({temp : response.data.main.temp})
        addLatitude({latitude : response.data.coord.lat})
        addLongitude({longitude : response.data.coord.lon})
        setDescription(response.data.weather[0].main)
        setIcon(response.data.weather[0].icon)
      })
  }, [city.city])


  // return (
  //   <div>
  //     <Routes>
  //       <Route path="/" element={<LandingPage />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/hotels" element={<Hotels />} />
  //       <Route path="/restaurants" element={<Restaurants />} />
  //       <Route path="/hospitals" element={<Hospitals />} />
  //       <Route path="/places-of-interest" element={<PlacesOfInterests />} />
  //     </Routes>
  //   </div>
  // );


  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/:city">
            <Route index element={<Citysearched />} />
            <Route path="about" element={<About />} />
            <Route path="hotels" element={<Hotels />} />
            <Route path="restaurants" element={<Restaurants />} />
            <Route path="places-of-interest" element={<PlacesOfInterests />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;

