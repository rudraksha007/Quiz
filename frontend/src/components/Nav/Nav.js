import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import { useEffect } from "react";

function Nav({ mode, change, profile, setProfile }) {
    useEffect(() => {
        let data = document.cookie;
        if (profile == null && data.length != 0) {
            let cookie = null;
            data.split(';').forEach((e) => {
                if (e.startsWith('user=')) {
                    cookie = JSON.parse(e.replace('user=', ''));
                    return;
                }
            });
            if (Object.keys(cookie).length==0)return;
            var body = { user: cookie.user, pass: null, autoCode: cookie.autoCode, checked: false };
            fetch("/login", {
                method: "POST",
                body: JSON.stringify(body),
                headers: { "Content-type": "application/json" },
                mode: 'cors'
            }).then(async function (response) {
                if (response.status === 200) {
                    response.json().then((data) => {setProfile(data);});
                }
                else {
                    alert('Last Used password on this device is wrong');
                    document.cookie = `user={};max-age=${60 * 60 * 24 * 365}`
                }
            })
        }
    }, []);

    let navTxt = mode.navTxt;
    let nav = mode.navBG;
    let butt = mode.button;

    return (
        <>
            <header style={{ backgroundColor: nav }}>
                <Link to="/" id="logo"><img src="/pics/logo.png" alt="" /></Link>
                <div id="name"><h1 style={{ color: navTxt }}>QuizMaster</h1></div>

                <div id="auth-buttons">
                    <label className="switch">
                        <input type="checkbox" />
                        <img src="/pics/sun.png" alt="" className='modeImg' onClick={() => { change(); }} />
                        <img src="/pics/moon.png" alt="" className='modeImg' onClick={() => { change(); }} />
                    </label>
                    {profile!=null ? (<Profile mode={mode} profile={profile} />) :
                        (<Link to="/reg" id="signup-button" style={{ color: navTxt, backgroundColor: butt }}>Sign Up</Link>)}
                </div>
            </header>
            <div id="holder"></div>
        </>
    )
}

export default Nav;