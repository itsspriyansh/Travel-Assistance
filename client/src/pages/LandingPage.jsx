import Header from "../components/landing-page/Header"
import Carousel from "../components/landing-page/Carousel"
import Footer from "../components/landing-page/Footer"

function LandingPage () {
  const heritage = [{"city" : "Jaipur", "image" : "https://media.istockphoto.com/id/510978989/photo/hawa-mahal-palace-in-jaipur-rajasthan.jpg?b=1&s=170667a&w=0&k=20&c=g-pS6ParAQuHlSnfJaV-fwtGjsNLqJjPuOMputt17Ek="}, {"city" : "Amrtisar", "image" : "https://media.istockphoto.com/id/543179390/photo/golden-temple-the-main-sanctuary-of-sikhs-amritsar-india.jpg?b=1&s=170667a&w=0&k=20&c=SLwDM--bDJQnGTgfF2CdZ1fVSF0obICsFD7hRIhR4TY="}, {"city" : "Agra", "image" : "https://media.istockphoto.com/id/519330110/photo/taj-mahal-agra-india-monument-of-love-in-blue-sky.jpg?b=1&s=170667a&w=0&k=20&c=8XAl6nAQ7raW9n0_w12njW8kwQtmAtq6FEGfRZH2-aw="}, {"city" : "Kolkata", "image" : "https://media.istockphoto.com/id/1127791569/photo/victoria-memorial-kolkata-calcutta.jpg?b=1&s=170667a&w=0&k=20&c=HyWO9IJ0ffoNw3BXF-Y_CUYMk4xZina4paJtjWPJ6OY="}, {"city" : "Bodhgaya" , "image" : "https://media.istockphoto.com/id/530927704/photo/mahabodhi-temple-bodhgaya.jpg?b=1&s=170667a&w=0&k=20&c=lKR7o-YHCHMUN42PpNRmCWZH02j1WP7Wqo6ELU8KHKg="}, {"city" : "Puri", "image" : "https://media.istockphoto.com/id/467031976/photo/jagannath-temple-in-puri-orissa-india.jpg?b=1&s=170667a&w=0&k=20&c=aFdFMv-4vEvxA9oQr4VjN74NH6QTn5xkC3Kcf8aHArs="}];
  const beaches = [{"city" : "Goa", "image" : "https://media.istockphoto.com/id/171144538/photo/goa-palolem.jpg?b=1&s=170667a&w=0&k=20&c=jNorqO8HZqEGpksswX7Bz0IFF96yZnSQoe4wPi41NSI="}, {"city" : "Pondicherry", "image" : "https://media.istockphoto.com/id/1335876691/photo/view-of-the-shore-from-backwater-boat-ride-to-paradise-beach-pondicherry-india-golden-sands.jpg?b=1&s=170667a&w=0&k=20&c=wzDagDPd0VRbw0wOvQLfN-bH-z9-qfnk1a_pp94jUJ8="}, {"city" : "Vishakhapatnam", "image" : "https://media.istockphoto.com/id/1366802465/photo/fishing-boats-on-the-sand-the-seashore-against-the-backdrop-of-palm-trees-and-blue-sky-south.jpg?b=1&s=170667a&w=0&k=20&c=j7KEdUi18_ajG3VZTne3yyhnfWXpYQtrm1r_vliJBHc="}, {"city" : "TamilNadu", "image" : "https://media.istockphoto.com/id/1185863094/photo/vivekananda-rock-memorial-kanyakumari-tamil-nadu-india.jpg?b=1&s=170667a&w=0&k=20&c=Kd2nBkLL-EeXcLV8sDGps4W0II_NyjfXrppbgJIXZKw="}, {"city" : "Kerala", "image" : "https://media.istockphoto.com/id/1070997496/photo/varkala-beach.jpg?b=1&s=170667a&w=0&k=20&c=w38JzTEtknjAOeZ8Qz1PSHr5P1zyR8xbo196wMb9gy8="}, {"city" : "Odisha", "image" : "https://media.istockphoto.com/id/1169379447/photo/dynamic-golden-sea-beach-at-puri-odisha-india.jpg?b=1&s=170667a&w=0&k=20&c=amB43oEMFS20WzsNlXG_gZMzlNiL8oZHGIdc3quZqks="}];
  const hillStations = [{"city" : "Srinagar", "image" : "https://media.istockphoto.com/id/665366534/photo/gandola-cable-car-in-gulmarg.jpg?b=1&s=170667a&w=0&k=20&c=RqVMvLuuoQ35k8Ya7x-mOVlnURJOCJMweLw0GnaTaVY="}, {"city" : "Shimla", "image" : "https://media.istockphoto.com/id/1402440926/photo/bhimakali-temple-in-sarahan-india.jpg?b=1&s=170667a&w=0&k=20&c=7y4DNoAuFekzXwT_Ww7hCYPt93jWoj6lVNqMGQrLzmY="}, {"city" : "Manali", "image" : "https://media.istockphoto.com/id/1418553689/photo/beautiful-snow-mountains-scene-at-himachal-pradesh-solang-valley-manali-near-rohtang-pass.jpg?b=1&s=170667a&w=0&k=20&c=E9xIX9PcXzF5Ou7ccZXeV7ZEY5UHyzsjTifLA1z442c="}, {"city" : "Mussoorie", "image" : "https://media.istockphoto.com/id/1140128164/photo/mussoorie-landscape-in-cloudy-rainy-monsoon-season-stock-image.jpg?b=1&s=170667a&w=0&k=20&c=nEpKtlUCF2OxKEQTQ_nvw4R275Z0wmQYn7MXL6FfgoY="}, {"city" : "Almora", "image" : "https://media.istockphoto.com/id/1393848618/photo/kasar-devi-temple-hindu-shrine-in-almora-uttarakhand.jpg?b=1&s=170667a&w=0&k=20&c=W9TRX3fMSYeNkgBmYKg6HSks7yvmbGg5k0yISPtZ_cI="}, {"city" : "Nainital", "image" : "https://media.istockphoto.com/id/1387430600/photo/nainital-lake.jpg?b=1&s=170667a&w=0&k=20&c=OqRUI8N8diYuLozvRQCLJHIUS0gQ7ylzd1CjBumRHoA="}];


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

