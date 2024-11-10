import "./Nav.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Profile from "./Profile";

function Nav(props) {
    let navTxt = props.mode.navTxt;
    let nav = props.mode.navBG;
    let butt = props.mode.button;
    return (
        <>
            <header style={{ backgroundColor: nav }}>
                <Link to="/" id="logo"><img src="/pics/logo.png" alt="" /></Link>
                <div id="name"><h1 style={{ color: navTxt }}>QuizMaster</h1></div>

                <div id="auth-buttons">
                    <label className="switch">
                        <input type="checkbox" />
                        <img src="/pics/sun.png" alt="" className='modeImg' onClick={() => { props.change(); }} />
                        <img src="/pics/moon.png" alt="" className='modeImg' onClick={() => { props.change(); }} />
                    </label>
                    {isLogged(props.profile) ? (<Profile profile={props.profile}/>) :
                        (<Link to="/reg" id="signup-button" style={{ color: navTxt, backgroundColor: butt }}>Sign Up</Link>)}
                </div>
            </header>
            <div id="holder"></div>
        </>
    )
}

export default Nav;
function isLogged(x) {
    return x != null;
}