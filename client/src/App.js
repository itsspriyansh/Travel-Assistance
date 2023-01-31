import './App.css';
import { Route, Routes} from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import Hotels from './pages/city_details/components/Hotels';
import Restaurants from './pages/city_details/components/Restaurants';
import About from './pages/city_details/components/About';
import PlacesOfInterests from './pages/city_details/components/PlacesOfInterests';
import Citysearched from './pages/city_details/CitySearched';


function App() {

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

