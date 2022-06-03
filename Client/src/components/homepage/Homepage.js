import {Link} from "react-router-dom"
import background from "../images/corona.jpg"
function LandingPageButton() {

    return <Link to="/about" class="nav-link">
        <button class="btn btn-primary" > 
            <span style={{"font-size": "24px"}}>
                Sign Up!
            </span>
        </button>
    </Link>
}

function LandingFrameMessage() {

    const style = {
        margin: "auto",
        padding: "10% 35% 10% 15%",
        color: "white"
    }

    return <div style={style}>
        
        <div style={{"font-size": "96px"}}>
            Preppers
        </div>
        
        <div style={{"font-size": "36px"}}>
            Staying in touch with those who are prepare
            for society breaking down
        </div>
             
        <br />

        <LandingPageButton />

    </div>
}

function LandingFrame() {
    const style = {

        "background-image": "url(" + background + ")" ,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        position: "absolute",
        height: "100%",
        width: "100%"
    }

    return <div style={style}>
        <LandingFrameMessage />        
    </div>
}

function HomePage() {
    return <div>
        <LandingFrame />
    </div>
}

export default HomePage