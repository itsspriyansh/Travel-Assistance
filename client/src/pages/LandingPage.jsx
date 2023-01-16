import Header from "../components/landing-page/Header"
import Carousel from "../components/landing-page/Carousel"
import Footer from "../components/landing-page/Footer"

function LandingPage () {
  const heritage = [{"city" : "Jaipur", "image" : "/img/jaipur.jpg"}, {"city" : "Amrtisar", "image" : "/img/Amritsar.jpg"}, {"city" : "Agra", "image" : "/img/Agra.avif"}, {"city" : "Kolkata", "image" : "/img/Kolkata.jpg"}, {"city" : "Bodhgaya" , "image" : "/img/Bodhgaya.jpg"}, {"city" : "Puri", "image" : "/img/puri.jpg"}];
  const beaches = [{"city" : "Goa", "image" : "/img/goa.jpg"}, {"city" : "Pondicherry", "image" : "/img/Pondicherry.jpg"}, {"city" : "Vishakhapatnam", "image" : "/img/Vishakhapatnam.jpg"}, {"city" : "TamilNadu", "image" : "/img/Tamilnadu.jpg"}, {"city" : "Kerala", "image" : "/img/kerala.jpg"}, {"city" : "Odisha", "image" : "/img/Odisha.jpg"}];
  const hillStations = [{"city" : "Jammu and Kashmir", "image" : "/img/JandK.jpg"}, {"city" : "Shimla", "image" : "/img/Shimla.jpg"}, {"city" : "Manali", "image" : "/img/Manali.jpg"}, {"city" : "Mussoorie", "image" : "/img/Mussoorie.jpg"}, {"city" : "Almora", "image" : "/img/Almora.jpg"}, {"city" : "Nainital", "image" : "/img/Nainital.jpg"}];


    return (
        <div>
            <Header />
            <div className=" h-20 items-center flex justify-center bg-gray-300" style = {{color : "black", fontSize : "30px", fontWeight : "Bold"}}>Explore</div>
            <main className=" bg-gray-300">
                <div className=" mb-10 py-10 px-20 bg-white"> 
                <p className="flex justify-center" style = {{color : "royalblue", fontSize : "25px", fontWeight : "Bold"}}>Heritage Sites</p>
                <Carousel arr = {heritage}/> 
                </div>
                <div className=" mb-10 py-10 px-20 bg-white"> 
                <p className="flex justify-center" style = {{color : "royalblue", fontSize : "25px", fontWeight : "Bold"}}>Beaches</p>
                <Carousel arr = {beaches}/> 
                </div>
                <div className=" mb-10 py-10 px-20 bg-white"> 
                <p className="flex justify-center" style = {{color : "royalblue", fontSize : "25px", fontWeight : "Bold"}}>Hill Stations</p>
                <Carousel arr = {hillStations}/> 
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default LandingPage

