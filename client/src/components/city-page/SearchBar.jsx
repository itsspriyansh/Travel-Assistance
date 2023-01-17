import classes from "./SearchBar.module.css"
import React from "react";
import useCityStore from "../../store/search_city";
import {useNavigate} from "react-router-dom";


function SearchBar () {

    const [city, setCity] = React.useState("");
    const addCity = useCityStore((state)=> state.addCity);
    const resetIsLoading = useCityStore(state => state.resetIsLoading);
    const navigate = useNavigate();

    function clickHandleChange (e) {
        setCity(e.target.value);
        console.log(e.target.value);
    }
    const searchLocation = (event) => {
        if(event.key === 'Enter'){
          console.log("searchedCity");
          addCity({city: city});
          clear();
        //   resetIsLoading();
          navigate("/about");
        }
    }

    const clear = () => setCity("");

    return (
        <div className={classes.bar}>
        <nav className=" flex justify-between px-16 items-center h-20">
            <div>icon</div>
            <input 
            className=" rounded-full w-3/12 h-8 outline-none p-2"
            onChange={clickHandleChange}
            onKeyPress={searchLocation}
            type="text"
            value={city}
            name="city"
            ></input>
        </nav>
        </div>
    )
}

export default SearchBar

