import "./Nav.css";
import { Link } from "react-router-dom";

function Nav(props) {
    let navTxt = props.mode.navTxt;
    let nav = props.mode.navBG;
    let butt = props.mode.button;
    return (
        <>
        <header style={{backgroundColor: nav}}>
            <div id="logo"><img src="/pics/logo.png" alt="" /></div>
            <div id="name"><h1 style={{color: navTxt}}>QuizMaster</h1></div>

            <div id="auth-buttons">
                <label className="switch">
                    <input type="checkbox" />
                    <img src="/pics/sun.png" alt="" className='modeImg' onClick={()=>{props.change();}}/>
                    <img src="/pics/moon.png" alt="" className='modeImg' onClick={()=>{props.change();}} />
                </label>
                <Link to="/" id="signup-button" style={{color: navTxt, backgroundColor: butt}}>Sign Up</Link>
            </div>
        </header>
        <div id="holder"></div>
        </>
    )
}

export default Nav;