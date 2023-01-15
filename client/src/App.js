import Carousel from "./components/Carousel"
import Header from './components/Header';
import './App.css';
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <div className=" h-20 items-center flex justify-center bg-gray-300">Explore</div>
      <main className=" bg-gray-300">
        <div className=" mb-10 py-10 px-20 bg-white"> 
        <p className="flex justify-center">Heritage Sites</p>
          <Carousel /> 
        </div>
        <div className=" mb-10 py-10 px-20 bg-white"> 
        <p className="flex justify-center">Heritage Sites</p>
          <Carousel /> 
        </div>
        <div className=" mb-10 py-10 px-20 bg-white"> 
        <p className="flex justify-center">Heritage Sites</p>
          <Carousel /> 
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

