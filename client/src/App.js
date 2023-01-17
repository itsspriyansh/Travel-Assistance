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

function App() {
  const city = useCityStore((state) => state.city_name);
  console.log(city.city);
  getallplacestovisit(city.city);
  getallrestaurants(city.city);
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
