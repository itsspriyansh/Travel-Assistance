import Carousel from "./components/Carousel"
import Header from './components/Header';
import './App.css';
import CityItem from "./components/CityItem";

function App() {
  return (
    <div>
      <Header />
      <div className="mb-10">Explore</div>
      <main className=" w-11/12 mx-auto">
        <Carousel />
        {/* <CityItem /> */}
      </main>
    </div>
  );
}

export default App;

