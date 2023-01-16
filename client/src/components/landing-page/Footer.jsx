import classes from "./Footer.module.css"

function Footer () {
    return (
        <div className={classes.footer}>
            <ul className=" flex justify-between w-96 text-white mx-auto">
                <li><button>Home</button></li>
                <li><button>About</button></li>
                <li><button>Blog</button></li>
                <li><button>Services</button></li>
                <li><button>Contact</button></li>
            </ul>
        </div>
    )
}

export default Footer

