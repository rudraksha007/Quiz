import './profile.css'
let dp = '';
function Profile({ mode, profile }) {
    if (profile.dp == '') {
        dp = '/pics/profilePlaceholder.png';
    }
    return (
        <>
            <div id="profile" onClick={slide} >
                <img src={dp} alt="" id='dp' />
            </div>
            <div id="sidebar" style={{ backgroundColor: mode.mainbg2 }}>
                <img src={dp} alt="" />
                <div style={{color:mode.txt}}>Account Settings</div>
                <div style={{color:mode.txt}}>My Quizzes</div>
                <div style={{color:mode.txt}}>Leaderboard</div>
                <div style={{color:mode.txt}}>Logout</div>
            </div>
        </>
    );
}

export default Profile;

function slide() {
    if (document.getElementById('sidebar').style.transform == '') {
        document.getElementById('sidebar').style.transform = 'translateX(-100%)';
        document.getElementById('dp').src = '/pics/close.png';
    }

    else {
        document.getElementById('sidebar').style.transform = '';
        document.getElementById('dp').src = dp;
    }
}