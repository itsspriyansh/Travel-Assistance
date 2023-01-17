import './App.css';
import LandingPage from "./pages/LandingPage";
import { Route, Routes } from 'react-router-dom';
import Hospitals from './pages/Hospitals';
import Hotels from './pages/Hotels';
import Restaurants from './pages/Restaurants';
import About from './pages/About';
import PlacesOfInterests from './pages/PlacesOfInterests';
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
        <Route paht="/places-of-interests" element={<PlacesOfInterests />} />
      </Routes>
    </div>
  );
}

export default App;

