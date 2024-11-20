import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Account.css';

function Account({ mode, profile }) {
    let nav = useNavigate();
    let dp = '/pics/profilePlaceholder.png';
    useEffect(() => {
        if (profile == null) return;
        dp = profile.dp;
        if (profile.dp != '') {
            dp = profile.dp;
        }
        console.log(profile);
        

    }, [profile])
    return (
        <div id="accView" style={{ backgroundColor: mode.mainBG, color: mode.txt}}>
            <div id="stats">
                <div id="accProfile">
                    <img src={dp} alt="" id='dp' />
                </div>
                {(profile == null) ? <></> :
                    <div>
                        <h3>Name: {profile.Name}</h3>
                        <h3>Username: {profile.user}</h3>
                        <h3>Corrects: {profile.corrects}</h3>
                        <h3>Wrongs: {profile.wrongs}</h3>
                    </div>
                }

            </div>
            <div id="friends"></div>
        </div>
    )
}

export default Account;