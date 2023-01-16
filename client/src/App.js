import './App.css';
import LandingPage from "./pages/LandingPage";
import CityPage from "./pages/CityPage";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/city-info" element={<CityPage />} />
      </Routes>
    </div>
  );
}

export default App;

