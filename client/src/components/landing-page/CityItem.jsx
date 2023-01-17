import { Link } from "react-router-dom"
import classes from "./CityItem.module.css"

function CityItem ({name, image}) {
    return (
        <div className={classes.card}>
            <div className={classes.image}>
                <img src={image} />
                <div className={classes.backdrop}></div>
            </div>
            <div>
                <p className="flex justify-center mt-4 mb-4 font-sofia text-gray-600"> <span className="name">{name}</span></p>
                <div className="flex justify-center">
                <button className=" rounded-full bg-white px-8 py-2"><Link to="/about">Discover</Link></button>
                </div>
            </div>
        </div>
    )
}

export default CityItem

