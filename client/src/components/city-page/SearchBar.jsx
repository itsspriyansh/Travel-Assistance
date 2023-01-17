import classes from "./SearchBar.module.css"

function SearchBar () {
    return (
        <div className={classes.bar}>
        <nav className=" flex justify-between px-16 items-center h-20">
            <div>icon</div>
            <input className=" rounded-full w-3/12 h-8 outline-none p-2"></input>
        </nav>
        </div>
    )
}

export default SearchBar

