import classes from "./SearchBar.module.css"
import React from "react";
import useCityStore from "../../store/search_city";
import {Link, useNavigate} from "react-router-dom";
import logoSvg from "./logo.svg"


function SearchBar () {

    const [city, setCity] = React.useState("");
    const addCity = useCityStore((state)=> state.addCity);
    const resetIsLoading = useCityStore(state => state.resetIsLoading);
    const navigate = useNavigate();


    function clickHandleChange (e) {
        setCity(e.target.value);
        // console.log(e.target.value);
    }

    const searchLocation = (event) => {
        if(event.key === 'Enter'){
        //   console.log("searchedCity");
          addCity({city: city});
          clear();
          resetIsLoading();
        //   navigate("/about");
            navigate(`../../${city}/about`)
        }
    }

    const clear = () => setCity("");

    return (
        <div className={classes.bar}>
        <nav className=" flex justify-between px-16 items-center h-20">
            <div>
                <Link to="/">
                <img className=" h-10" src={logoSvg} alt=""></img>
                </Link>
            </div>

            <div className=" w-5/12 flex justify-around">
            <input 
            className=" rounded-full w-8/12 h-8 outline-none p-2 text-lg font-light pl-4"
            onChange={clickHandleChange}
            onKeyPress={searchLocation}
            type="text"
            value={city}
            name="city"
            placeholder="search..."
            ></input>
            </div>
        </nav>
        </div>
    )
}

export default SearchBar

