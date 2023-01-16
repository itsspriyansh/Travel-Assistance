import { Link } from "react-router-dom"
import classes from "./CityItem.module.css"

function CityItem(props) {
    return (
        <div className={classes.card}>
            <div className={classes.image}>
                <img src={props.image} />
                <div className={classes.backdrop}></div>
            </div>
            <div>
                <p className="flex justify-center mt-4 mb-4 cityName" style={{ color: "#908F96" }}>{props.city}</p>
                <div className="flex justify-center">
                    <button className=" rounded-full bg-white px-8 py-2"><Link to="/city-page">Discover</Link></button>
                </div>
            </div>
        </div>
    )
}

export default CityItem;



