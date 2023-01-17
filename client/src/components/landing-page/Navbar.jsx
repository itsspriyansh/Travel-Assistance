// import classes from "./Navbar.css"
import './Navbar.css'
function Navbar () {
    return (
        <div >
            <ul className="list">
                <li className="item"><button>Home</button></li>
                <li className="item"><button>About</button></li>
                <li className="item"><button>Blog</button></li>
                <li className="item"><button>Services</button></li>
                <li className="item"><button>Contact</button></li>
            </ul>
        </div>
    )
}

export default Navbar