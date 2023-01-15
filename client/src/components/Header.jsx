import classes from "./Header.module.css"

function Header () {
    return (
        <header className={classes.container}>
            <div className=" min-w-full h-96">
                <div className=" h-3/5"></div>
                <input className=" rounded-full w-5/12 h-12 ml-auto mr-auto block outline-none p-2"></input>
            </div>
        </header>
    )
}

export default Header

