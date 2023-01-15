import { Link } from "react-router-dom"
import classes from "./CityItem.module.css"

function CityItem () {
    return (
        <div className={classes.card}>
            <div className={classes.image}>
                <img src="https://img.veenaworld.com/wp-content/uploads/2021/09/Rajasthan-scaled.jpg" />
                <div className={classes.backdrop}></div>
            </div>
            <div>
                <p className="flex justify-center mt-4 mb-4">Jaipur</p>
                <div className="flex justify-center">
                <button className=" rounded-full bg-white px-8 py-2"><Link to="/city-page">Discover</Link></button>
                </div>
            </div>
        </div>
    )
}

export default CityItem

