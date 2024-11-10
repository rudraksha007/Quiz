import './profile.css'
function Profile({profile}) {
    let dp = '';
    if(profile.dp==''){
        dp = '/pics/profilePlaceholder.png';
    }
    return (
        <>
            <div id="profile">
                <img src={dp} alt="" />
            </div>
            <div id="dropdown">
                
            </div>
        </>
    );
}

export default Profile;