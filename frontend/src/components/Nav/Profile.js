import './profile.css'
function Profile({ mode, profile }) {
    let dp = '';
    if (profile.dp == '') {
        dp = '/pics/profilePlaceholder.png';
    }
    return (
        <>
            <div id="profile" onClick={slide} >
                <img src={dp} alt="" />
            </div>
            <div id="sidebar" style={{ backgroundColor: mode.mainbg2 }}>

            </div>
        </>
    );
}

export default Profile;

function slide() {
    if (document.getElementById('sidebar').style.transform == '')
        document.getElementById('sidebar').style.transform = 'translateX(-100%)';
    else document.getElementById('sidebar').style.transform = '';
}