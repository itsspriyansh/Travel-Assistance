import Citysearched from "../CitySearched"
import useCityStore from "../../../store/search_city"

function Restaurant () {

    const restaurants = useCityStore(state => state.restaurants)

    return (
        <Citysearched>
        {/* <li className={classes.item}>
            <div className={classes.image}>
                <img src={url}/>
            </div>
            <div className={classes.content}>
                <p>hello</p>
                <p>hello</p>
            </div>
            <div className={classes.actions}>
                <button>Info</button>
                <button id={classes.buttonCart}>button</button>
            </div>
        </li> */}
        </Citysearched>
    )
}

export default Restaurant

