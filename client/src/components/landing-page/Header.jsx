import classes from "./Header.module.css"
import React from "react";
import useCityStore from "../../store/search_city";

function Header () {
    const [city, setCity] = React.useState("");
    const addCity = useCityStore((state)=> state.addCity);
    function clickHandleChange (e) {
        setCity(e.target.value);
    }
    const searchLocation= (event) =>{
        if(event.key === 'Enter'){
          console.log("searchedCity");
          addCity({city: city});
          clear();
        }
    }

    const clear = () => setCity("");
    // console.log(city);
  
    return (
        <header className={classes.container}>
            <div className=" min-w-full h-96">
                <div className=" h-3/5"></div>
                
                    <input 
                    className=" rounded-full w-5/12 h-12 ml-auto mr-auto block outline-none p-2" 
                    onChange={clickHandleChange}
                    onKeyPress={searchLocation}
                    type="text"
                    value={city}
                    name="city"/>


            </div>
        </header>
    )
}

export default Header


