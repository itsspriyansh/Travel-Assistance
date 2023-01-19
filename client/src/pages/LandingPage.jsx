import Header from "../components/landing-page/Header"
import Carousel from "../components/landing-page/Carousel"
import Footer from "../components/landing-page/Footer"
import cities from "../store/city-names"

function LandingPage () {
    return (
        <div>
            <Header />
            <div className=" h-20 items-center flex justify-center bg-gray-300 text-3xl">Explore</div>
            <main className=" bg-gray-300">
                <div className=" mb-10 py-10 px-20 bg-white"> 
                <p className="flex justify-center">Heritage Sites</p>
                <Carousel dest={cities.heritage} /> 
                </div>
                <div className=" mb-10 py-10 px-20 bg-white"> 
                <p className="flex justify-center">Beaches</p>
                <Carousel dest={cities.beaches} /> 
                </div>
                <div className=" mb-10 py-10 px-20 bg-white"> 
                <p className="flex justify-center">Hill Stations</p>
                <Carousel dest={cities.hillStations} /> 
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default LandingPage

