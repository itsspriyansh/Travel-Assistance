import './App.css';
import LandingPage from "./pages/LandingPage";
import { Route, Routes ,Router} from 'react-router-dom';
import Hospitals from './pages/city_details/components/Hospitals';
import Hotels from './pages/city_details/components/Hotels';
import Restaurants from './pages/city_details/components/Restaurants';
import About from './pages/city_details/components/About';
import PlacesOfInterests from './pages/city_details/components/PlacesOfInterests';
import Citysearched from "./pages/city_details/CitySearched";
import useCityStore from './store/search_city';
import {getallplacestovisit,getallrestaurants} from "./utils/scrapped_data.js";

function App() {
  const city = useCityStore((state) => state.city_name);
  console.log(city.city);
  getallplacestovisit(city.city);
  getallrestaurants(city.city);
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}/>

        <Route exact path= "/city" element={<Citysearched/>} >
          <Route path="/city/about" element={<About/>}/>
          <Route path="/city/hotels" element={<Hotels />} />
          <Route path="/city/restaurants" element={<Restaurants />} />
          <Route path="/city/hospitals" element={<Hospitals />} />
          <Route path="/city/places-of-interests" element={<PlacesOfInterests />} />
        </Route>

      </Routes>
      </Router>
      
    </div>
  );
}

export default App;

